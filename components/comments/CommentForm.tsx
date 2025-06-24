import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { useState } from "react";

interface CommentFormProps {
  readonly postId: string;
  readonly onCommentAdded: () => void;
}

export default function CommentForm({
  postId,
  onCommentAdded,
}: CommentFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [content, setContent] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      onCommentAdded();
      setContent("");
    } catch (error) {
      console.error("Error adding comment:", error);
    } finally {
      setIsLoading(false);
    }
  };
  console.log(postId);

  return (
    <Card>
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <Textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Write your comment..."
            rows={4}
            required
          />
          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Adding..." : "Add Comment"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
