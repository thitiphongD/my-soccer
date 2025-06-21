import BoardCard from "@/components/board/BoardCard";
import { mockBoardList } from "@/lib/prisma";

export default function BoardPage() {
  return (
    <div className="px-2">
      {mockBoardList.map((board) => (
        <BoardCard key={board.id} board={board} />
      ))}
    </div>
  );
}