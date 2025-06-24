import { Comment } from "@/lib/prisma";

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
    <div className="space-y-4">
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.id}>
            <p>{comment.content}</p>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-500">No comments yet.</div>
      )}
    </div>
  );
}
