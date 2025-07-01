"use client";

import React from "react";

/**
 * Supported social media platforms for embedding
 */
type SocialMediaPlatform = "instagram" | "facebook" | "twitter" | "youtube";

interface SocialMediaEmbedProps {
  readonly platform: SocialMediaPlatform;
  readonly postId: string;
  readonly width?: number;
  readonly height?: number;
}

interface PlatformConfig {
  readonly baseUrl: string;
  readonly defaultWidth: number;
  readonly defaultHeight: number;
}

/**
 * Configuration for each supported platform
 */
const PLATFORM_CONFIGS: Record<SocialMediaPlatform, PlatformConfig> = {
  instagram: {
    baseUrl: "https://www.instagram.com/p/{postId}/embed/",
    defaultWidth: 500,
    defaultHeight: 580,
  },
  facebook: {
    baseUrl:
      "https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/{postId}&show_text=false",
    defaultWidth: 500,
    defaultHeight: 580,
  },
  twitter: {
    baseUrl: "https://platform.twitter.com/embed/Tweet.html?id={postId}",
    defaultWidth: 500,
    defaultHeight: 600,
  },
  youtube: {
    baseUrl: "https://www.youtube.com/embed/{postId}",
    defaultWidth: 800,
    defaultHeight: 450,
  },
};

/**
 * Generate embed URL for the specified platform
 */
function generateEmbedUrl(
  platform: SocialMediaPlatform,
  postId: string
): string {
  const config = PLATFORM_CONFIGS[platform];
  return config.baseUrl.replace("{postId}", postId);
}

/**
 * Get platform display name for accessibility
 */
function getPlatformDisplayName(platform: SocialMediaPlatform): string {
  const displayNames: Record<SocialMediaPlatform, string> = {
    instagram: "Instagram",
    facebook: "Facebook",
    twitter: "Twitter/X",
    youtube: "YouTube",
  };
  return displayNames[platform];
}

/**
 * Social media embed component that supports multiple platforms
 */
export function SocialMediaEmbed({
  platform,
  postId,
  width,
  height,
}: SocialMediaEmbedProps) {
  const config = PLATFORM_CONFIGS[platform];
  const embedUrl = generateEmbedUrl(platform, postId);
  const embedWidth = width ?? config.defaultWidth;
  const embedHeight = height ?? config.defaultHeight;
  const platformName = getPlatformDisplayName(platform);

  return (
    <div className="flex justify-center items-center">
      <iframe
        src={embedUrl}
        width={embedWidth}
        height={embedHeight}
        frameBorder="0"
        scrolling="no"
        className="rounded-lg"
        title={`${platformName} post ${postId}`}
        loading="lazy"
        allow={
          platform === "youtube"
            ? "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            : undefined
        }
      />
    </div>
  );
}
