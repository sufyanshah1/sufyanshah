import { AnimatePresence, motion } from "framer-motion";
import { X, ArrowDownAZ, ArrowDown10, List, LayoutGrid, Grid2x2, Grid3x3 } from "lucide-react";
import { useState } from "react";

type Sort = "az" | "usage";
type View = "list" | "compact" | "medium" | "large";

export function ForYouSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sort, setSort] = useState<Sort>("usage");
  const [view, setView] = useState<View>("list");

  const sortOptions: { id: Sort; label: string; Icon: typeof ArrowDownAZ }[] = [
    { id: "az", label: "A-Z", Icon: ArrowDownAZ },
    { id: "usage", label: "Usage", Icon: ArrowDown10 },
  ];

  const viewOptions: { id: View; Icon: typeof List }[] = [
    { id: "list", Icon: List },
    { id: "compact", Icon: Grid3x3 },
    { id: "medium", Icon: Grid2x2 },
    { id: "large", Icon: LayoutGrid },
  ];

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/50"
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="fixed inset-x-0 bottom-0 z-50 mx-auto max-w-md rounded-t-3xl bg-background shadow-2xl"
          >
            <div className="relative flex items-center justify-center px-6 pt-5 pb-4">
              <h2 className="text-lg font-semibold text-foreground">For you</h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full text-foreground transition-colors hover:bg-muted"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-base text-foreground">Sort by</span>
                <div className="flex items-center gap-6">
                  {sortOptions.map(({ id, label, Icon }) => {
                    const active = sort === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setSort(id)}
                        className="flex flex-col items-center gap-1"
                      >
                        <Icon
                          className={`h-7 w-7 ${active ? "text-brand" : "text-foreground"}`}
                          strokeWidth={1.75}
                        />
                        <span
                          className={`text-xs ${active ? "text-brand font-medium" : "text-muted-foreground"}`}
                        >
                          {label}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="border-t border-border px-6 py-5">
              <div className="flex items-center justify-between">
                <span className="text-base text-foreground">View:</span>
                <div className="flex items-center gap-6">
                  {viewOptions.map(({ id, Icon }) => {
                    const active = view === id;
                    return (
                      <button
                        key={id}
                        onClick={() => setView(id)}
                        aria-label={id}
                        className="grid place-items-center"
                      >
                        <Icon
                          className={`h-7 w-7 ${active ? "text-brand" : "text-foreground"}`}
                          strokeWidth={1.75}
                        />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="h-6" />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
