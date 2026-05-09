import { useState, useRef, useEffect } from "react";
import { Search, Plus, MoreVertical, X, Ban, UserPlus, Smartphone, Settings, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./useTheme";

export function Header() {
  const { dark, toggle } = useTheme();
  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (searchOpen) inputRef.current?.focus();
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const menuItems = [
    { label: "Block Contact", icon: Ban, color: "text-danger" },
    { label: "Add Contact", icon: UserPlus, color: "text-verified" },
    { label: "Set Default SIM", icon: Smartphone, color: "text-sim2" },
    { label: "Settings", icon: Settings, color: "text-muted-foreground" },
  ];

  return (
    <header className="sticky top-0 z-30 bg-background/95 backdrop-blur shadow-sm">
      <div className="flex items-center gap-2 px-4 py-3">
        <motion.div
          layout
          className="flex flex-1 items-center gap-2 rounded-full bg-muted px-4 py-2.5 transition-shadow focus-within:ring-2 focus-within:ring-brand"
        >
          <Search className="h-5 w-5 shrink-0 text-muted-foreground" />
          <AnimatePresence mode="wait" initial={false}>
            {searchOpen ? (
              <motion.input
                key="input"
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                placeholder="Search calls..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            ) : (
              <motion.button
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSearchOpen(true)}
                className="flex-1 text-left text-sm text-muted-foreground"
              >
                Search calls...
              </motion.button>
            )}
          </AnimatePresence>
          {searchOpen && (
            <button
              onClick={() => {
                setSearchOpen(false);
                setQuery("");
              }}
              className="rounded-full p-0.5 hover:bg-background"
            >
              <X className="h-4 w-4 text-muted-foreground" />
            </button>
          )}
        </motion.div>

        <button
          onClick={toggle}
          aria-label="Toggle theme"
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted transition-colors hover:bg-secondary"
        >
          {dark ? <Sun className="h-5 w-5 text-foreground" /> : <Moon className="h-5 w-5 text-foreground" />}
        </button>

        <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted transition-colors hover:bg-secondary">
          <Plus className="h-5 w-5 text-foreground" />
        </button>

        <div className="relative" ref={menuRef}>
          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-muted transition-colors hover:bg-secondary"
          >
            <MoreVertical className="h-5 w-5 text-foreground" />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -4 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute right-0 top-12 w-56 origin-top-right overflow-hidden rounded-xl border border-border bg-card shadow-lg"
              >
                {menuItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => setMenuOpen(false)}
                    className="flex w-full items-center gap-3 px-4 py-3 text-sm text-foreground transition-colors hover:bg-muted"
                  >
                    <item.icon className={`h-4 w-4 ${item.color}`} />
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}
