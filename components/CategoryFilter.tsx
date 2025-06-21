"use client";

import { mockCategories } from "@/lib/prisma";
import { useState } from "react";

export default function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState<
    string | undefined
  >();

  return (
    <div className="rounded-md p-2 border bg-[var(--card-muted)]">
      {mockCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`
          block w-full text-left rounded-md transition-colors cursor-pointer p-2 my-1
          ${selectedCategory === category.id ? "bg-primary" : "hover:bg-muted"}
          `}
        >
          <span>{category.name}</span>
        </button>
      ))}
    </div>
  );
}
