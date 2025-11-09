export default function ComingSoon({
  badge = "INSIGHTS",
  title = "Coming soon",
  subtitle = "We’re crafting something valuable. Stay tuned.",
}) {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Decorative light-blue blobs (background accents) */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-[#e6f1fb] blur-3xl opacity-70" />
        <div className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full bg-[#cfe9fb] blur-3xl opacity-60" />
      </div>

      <div className="container mx-auto px-6 py-24 md:py-32 text-center">
       
        <div className="inline-flex items-center gap-2 text-brand-blue font-semibold mb-4">
          <span className="inline-block w-2.5 h-2.5 bg-brand-blue rounded-full" />
          {badge}
        </div>

        <h1
          className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tight mb-4"
          style={{ fontFamily: "serif" }}
        >
          {title}
        </h1>

        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>

        {/* Animated hourglass icon */}
        <div className="mt-10 inline-flex items-center justify-center">
          <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-[#e6f1fb] shadow-sm">
            {/* Simple hourglass with gentle spin pulse */}
            <svg
              className="h-7 w-7 text-brand-blue animate-[spin_8s_linear_infinite]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M6 2h12M6 22h12" />
              <path d="M6 2c0 6 12 6 12 12 0 6-12 6-12 12" />
              <path d="M18 2c0 6-12 6-12 12 0 6 12 6 12 12" />
            </svg>
          </span>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          New articles, case studies, and regulatory updates will appear here.
        </div>
      </div>
    </section>
  );
}
