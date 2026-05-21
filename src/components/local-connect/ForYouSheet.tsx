import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowDownAZ, BarChart3, List, LayoutGrid, Grid3x3, Grid2x2 } from "lucide-react";
import { useEffect, useState } from "react";

type SortKey = "az" | "usage";
type ViewKey = "list" | "compact" | "medium" | "large";

export function ForYouSheet({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sort, setSort] = useState<SortKey>("usage");
  const [view, setView] = useState<ViewKey>("list");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const sortOptions: { key: SortKey; label: string; Icon: typeof ArrowDownAZ }[] = [
    { key: "az", label: "A–Z", Icon: ArrowDownAZ },
    { key: "usage", label: "Usage", Icon: BarChart3 },
  ];

  const viewOptions: { key: ViewKey; label: string; Icon: typeof List }[] = [
    { key: "list", label: "List", Icon: List },
    { key: "compact", label: "Compact", Icon: Grid3x3 },
    { key: "medium", label: "Medium", Icon: Grid2x2 },
    { key: "large", label: "Large", Icon: LayoutGrid },
  ];

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/40"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            role="dialog"
            aria-label="For You"
            className="relative w-full max-w-md rounded-t-3xl bg-background pb-6 shadow-2xl md:mb-4 md:rounded-3xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 350, damping: 34 }}
          >
            <div className="flex justify-center pt-3">
              <span className="h-1 w-10 rounded-full bg-muted" />
            </div>

            <div className="relative flex items-center justify-center px-5 pt-3 pb-4">
              <h2 className="text-base font-semibold text-foreground">For You</h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-1/2 -translate-y-1/2 grid h-8 w-8 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="px-5 pb-2">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Sort By
              </p>
              <div className="flex gap-3">
                {sortOptions.map(({ key, label, Icon }) => {
                  const selected = sort === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSort(key)}
                      className={`flex flex-1 items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-medium transition-all active:scale-[0.98] ${
                        selected
                          ? "border-brand bg-brand/10 text-brand"
                          : "border-border bg-background text-foreground hover:bg-muted"
                      }`}
                    >
                      <Icon className="h-4 w-4" strokeWidth={1.75} />
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="my-4 h-px bg-border" />

            <div className="px-5">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                View
              </p>
              <div className="flex gap-3">
                {viewOptions.map(({ key, label, Icon }) => {
                  const selected = view === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setView(key)}
                      aria-label={label}
                      className={`flex flex-1 flex-col items-center gap-1.5 rounded-2xl border px-2 py-3 transition-all active:scale-[0.98] ${
                        selected
                          ? "border-brand bg-brand/10 text-brand"
                          : "border-border bg-background text-muted-foreground hover:bg-muted hover:text-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                      <span className="text-[11px] font-medium">{label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
