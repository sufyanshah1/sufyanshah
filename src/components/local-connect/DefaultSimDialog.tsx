import { AnimatePresence, motion } from "framer-motion";
import { PhoneCall } from "lucide-react";
import { useState } from "react";

type SimChoice = "ask" | "sim1" | "sim2";

const options: { id: SimChoice; title: string; subtitle: string; badge?: string }[] = [
  { id: "ask", title: "Always ask", subtitle: "Select SIM before calling" },
  { id: "sim1", title: "SIM 1", subtitle: "ZONG - SIM1", badge: "1" },
  { id: "sim2", title: "SIM 2", subtitle: "Jazz - SIM2", badge: "2" },
];

export function DefaultSimDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [selected, setSelected] = useState<SimChoice>("sim1");

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
          <div className="fixed inset-0 z-50 grid place-items-center p-6 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 8 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              className="pointer-events-auto w-full max-w-sm rounded-3xl bg-background p-6 shadow-2xl"
            >
              <h2 className="text-xl font-bold text-foreground">Set Default SIM</h2>

              <div className="mt-4 flex flex-col">
                {options.map((opt) => {
                  const active = selected === opt.id;
                  return (
                    <button
                      key={opt.id}
                      onClick={() => setSelected(opt.id)}
                      className="flex items-center gap-4 py-4 text-left"
                    >
                      <div className="relative grid h-10 w-10 shrink-0 place-items-center text-muted-foreground">
                        <PhoneCall className="h-7 w-7" strokeWidth={1.5} />
                        {opt.badge && (
                          <span className="absolute left-1 top-1 grid h-4 w-4 place-items-center rounded-sm bg-muted-foreground text-[10px] font-bold text-background">
                            {opt.badge}
                          </span>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-base font-semibold text-foreground">{opt.title}</p>
                        <p className="text-sm text-muted-foreground">{opt.subtitle}</p>
                      </div>
                      <span
                        className={`grid h-6 w-6 shrink-0 place-items-center rounded-full border-2 ${
                          active ? "border-brand" : "border-muted-foreground/50"
                        }`}
                      >
                        {active && <span className="h-3 w-3 rounded-full bg-brand" />}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
