import PostListSkeleton from "@/components/loader/PostListSkeleton";
import PostList from "@/components/post/PostList";
import VarityCard from "@/components/varity/VarityCard";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="space-y-4">
      <Suspense fallback={<PostListSkeleton />}>
        <PostList />
      </Suspense>
      <VarityCard />
    </div>
  );
}
