"use client";

interface MarqueeProps {
  items: string[];
  reverse?: boolean;
  accent?: "dark" | "light" | "red";
  size?: "sm" | "md" | "lg";
  py?: string;
}

const accentMap = {
  dark: { bg: "#080808", text: "#1E1E1E", dot: "#C41E1E" },
  light: { bg: "#F0EDE8", text: "#BFBCB8", dot: "#C41E1E" },
  red: { bg: "#C41E1E", text: "rgba(255,255,255,0.3)", dot: "rgba(255,255,255,0.7)" },
};

const sizeMap = {
  sm: "text-xs tracking-[0.3em] py-4",
  md: "text-sm tracking-[0.25em] py-5",
  lg: "text-base tracking-[0.2em] py-6",
};

export default function Marquee({ items, reverse = false, accent = "dark", size = "md", py }: MarqueeProps) {
  const colors = accentMap[accent];
  const doubled = [...items, ...items];

  return (
    <div
      className="w-full overflow-hidden border-y"
      style={{
        background: colors.bg,
        borderColor: accent === "dark" ? "#111" : accent === "red" ? "rgba(255,255,255,0.1)" : "#E5E1DC",
        paddingTop: py,
        paddingBottom: py,
      }}
    >
      <div className={`${reverse ? "marquee-track-rev" : "marquee-track"} flex whitespace-nowrap`}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center gap-6 px-6 font-display uppercase ${sizeMap[size]}`}
            style={{ color: colors.text }}
          >
            {item}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ background: colors.dot }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
