"use client";

import React from "react";

interface SimpleInstagramEmbedProps {
  readonly postId: string;
  readonly width?: number;
  readonly height?: number;
}

export function SimpleInstagramEmbed({
  postId,
  width = 500,
  height = 580,
}: SimpleInstagramEmbedProps) {
  return (
    <div className="flex justify-center items-center">
      <iframe
        src={`https://www.instagram.com/p/${postId}/embed/`}
        width={width}
        height={height}
        frameBorder="0"
        scrolling="no"
        className="rounded-lg"
        title={`Instagram post ${postId}`}
        loading="lazy"
      />
    </div>
  );
}
