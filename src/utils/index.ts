import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  const mergedClass = twMerge(clsx(inputs));
  return mergedClass;
}
