import { formatDistanceToNow } from "date-fns";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Link from "next/link";
import { Badge } from "../ui/badge";
import { ImageIcon, MessageCircle, User } from "lucide-react";

interface PostCardProps {
  readonly post: {
    id: string;
    title: string;
    content: string;
    images?: string[];
    authorId: string;
    likes: number;
    createdAt: Date;
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
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow mb-4">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <Link
                href={`/posts/${post.id}`}
                className="text-lg font-semibold hover:text-primary transition-colors"
              >
                {post.title}
              </Link>
              {/* <PostActions post={post} onUpdate={onUpdate} /> */}
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
              {post.content.substring(0, 150)}...
            </p>

            {/* Image preview */}
            {post.images && post.images.length > 0 && (
              <div className="mt-2">
                <div className="flex gap-2 overflow-hidden">
                  {post.images.slice(0, 3).map((image, index) => (
                    <img
                      key={index}
                      src={image || "/placeholder.svg"}
                      alt={`${post.title} preview ${index + 1}`}
                      className="w-16 h-16 object-cover rounded border"
                    />
                  ))}
                  {post.images.length > 3 && (
                    <div className="w-16 h-16 bg-muted rounded border flex items-center justify-center text-xs text-muted-foreground">
                      +{post.images.length - 3}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
          {post.category && (
            <Badge variant="secondary" className="ml-4">
              {post.category.name}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4" />
                <Link
                  href={`/profile/${post.author.id}`}
                  className="hover:text-primary transition-colors"
                >
                  {post.author.name || post.author.email}
                </Link>
                {/* <PrisonRankBadge
                  totalLikes={post.author.totalLikes}
                  userId={post.author.id}
                  isPrisoner={post.author.isPrisoner || false}
                  showWarning={false}
                /> */}
              </div>
              {/* <MiniRankProgress
                totalLikes={post.author.totalLikes}
                className="ml-6"
                showText={false}
              /> */}
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle className="h-4 w-4" />
              <span>{post._count.comments} comments</span>
            </div>
            {post.images && post.images.length > 0 && (
              <div className="flex items-center gap-1">
                <ImageIcon className="h-4 w-4" />
                <span>
                  {post.images.length} image
                  {post.images.length !== 1 ? "s" : ""}
                </span>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2">
            {/* <LikeButton postId={post.id} initialLikes={post.likes} /> */}
            <span>
              {formatDistanceToNow(post.createdAt, { addSuffix: true })}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
