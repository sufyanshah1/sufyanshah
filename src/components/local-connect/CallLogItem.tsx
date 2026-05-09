import { motion } from "framer-motion";
import { Phone, PhoneIncoming, PhoneOutgoing, PhoneMissed, Smartphone, Video } from "lucide-react";
import { Avatar } from "./Avatar";
import type { CallLog } from "./types";

const iconFor = (t: CallLog["type"]) =>
  t === "incoming" ? PhoneIncoming : t === "outgoing" ? PhoneOutgoing : PhoneMissed;

export function CallLogItem({ log, index }: { log: CallLog; index: number }) {
  const Icon = iconFor(log.type);
  const missed = log.type === "missed";
  const simColor = log.sim === "SIM1" ? "bg-sim1" : "bg-sim2";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.25 }}
      className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/50"
    >
      <Avatar name={log.name} verified={log.verified} size={48} />

      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <p className={`truncate text-sm font-semibold ${missed ? "text-danger" : "text-foreground"}`}>
            {log.name}
          </p>
          {log.spam && (
            <span className="shrink-0 rounded-md bg-danger/10 px-1.5 py-0.5 text-[10px] font-bold uppercase text-danger">
              Spam
            </span>
          )}
        </div>
        <div className="mt-0.5 flex items-center gap-1.5 text-xs">
          <Icon className={`h-3.5 w-3.5 ${missed ? "text-danger" : "text-muted-foreground"}`} />
          <span className={missed ? "text-danger" : "text-muted-foreground"}>{log.time}</span>
        </div>
        <div className="mt-1 flex items-center gap-1.5">
          <span
            className={`inline-flex items-center gap-1 rounded-md px-1.5 py-0.5 text-[10px] font-semibold text-white ${simColor}`}
          >
            <Smartphone className="h-2.5 w-2.5" />
            {log.sim}
          </span>
          <span className="text-[11px] text-muted-foreground">{log.carrier}</span>
        </div>
      </div>

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
