import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex h-40 rounded-md border border-white/10 focus:border-accent p-4 font-light text-base placeholder:text-white/10 outline-none bg-transparent",
        "",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
