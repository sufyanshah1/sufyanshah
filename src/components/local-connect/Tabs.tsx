import { motion } from "framer-motion";
import { Menu } from "lucide-react";

const TABS = ["History", "Contacts", "Favorites"] as const;
export type Tab = (typeof TABS)[number];

export function Tabs({ active, onChange }: { active: Tab; onChange: (t: Tab) => void }) {
  return (
    <div className="border-b border-border bg-background">
      <div className="flex overflow-x-auto px-4">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className="relative flex-1 min-w-[33%] py-3 text-sm font-medium transition-colors"
          >
            <span
              className={`inline-flex items-center justify-center gap-1.5 ${
                active === tab ? "text-brand" : "text-muted-foreground"
              }`}
            >
              {tab}
              {tab === "Favorites" && <Menu className="h-4 w-4" />}
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
      </div>
    </div>
  );
}
