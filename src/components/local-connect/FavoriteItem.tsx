import { motion } from "framer-motion";
import { Phone, Star, MoreVertical } from "lucide-react";
import { Avatar } from "./Avatar";
import type { Contact } from "./types";

export function FavoriteItem({ contact, index }: { contact: Contact; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50"
    >
      <div className="relative shrink-0">
        <Avatar name={contact.name} verified={contact.verified} size={48} />
        <span className="absolute -bottom-0.5 -left-0.5 grid h-4 w-4 place-items-center rounded-full bg-background ring-2 ring-background">
          <span className="grid h-4 w-4 place-items-center rounded-full bg-amber-100">
            <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
          </span>
        </span>
      </div>
      <p className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">
        {contact.name}
      </p>
      <div className="flex items-center gap-1">
        <button
          aria-label="Call"
          className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground shadow-sm transition-transform active:scale-95"
        >
          <Phone className="h-4 w-4" />
        </button>
        <button
          aria-label="More"
          className="grid h-10 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </motion.div>
  );
}
