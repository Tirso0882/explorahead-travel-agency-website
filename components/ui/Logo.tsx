interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  variant?: "default" | "white";
}

export function Logo({ className = "", width = 280, height = 80, variant = "default" }: LogoProps) {
  const textColor = variant === "white" ? "#FFFFFF" : "#1B3B5F";
  const arrowColor = variant === "white" ? "#FFFFFF" : "#D4A574";

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 490 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="ExplorAhead Logo"
      style={{ display: "block" }}
      preserveAspectRatio="xMinYMid"
    >
      <defs>
        <linearGradient id="arrowGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D4A574" stopOpacity="1" />
          <stop offset="100%" stopColor="#D4A574" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="arrowGradientWhite" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFFFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#E0E0E0" stopOpacity="1" />
        </linearGradient>
      </defs>

      {/* "Explor" text - using negative x to account for font left side bearing */}
      <text
        x="-3"
        y="115"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="90"
        fontWeight="700"
        fill={textColor}
        letterSpacing="-2"
        textAnchor="start"
      >
        Explor
      </text>

      {/* Compass needle arrow (replacing "A" in "Ahead") */}
      <g transform="translate(232, 20)">
        {/* Right half - solid gold fill */}
        <path
          d="M 45 0 L 90 120 L 45 100 Z"
          fill="rgba(212, 165, 116, 1)"
          stroke="rgba(212, 165, 116, 1)"
          strokeWidth="3"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
        {/* Left half - empty/hollow (stroke only, no fill) */}
        <path
          d="M 45 0 L 0 120 L 45 100 Z"
          fill="none"
          stroke="rgba(212, 165, 116, 1)"
          strokeWidth="4"
          strokeLinejoin="miter"
          strokeLinecap="butt"
        />
      </g>

      {/* "head" text - positioned right after arrow */}
      <text
        x="318"
        y="115"
        fontFamily="system-ui, -apple-system, 'Segoe UI', sans-serif"
        fontSize="90"
        fontWeight="700"
        fill={textColor}
        letterSpacing="-2"
        textAnchor="start"
      >
        head
      </text>
    </svg>
  );
}
