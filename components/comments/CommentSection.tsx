import { mockComments, Comment } from "@/lib/prisma";
import { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

interface CommentSectionProps {
  readonly postId: string;
}

export default function CommentSection({ postId }: CommentSectionProps) {
  const [comments, setComments] = useState<Comment[]>([]);

  const getComments = () => {
    const comments = mockComments.filter(
      (comment) => comment.postId === postId
    );
    setComments(comments);
  };
  useEffect(() => {
   
    getComments();
  }, [postId]);

  

  const handleCommentAdded = () => {
    getComments()
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Comments ({comments.length})</h2>
      <CommentForm postId={postId} onCommentAdded={handleCommentAdded} />
      <CommentList comments={comments} currentUserId={"user1"} onUpdate={handleCommentAdded} />
    </div>
  );
}
