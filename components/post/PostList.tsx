"use client";

import { MAJOR_ENUM, prisma } from "@/lib/prisma";
import PostCard from "./PostCard";
import { useState, useEffect } from "react";
import { ScrollArea } from "../ui/scroll-area";

type PostWithRelations = {
  id: string;
  title: string;
  content: string;
  images?: string[];
  imageTitle: string;
  authorId: string;
  likes: number;
  createdAt: Date;
  major: MAJOR_ENUM;
  path: string;
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

export default function PostList() {
  const [posts, setPosts] = useState<PostWithRelations[]>([]);
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
      <div>
        {/* Grid layout for first 5 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {posts.slice(0, 5).map((post, index) => (
            <div key={post.id} className={index === 0 ? "col-span-full" : ""}>
              <PostCard post={post} isFirstCard={index === 0} index={index} />
            </div>
          ))}
        </div>

        {/* Vertical list for cards from index 5 onwards */}
        {posts.length > 5 && (
          <div className="flex flex-col gap-2">
            {posts.slice(5).map((post, index) => (
              <PostCard key={post.id} post={post} index={index + 5} />
            ))}
          </div>
        )}
      </div>
    </ScrollArea>
  );
}
