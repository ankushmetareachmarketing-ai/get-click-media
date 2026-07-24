"use client";

interface Logo {
  name: string;
  src?: string;
}

interface TrustBarProps {
  stat?: string;
  statLabel?: string;
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  { name: "DAMAC" },
  { name: "Mubadala Health" },
  { name: "Al Ansari Exchange" },
  { name: "ICICI Bank" },
  { name: "Airtel" },
  { name: "Flipkart" },
  { name: "Zomato" },
  { name: "PhonePe" },
  { name: "Bajaj Finance" },
  { name: "HDFC Bank" },
];

export default function TrustBar({
  stat = "25B+",
  statLabel = "Interactions a year, trusted by the leading brands.",
  logos = defaultLogos,
}: TrustBarProps) {
  const items = [...logos, ...logos];

  return (
    <div className="bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto flex items-center">

        {/* Left */}
        <div className="flex items-center gap-4 px-8 sm:px-12 py-5 shrink-0 border-r border-gray-100">
          <span className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-none">
            {stat}
          </span>
          <p className="text-sm text-gray-400 leading-snug max-w-37 hidden sm:block">
            {statLabel}
          </p>
        </div>

        {/* Right- marquee */}
        <div className="flex-1 overflow-hidden relative flex items-center py-5">
          <div className="absolute left-0 top-0 h-full w-16 bg-[linear-gradient(to_right,white,transparent)] z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-16 bg-[linear-gradient(to_left,white,transparent)] z-10 pointer-events-none" />

          <div
            className="flex items-center gap-10 w-max"
            style={{ animation: "trustbar-scroll 30s linear infinite" }}
          >
            {items.map((logo, i) => (
              <div key={i} className="shrink-0">
                {logo.src ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="h-7 w-auto object-contain grayscale opacity-50 hover:opacity-80 transition-opacity"
                  />
                ) : (
                  <span className="text-sm font-semibold text-gray-300 hover:text-gray-500 transition-colors whitespace-nowrap">
                    {logo.name}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes trustbar-scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
