import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={
        "w-full rounded-lg border border-white/10 bg-transparent px-3 py-2 text-sm text-white " +
        "outline-none placeholder:text-white/40 focus:border-purple-500 min-h-[120px] " +
        className
      }
      {...props}
    />
  );
}
