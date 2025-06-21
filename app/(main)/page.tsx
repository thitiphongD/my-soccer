import PostListSkeleton from "@/components/loader/PostListSkeleton";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<PostListSkeleton />}>PostList</Suspense>
    </div>
  );
}
