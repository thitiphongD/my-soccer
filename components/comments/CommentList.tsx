import { Comment } from "@/lib/prisma";
import { Card } from "../ui/card";
import { isPrisonUser, getPrisonWarning } from "@/lib/prison-ranks";
import Link from "next/link";
import { Heart, MessageCircle, ThumbsDown } from "lucide-react";
import { Button } from "../ui/button";
interface CommentListProps {
  readonly comments: Comment[];
  readonly currentUserId: string;
  readonly onUpdate: () => void;
}

export default function CommentList({
  comments,
  currentUserId,
  onUpdate,
}: CommentListProps) {
  return (
    <div className="space-y-2">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <Card
            key={comment.id}
            className={`
              ${
                isPrisonUser(currentUserId)
                  ? "border-gray-400 bg-gray-50/50"
                  : ""
              } p-4
            `}
          >
            <div className="space-y-4 p-2">
              <div className="grid grid-cols-5 gap-2">
                <Link
                  href={`/profile/${comment.authorId}`}
                  className="text-muted-foreground text-sm col-span-1 hover:text-primary transition-colors"
                >
                  {comment.authorId}
                </Link>
                <p className="whitespace-pre-wrap col-span-4">{comment.content}</p>
              </div>
              <div className="flex items-center justify-end gap-2">
                <Button variant="outline" size="sm">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ThumbsDown className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))
      ) : (
        <div className="text-center text-gray-500">No comments yet.</div>
      )}
    </div>
  );
}
