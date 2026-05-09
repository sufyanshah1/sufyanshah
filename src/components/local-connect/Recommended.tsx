import { motion } from "framer-motion";
import { Avatar } from "./Avatar";
import { recommended } from "./data";

export function Recommended() {
  return (
    <section className="bg-background pb-3 pt-4 shadow-sm">
      <h2 className="px-4 text-xs font-medium uppercase tracking-wide text-muted-foreground">
        Recommended
      </h2>
      <div className="mt-3 flex gap-4 overflow-x-auto px-4 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {recommended.map((c) => (
          <motion.button
            key={c.id}
            whileTap={{ scale: 0.95 }}
            className="flex w-[80px] shrink-0 flex-col items-center gap-2"
          >
            <Avatar name={c.name} size={64} verified={c.verified} />
            <span className="w-full truncate text-center text-xs text-foreground">{c.name}</span>
          </motion.button>
        ))}
      </div>
    </section>
  );
}
