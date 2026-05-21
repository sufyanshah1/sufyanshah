import { useMemo, useState } from "react";
import { Header } from "./Header";
import { Tabs, type Tab } from "./Tabs";
import { Recommended } from "./Recommended";
import { Filters, type Filter } from "./Filters";
import { CallLogItem } from "./CallLogItem";
import { ContactItem } from "./ContactItem";
import { FavoriteItem } from "./FavoriteItem";
import { BottomNav } from "./BottomNav";
import { callLogs, recommended } from "./data";

export function HomeScreen() {
  const [tab, setTab] = useState<Tab>("History");
  const [filter, setFilter] = useState<Filter>("All");

  const filtered = useMemo(() => {
    return callLogs.filter((l) => {
      if (filter === "All" || filter === "Default") return true;
      if (filter === "Verified") return l.verified;
      if (filter === "Missed") return l.type === "missed";
      if (filter === "Incoming") return l.type === "incoming";
      if (filter === "Outgoing") return l.type === "outgoing";
      return true;
    });
  }, [filter]);

  return (
    <div className="min-h-screen bg-secondary">
      <div className="mx-auto flex min-h-screen max-w-md flex-col bg-secondary shadow-xl md:my-4 md:min-h-[calc(100vh-2rem)] md:rounded-2xl md:overflow-hidden">
        <Header />
        <Tabs active={tab} onChange={setTab} />
        <Recommended />
        {tab === "Contacts" ? (
          <main className="flex-1 divide-y divide-border bg-background">
            {recommended.map((c, i) => (
              <ContactItem key={c.id} contact={c} index={i} />
            ))}
          </main>
        ) : tab === "Favorites" ? (
          <main className="flex-1 divide-y divide-border bg-background">
            {recommended.map((c, i) => (
              <FavoriteItem key={c.id} contact={c} index={i} />
            ))}
          </main>
        ) : (
          <>
            <Filters active={filter} onChange={setFilter} />
            <main className="flex-1 divide-y divide-border bg-background">
              {filtered.map((log, i) => (
                <CallLogItem key={log.id} log={log} index={i} />
              ))}
              {filtered.length === 0 && (
                <p className="py-12 text-center text-sm text-muted-foreground">No calls match this filter.</p>
              )}
            </main>
          </>
        )}

        <BottomNav />
      </div>
    </div>
  );
}
