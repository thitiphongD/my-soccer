import { Post } from "@/lib/prisma";
import { getPrisonWarning, isPrisonUser } from "@/lib/prison-ranks";
import { AlertTriangle, Calendar, Heart, ThumbsDown, User } from "lucide-react";
import { Badge } from "../ui/badge";
import { formatDistanceToNow } from "date-fns";
import { mockUsers } from "@/mock-data/user.mock";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { SimpleInstagramEmbed } from "./SimpleInstagramEmbed";

interface PostDetailProps {
  readonly postData: Post;
}

// Helper function to check if URL is Instagram post
const isInstagramUrl = (url: string): boolean => {
  return url.includes("instagram.com/p/");
};

// Helper function to extract Instagram post ID from URL
const extractInstagramPostId = (url: string): string | null => {
  const match = url.match(/(?:www\.)?instagram\.com\/p\/([^/?]+)/);
  return match ? match[1] : null;
};

export default function PostDetail({ postData }: PostDetailProps) {
  const isInPrison = isPrisonUser(postData.authorId);
  const prisonWarning = getPrisonWarning(postData.authorId);

  const authorName = mockUsers.find(
    (user) => user.id === postData.authorId
  )?.name;

  return (
    <article className="space-y-4">
      {isInPrison && prisonWarning && (
        <div className="p-3 bg-orange-50 border border-orange-200 rounded-md flex items-center gap-2 text-sm text-orange-800">
          <AlertTriangle className="h-4 w-4" />
          <span>{prisonWarning}</span>
        </div>
      )}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {postData.categoryId && (
              <Badge variant="secondary">{postData.major}</Badge>
            )}
          </div>
          {/* <PostActions post={post} /> */}
        </div>
        <h1 className="text-3xl font-bold">{postData.title}</h1>
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <Link href={`/profile/${postData.authorId}`}>{authorName}</Link>
                {/* {isInPrison ? (
                  <PrisonRankBadge
                    rank={effectiveRank}
                    totalLikes={post.author.totalLikes}
                    isPrisoner={post.author.isPrisoner}
                  />
                ) : (
                  <UserRankBadge totalLikes={post.author.totalLikes} />
                )} */}
              </div>
              {/* {!isInPrison && <MiniRankProgress totalLikes={post.author.totalLikes} className="ml-6" />} */}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span>
                {formatDistanceToNow(postData.createdAt, { addSuffix: true })}
              </span>
            </div>
          </div>
          <div className="flex items-center">
            <Button variant="ghost" size="sm">
              <Heart className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <ThumbsDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <section className="flex flex-col gap-4 justify-center items-center">
          <Image
            src={postData.imageTitle}
            alt={postData.title}
            width={700}
            height={700}
          />
          <div className="flex flex-col justify-center items-center">
            <p>{postData.content}</p>
            {postData.images?.map((image) => (
              <Image
                src={image}
                alt={postData.title}
                width={700}
                height={700}
                key={image}
              />
            ))}
            {postData.source && (
              <div className="flex flex-col justify-center items-center gap-4 pt-4">
                {postData.source.map((sourceUrl, index) =>
                  isInstagramUrl(sourceUrl) ? (
                    <SimpleInstagramEmbed
                      key={sourceUrl}
                      postId={extractInstagramPostId(sourceUrl) || ""}
                    />
                  ) : (
                    <p key={index}>{sourceUrl}</p>
                  )
                )}
              </div>
            )}
          </div>
        </section>
      </div>
    </article>
  );
}
