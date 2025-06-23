"use client";

import { BoardList } from "@/lib/prisma";
import { format } from "date-fns";
import { ChevronRight, Clock, MessageCircle, Users } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface BoardCardProps {
  readonly board: BoardList;
  readonly isGrid?: boolean;
}

export default function BoardCard({ board, isGrid = true }: BoardCardProps) {
  const [hoveredBoard, setHoveredBoard] = useState<string | null>(null);

  return (
    <Link href={board.path}>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
      className={`
        group relative bg-card text-card-foreground rounded-md mb-3
        ${isGrid ? "p-6" : "p-4 flex items-center space-x-4"}
        cursor-pointer overflow-hidden hover:bg-muted transition-colors
        ${hoveredBoard === board.id ? "border-none" : "border border-border"}
      `}
      onMouseEnter={() => setHoveredBoard(board.id)}
      onMouseLeave={() => setHoveredBoard(null)}
    >
      {/* Laser border animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredBoard === board.id ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-transparent via-transparent to-primary bg-[length:200%_100%] animate-laser"
      />

      {/* Gradient overlay on hover */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hoveredBoard === board.id ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="absolute inset-0 rounded-md bg-gradient-to-r from-accent/10 to-primary/5"
      />

      <div className={`relative z-10 ${isGrid ? "" : "flex-1"}`}>
        {/* Header */}
        <div
          className={`flex items-start justify-between ${
            isGrid ? "mb-3" : "mb-2"
          }`}
        >
          <motion.h3
            whileHover={{ color: "hsl(var(--primary))" }}
            className={`font-semibold text-foreground ${
              isGrid ? "text-lg" : "text-base"
            }`}
          >
            {board.name}
          </motion.h3>
          <motion.div whileHover={{ x: 4 }} className="text-muted-foreground">
            <ChevronRight className={`${isGrid ? "w-5 h-5" : "w-4 h-4"}`} />
          </motion.div>
        </div>

        {/* Description */}
        <p
          className={`leading-relaxed text-muted-foreground
            ${isGrid ? "mb-4 text-sm" : "mb-2 text-xs"}
            ${isGrid ? "line-clamp-3" : "line-clamp-2"}`}
        >
          {board.description}
        </p>

        {/* Stats */}
        <div
          className={`flex items-center ${
            isGrid ? "space-x-4 mb-4" : "space-x-3 mb-2"
          } text-sm`}
        >
          <div className="flex items-center space-x-1 text-muted-foreground">
            <MessageCircle className={`${isGrid ? "w-4 h-4" : "w-3 h-3"}`} />
            <span>{board.topic_count} หัวข้อ</span>
          </div>
          <div className="flex items-center space-x-1 text-muted-foreground">
            <Users className={`${isGrid ? "w-4 h-4" : "w-3 h-3"}`} />
            <span>{board.answer_count} ตอบกลับ</span>
          </div>
        </div>

        {/* Latest Activity */}
        <div
          className={`flex items-center justify-between border-t border-border
            ${isGrid ? "pt-3" : "pt-2"}`}
        >
          <div className="flex items-center space-x-2">
            <div
              className={`
                ${isGrid ? "w-8 h-8" : "w-6 h-6"}
                rounded-full flex items-center justify-center text-sm font-bold
                bg-gradient-to-r from-primary/80 to-primary text-primary-foreground
              `}
            >
              {board.answer_current.author.charAt(0)}
            </div>
            <div>
              <p
                className={`font-medium text-foreground ${
                  isGrid ? "text-sm" : "text-xs"
                }`}
              >
                {board.answer_current.author}
              </p>
              <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                <Clock className="w-3 h-3" />
                <span>
                  {format(board.answer_current.date, "dd MMM yyyy HH:mm")}
                </span>
              </div>
            </div>
          </div>

          {/* Activity indicator */}
          <div
            className={`
              ${isGrid ? "w-2 h-2" : "w-1.5 h-1.5"}
              rounded-full animate-pulse bg-primary
            `}
          />
        </div>
      </div>

      {/* Hover effect */}
      {hoveredBoard === board.id && (
        <div className="absolute inset-0 transition-opacity duration-300 rounded-md bg-gradient-to-r from-secondary/5 to-primary/8" />
        )}
      </motion.div>
    </Link>
  );
}
