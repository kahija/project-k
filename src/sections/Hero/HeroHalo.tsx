export function HeroHalo() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute right-[-14rem] top-1/2 hidden h-[42rem] w-[58rem] -translate-y-1/2 lg:block"
    >
      <svg
        viewBox="0 0 900 620"
        className="h-full w-full overflow-visible"
        fill="none"
      >
        <defs>
          <filter id="soft-blur" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="26" />
          </filter>

          <linearGradient id="halo-line" x1="120" y1="180" x2="780" y2="450">
            <stop stopColor="#ffffff" stopOpacity="0" />
            <stop offset="0.45" stopColor="#c4b5fd" stopOpacity="0.85" />
            <stop offset="1" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="halo-glow" cx="50%" cy="50%" r="50%">
            <stop stopColor="#a78bfa" stopOpacity="0.42" />
            <stop offset="0.45" stopColor="#7c3aed" stopOpacity="0.18" />
            <stop offset="1" stopColor="#050507" stopOpacity="0" />
          </radialGradient>
        </defs>

        <path
          d="M96 334C212 198 414 132 606 185C736 221 805 310 822 402"
          stroke="url(#halo-line)"
          strokeWidth="1.4"
        />

        <path
          d="M150 386C296 286 455 254 627 294C714 314 775 358 824 421"
          stroke="url(#halo-line)"
          strokeWidth="0.9"
          opacity="0.55"
        />

        <ellipse
          cx="560"
          cy="318"
          rx="330"
          ry="165"
          fill="url(#halo-glow)"
          filter="url(#soft-blur)"
          transform="rotate(-12 560 318)"
        />

        <path
          d="M186 318C324 214 528 178 704 252"
          stroke="white"
          strokeOpacity="0.16"
          strokeWidth="0.8"
        />
      </svg>
    </div>
  );
}
