import { formatDistanceToNow } from "date-fns";
import { Card, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { ImageIcon, MessageCircle, User } from "lucide-react";
import { MAJOR_ENUM } from "@/lib/prisma";

interface PostCardProps {
  readonly post: {
    id: string;
    title: string;
    content: string;
    images?: string[];
    authorId: string;
    likes: number;
    createdAt: Date;
    major: MAJOR_ENUM;
    author: {
      id: string;
      name: string | null;
      email: string;
      totalLikes: number;
      isPrisoner?: boolean;
    };
    category: {
      id: string;
      name: string;
    } | null;
    _count: {
      comments: number;
    };
  };
  readonly isFirstCard?: boolean;
  readonly index?: number;
}

export default function PostCard({
  post,
  isFirstCard = false,
  index,
}: PostCardProps) {
  if (index !== undefined && index >= 5) {
    return (
      <div className="hover:shadow-md transition-shadow flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-row gap-4">
            <Link
              href={`/posts/${post.id}`}
              className="text-lg font-semibold hover:text-primary transition-colors"
            >
              {post.title}
            </Link>
            <Badge variant="secondary" className="w-fit">
              {post.major}
            </Badge>
          </div>
          <div>
            <p className="text-xs text-muted-foreground">
              {formatDistanceToNow(post.createdAt, { addSuffix: true })}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (isFirstCard) {
    return (
      <Card className="hover:shadow-md transition-shadow h-fit">
        <CardHeader>
          <div className="flex gap-4">
            {post.images && post.images.length > 0 && (
              <div className="flex-shrink-0">
                <Image
                  src={post.images[0] || "/placeholder.svg"}
                  alt={`${post.title} preview`}
                  width={200}
                  height={200}
                  className="w-48 h-36 md:w-72 md:h-48 object-cover rounded border"
                />
              </div>
            )}

            {/* Content section */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-2">
                <Link
                  href={`/posts/${post.id}`}
                  className="text-xl font-bold hover:text-primary transition-colors"
                >
                  {post.title}
                </Link>
                {post.category && (
                  <Badge variant="secondary">{post.major}</Badge>
                )}
              </div>

              <p className="text-sm text-muted-foreground line-clamp-4 mb-4">
                {post.content.substring(0, 300)}...
              </p>

              {/* Stats for first card */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <Link
                      href={`/profile/${post.author.id}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.author.name ?? post.author.email}
                    </Link>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle className="h-4 w-4" />
                    <span>{post._count.comments} comments</span>
                  </div>
                  {post.images && post.images.length > 1 && (
                    <div className="flex items-center gap-1">
                      <ImageIcon className="h-4 w-4" />
                      <span>{post.images.length} images</span>
                    </div>
                  )}
                </div>
                <span>
                  {formatDistanceToNow(post.createdAt, { addSuffix: true })}
                </span>
              </div>
            </div>
          </div>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card className="hover:shadow-md transition-shadow h-fit">
      <CardHeader className="pb-3">
        <div className="flex gap-2">
          {post.images && post.images.length > 0 && (
            <div className="flex-shrink-0">
              <Image
                src={post.images[0] || "/placeholder.svg"}
                alt={`${post.title} preview`}
                width={96}
                height={96}
                className="w-32 h-32 object-cover rounded border"
              />
            </div>
          )}
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <Link
                href={`/posts/${post.id}`}
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                {post.title.substring(0, 30)}...
              </Link>
              {post.category && <Badge variant="secondary">{post.major}</Badge>}
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-3">
              {post.content.substring(0, 120)}...
            </p>
            <div className="flex items-center gap-4 justify-end mt-2">
              <div className="flex items-center gap-1">
                <User className="h-3 w-3 text-muted-foreground" />
                <Link
                  href={`/profile/${post.author.id}`}
                  className="hover:text-primary transition-colors text-xs truncate max-w-20 text-muted-foreground"
                >
                  {post.author.name ?? post.author.email}
                </Link>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="h-3 w-3 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">
                  {post._count.comments} comments
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
