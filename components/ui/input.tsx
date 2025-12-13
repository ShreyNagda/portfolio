import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-[40px] rounded-md border border-white/10 focus:border-accent px-4 font-light text-base placeholder:text-white/20 outline-none bg-transparent",
        className
      )}
      {...props}
    />
  );
}

export { Input };
