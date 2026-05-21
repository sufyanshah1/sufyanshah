import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ForYouSheet } from "./ForYouSheet";

const TABS = ["History", "Contacts", "Favorites"] as const;
export type Tab = (typeof TABS)[number];

export function Tabs({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-border bg-background">
      <div className="flex items-stretch w-full px-[16px] py-0">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className="relative flex-1 py-3 text-sm font-medium transition-colors"
          >
            <span
              className={`inline-flex items-center justify-center gap-1.5 ${
                active === tab ? "text-brand" : "text-muted-foreground"
              }`}
            >
              {tab}
            </span>
            {active === tab && (
              <motion.div
                layoutId="tab-underline"
                className="absolute bottom-0 left-0 right-0 mx-auto h-0.5 w-12 rounded-full bg-brand"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
          </button>
        ))}
        <button
          type="button"
          aria-label="For You menu"
          onClick={() => setOpen(true)}
          className="ml-1 flex items-center justify-center rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground active:scale-95"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>
      <ForYouSheet open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
