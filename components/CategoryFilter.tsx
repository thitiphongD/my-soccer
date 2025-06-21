"use client";

import { mockCategories } from "@/lib/prisma";
import Link from "next/link";
import { useState } from "react";

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  return (
    <div className="rounded-md p-2 border bg-[var(--card-muted)]">
      {mockCategories.map((category) => (
        <Link
          key={category.id}
          href={category.path}
          onClick={() => setSelectedCategory(category.id)}
          className={`
          relative block w-full text-left rounded-md transition-colors cursor-pointer p-2 my-2 overflow-hidden
          ${
            selectedCategory === category.id
              ? "bg-primary"
              : "hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/5"
          }
          `}
        >
          {/* Laser border animation on hover */}
          <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-transparent via-transparent to-primary opacity-0 hover:opacity-100 transition-opacity bg-[length:200%_100%] animate-laser" />

          {/* Content */}
          <span className="relative z-10 hover:text-primary">{category.name}</span>
        </Link>
      ))}
    </div>
  );
}
