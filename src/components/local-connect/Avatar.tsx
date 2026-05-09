import { BadgeCheck } from "lucide-react";
import { initials } from "./data";

export function Avatar({
  name,
  size = 48,
  verified,
}: {
  name: string;
  size?: number;
  verified?: boolean;
}) {
  return (
    <div className="relative shrink-0" style={{ width: size, height: size }}>
      <div
        className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-muted to-secondary font-semibold text-foreground/70"
        style={{ fontSize: size * 0.4 }}
      >
        {initials(name)}
      </div>
      {verified && (
        <span
          className="absolute -bottom-0.5 -right-0.5 flex items-center justify-center rounded-full bg-background"
          style={{ padding: 1.5 }}
        >
          <BadgeCheck
            className="fill-verified text-background"
            style={{ width: size * 0.32, height: size * 0.32 }}
          />
        </span>
      )}
    </div>
  );
}
