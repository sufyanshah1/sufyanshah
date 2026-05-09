import { Home, MessageCircle, Search, User } from "lucide-react";
import { useState } from "react";

const ITEMS = [
  { key: "home", label: "Home", icon: Home },
  { key: "messages", label: "Messages", icon: MessageCircle },
  { key: "search", label: "Search", icon: Search },
  { key: "profile", label: "Profile", icon: User },
];

export function BottomNav() {
  const [active, setActive] = useState("home");
  return (
    <nav className="sticky bottom-0 z-20 border-t border-border bg-background/95 backdrop-blur">
      <div className="flex">
        {ITEMS.map((item) => {
          const isActive = active === item.key;
          return (
            <button
              key={item.key}
              onClick={() => setActive(item.key)}
              className="flex flex-1 flex-col items-center gap-1 py-2.5"
            >
              <item.icon
                className={`h-6 w-6 transition-colors ${isActive ? "text-brand" : "text-muted-foreground"}`}
                fill={isActive ? "currentColor" : "none"}
                strokeWidth={isActive ? 1.5 : 2}
              />
              <span
                className={`text-[10px] font-medium ${isActive ? "text-brand" : "text-muted-foreground"}`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
