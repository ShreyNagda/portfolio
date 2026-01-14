"use client";

import { toast } from "sonner";

export function useCopyToClipboard() {
  const copyToClipboard = async (text: string, message?: string) => {
    try {
      await navigator.clipboard.writeText(text);

      // Haptic feedback for mobile
      if (typeof window !== "undefined" && "vibrate" in navigator) {
        navigator.vibrate(50);
      }

      toast.success(message || "Copied to clipboard!", {
        duration: 2000,
      });
    } catch (error) {
      toast.error("Failed to copy to clipboard");
      console.error("Copy failed:", error);
    }
  };

  return { copyToClipboard };
}
