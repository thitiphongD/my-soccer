"use client";

import { mockCategories } from "@/lib/prisma";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import * as Icons from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CategoryFilter() {
  const pathname = usePathname();
  const router = useRouter();

  const currentCategory = mockCategories.find((cat) => cat.path === pathname);

  const handleSelectChange = (value: string) => {
    const selectedCategory = mockCategories.find((cat) => cat.id === value);
    if (selectedCategory) {
      router.push(selectedCategory.path);
    }
  };

  return (
    <>
      {/* Mobile Select - visible only on mobile */}
      <div className="block md:hidden">
        <Select
          value={currentCategory?.id || ""}
          onValueChange={handleSelectChange}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="เลือกหมวดหมู่">
              {currentCategory && (
                <div className="flex items-center gap-2">
                  {(() => {
                    const LucideIcon =
                      Icons[currentCategory.icon as keyof typeof Icons];
                    if (
                      typeof LucideIcon === "function" ||
                      (typeof LucideIcon === "object" &&
                        LucideIcon !== null &&
                        "displayName" in LucideIcon)
                    ) {
                      // @ts-expect-error: LucideIcon type is valid for JSX
                      return <LucideIcon size={18} />;
                    }
                    return null;
                  })()}
                  {currentCategory.name}
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {mockCategories.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                <div className="flex items-center gap-2">
                  {(() => {
                    const LucideIcon =
                      Icons[category.icon as keyof typeof Icons];
                    if (
                      typeof LucideIcon === "function" ||
                      (typeof LucideIcon === "object" &&
                        LucideIcon !== null &&
                        "displayName" in LucideIcon)
                    ) {
                      // @ts-expect-error: LucideIcon type is valid for JSX
                      return <LucideIcon size={18} />;
                    }
                    return null;
                  })()}
                  {category.name}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="hidden md:block rounded-md p-2 border bg-[var(--card)]">
        {mockCategories.map((category) => (
          <Link
            key={category.id}
            href={category.path}
            className={`
            relative block w-full text-left rounded-md transition-colors cursor-pointer p-2 my-2 overflow-hidden
            ${
              pathname === category.path
                ? "bg-primary"
                : "hover:bg-gradient-to-r hover:from-accent/10 hover:to-primary/5"
            }
            `}
          >
            {/* Laser border animation on hover */}
            <div className="absolute inset-0 rounded-md p-[1px] bg-gradient-to-r from-transparent via-transparent to-primary opacity-0 hover:opacity-100 transition-opacity bg-[length:200%_100%] animate-laser" />

            {/* Content */}
            <span className="relative z-10 hover:text-primary flex items-center gap-2">
              {(() => {
                const LucideIcon = Icons[category.icon as keyof typeof Icons];
                if (
                  typeof LucideIcon === "function" ||
                  (typeof LucideIcon === "object" &&
                    LucideIcon !== null &&
                    "displayName" in LucideIcon)
                ) {
                  // @ts-expect-error: LucideIcon type is valid for JSX
                  return <LucideIcon size={18} />;
                }
                return null;
              })()}
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
