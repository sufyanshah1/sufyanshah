const FILTERS = ["All", "Default", "Verified", "Missed", "Incoming", "Outgoing"] as const;
export type Filter = (typeof FILTERS)[number];

export function Filters({ active, onChange }: { active: Filter; onChange: (f: Filter) => void }) {
  return (
    <div className="bg-background py-3">
      <div className="flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {FILTERS.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              onClick={() => onChange(f)}
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "bg-brand text-brand-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-secondary"
              }`}
            >
              {f}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export { FILTERS };
