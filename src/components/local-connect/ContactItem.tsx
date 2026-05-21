import { motion } from "framer-motion";
import { Phone, Video, BadgeCheck } from "lucide-react";
import { Avatar } from "./Avatar";
import type { Contact } from "./types";

export function ContactItem({ contact, index }: { contact: Contact; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04, duration: 0.25 }}
      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50"
    >
      <Avatar name={contact.name} verified={contact.verified} size={48} />
      <p className="min-w-0 flex-1 truncate text-sm font-semibold text-foreground">
        {contact.name}
      </p>
      <div className="flex items-center gap-2">
        <button
          aria-label="Call"
          className="grid h-10 w-10 place-items-center rounded-full bg-brand text-brand-foreground shadow-sm transition-transform active:scale-95"
        >
          <Phone className="h-4 w-4" />
        </button>
        <button
          aria-label="Video"
          className="grid h-10 w-10 place-items-center rounded-full bg-muted text-foreground transition-colors hover:bg-secondary"
        >
          <Video className="h-4 w-4" />
        </button>
      </div>
    </motion.div>
  );
}
