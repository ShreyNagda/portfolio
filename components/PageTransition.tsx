"use client";

import { AnimatePresence, easeInOut, motion } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <AnimatePresence>
      <div key={pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 0.5, duration: 0.5, ease: easeInOut },
          }}
          className="h-screen w-screen top-0 fixed bg-primary pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  );
}
