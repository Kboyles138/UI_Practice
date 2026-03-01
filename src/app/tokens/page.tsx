import Link from "next/link";

export default function TokensPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4">
          <Link
            href="/"
            className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400"
          >
            ← Back
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-2">
          Design Tokens
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          CSS variables for consistent theming across your projects.
        </p>

        {/* Colors */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Primary Colors
          </h2>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => (
              <div key={n} className="text-center">
                <div
                  className="h-16 rounded-lg mb-2"
                  style={{
                    backgroundColor: `var(--color-primary-${n})`,
                  }}
                />
                <span className="text-xs text-neutral-500">{n}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Semantic Colors
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-lg bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200">
              Success
            </div>
            <div className="p-4 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200">
              Warning
            </div>
            <div className="p-4 rounded-lg bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-200">
              Error
            </div>
            <div className="p-4 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200">
              Info
            </div>
          </div>
        </section>

        {/* Spacing */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Spacing Scale
          </h2>
          <div className="space-y-4">
            {[
              { name: "space-1", value: "0.25rem", rem: "4px" },
              { name: "space-2", value: "0.5rem", rem: "8px" },
              { name: "space-3", value: "0.75rem", rem: "12px" },
              { name: "space-4", value: "1rem", rem: "16px" },
              { name: "space-6", value: "1.5rem", rem: "24px" },
              { name: "space-8", value: "2rem", rem: "32px" },
              { name: "space-12", value: "3rem", rem: "48px" },
            ].map(({ name, value, rem }) => (
              <div key={name} className="flex items-center gap-4">
                <div className="h-8 bg-primary-500 rounded" style={{ width: value }} />
                <span className="text-sm font-mono text-neutral-600 dark:text-neutral-400 w-24">
                  {name}
                </span>
                <span className="text-sm text-neutral-500">
                  {value} / {rem}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Border Radius */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Border Radius
          </h2>
          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <div
                className="w-20 h-20 bg-primary-500 rounded-sm"
                style={{ borderRadius: "var(--radius-sm)" }}
              />
              <p className="mt-2 text-sm text-neutral-500">radius-sm</p>
            </div>
            <div className="text-center">
              <div
                className="w-20 h-20 bg-primary-500 rounded-md"
                style={{ borderRadius: "var(--radius-md)" }}
              />
              <p className="mt-2 text-sm text-neutral-500">radius-md</p>
            </div>
            <div className="text-center">
              <div
                className="w-20 h-20 bg-primary-500 rounded-lg"
                style={{ borderRadius: "var(--radius-lg)" }}
              />
              <p className="mt-2 text-sm text-neutral-500">radius-lg</p>
            </div>
            <div className="text-center">
              <div
                className="w-20 h-20 bg-primary-500 rounded-xl"
                style={{ borderRadius: "var(--radius-xl)" }}
              />
              <p className="mt-2 text-sm text-neutral-500">radius-xl</p>
            </div>
            <div className="text-center">
              <div
                className="w-20 h-20 bg-primary-500 rounded-full"
                style={{ borderRadius: "var(--radius-full)" }}
              />
              <p className="mt-2 text-sm text-neutral-500">radius-full</p>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
            Typography Scale
          </h2>
          <div className="space-y-4">
            <p className="text-xs">text-xs — 0.75rem / 12px</p>
            <p className="text-sm">text-sm — 0.875rem / 14px</p>
            <p className="text-base">text-base — 1rem / 16px</p>
            <p className="text-lg">text-lg — 1.125rem / 18px</p>
            <p className="text-xl">text-xl — 1.25rem / 20px</p>
            <p className="text-2xl">text-2xl — 1.5rem / 24px</p>
            <p className="text-3xl">text-3xl — 1.875rem / 30px</p>
            <p className="text-4xl">text-4xl — 2.25rem / 36px</p>
          </div>
        </section>
      </main>
    </div>
  );
}
