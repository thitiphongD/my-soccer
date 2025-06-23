"use client";

import PostDetail from "@/components/post/PostDetail";
import { Skeleton } from "@/components/ui/skeleton";
import { mockPosts, Post } from "@/lib/prisma";
import { Suspense, use, useEffect, useState } from "react";

export default function GlobalNewsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = use(params);
  const [post, setPost] = useState<Post | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getPost = async (postId: string): Promise<void> => {
    try {
      setIsLoading(true);
      // Filter mockPosts to find the post with matching id
      const foundPost = mockPosts.find((post) => post.id === postId);
      setPost(foundPost || null);
    } catch (error) {
      console.error("Error fetching post:", error);
      setPost(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (resolvedParams.id) {
      getPost(resolvedParams.id);
    }
  }, [resolvedParams.id]);

  if (isLoading) {
    return (
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <PostDetailSkeleton />
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8 max-w-4xl">
      {post ? (
        <Suspense fallback={<PostDetailSkeleton />}>
          <PostDetail postData={post} />
        </Suspense>
      ) : (
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            ไม่พบโพสต์ที่ต้องการ
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            โพสต์ที่คุณค้นหาอาจถูกลบหรือไม่มีอยู่ในระบบ
          </p>
        </div>
      )}

      <div className="mt-8">
        <Suspense fallback={<CommentSkeleton />}>
          {/* <CommentSection postId={resolvedParams.id} /> */}
        </Suspense>
      </div>
    </main>
  );
}

function PostDetailSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-8 w-3/4" />
      <Skeleton className="h-4 w-1/4" />
      <Skeleton className="h-32 w-full" />
    </div>
  );
}

function CommentSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-6 w-1/4" />
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="border rounded-lg p-4">
          <Skeleton className="h-4 w-1/4 mb-2" />
          <Skeleton className="h-16 w-full" />
        </div>
      ))}
    </div>
  );
}
