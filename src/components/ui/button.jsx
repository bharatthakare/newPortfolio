import React from "react";

export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={
        "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm font-medium " +
        "!text-black bg-white hover:bg-gray-200 transition-colors duration-200 " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
