"use client";

import { prisma } from "@/lib/prisma";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";

export default function PostList() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await prisma.post.findMany({
          include: {
            author: {
              select: { id: true, name: true, email: true },
            },
            category: true,
            _count: {
              select: { comments: true },
            },
          },
          orderBy: { createdAt: "desc" },
        });
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">No posts found.</p>
      </div>
    );
  }
  return (
    <ScrollArea className="h-[calc(105vh-10rem)]">
      {posts.map((post) => (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        <PostCard key={post.id} post={post as any} />
      ))}
    </ScrollArea>
  );
}
