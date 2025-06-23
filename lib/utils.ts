import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function createAbsoluteUrl(path: string): string {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:5000";
  return `${baseUrl}${path}`;
}
