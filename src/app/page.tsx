import Link from "next/link";
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  Badge,
} from "@/components/ui";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Header */}
      <header className="border-b border-neutral-200 dark:border-neutral-800 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
            UI Design System
          </h1>
          <nav className="flex gap-6">
            <a
              href="http://localhost:6006"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
            >
              Storybook
            </a>
            <Link
              href="/components"
              className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
            >
              Components
            </Link>
            <Link
              href="/tokens"
              className="text-sm font-medium text-neutral-600 hover:text-primary-600 dark:text-neutral-400 dark:hover:text-primary-400 transition-colors"
            >
              Design Tokens
            </Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-16">
        {/* Hero */}
        <section className="text-center mb-24">
          <Badge variant="primary" className="mb-4">
            Personal Reuse
          </Badge>
          <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-4 tracking-tight">
            A reusable UI design system
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8">
            Built with Next.js, TypeScript, and Tailwind CSS. Copy components into your projects or
            extend this as your design system foundation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link href="/components">
              <Button size="lg">Browse Components</Button>
            </Link>
            <Link href="/tokens">
              <Button variant="outline" size="lg">
                View Tokens
              </Button>
            </Link>
          </div>
        </section>

        {/* Quick preview */}
        <section className="grid md:grid-cols-2 gap-8">
          <Card variant="elevated">
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>
                Import components from @/components/ui and use them anywhere.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <pre className="text-sm bg-neutral-100 dark:bg-neutral-800 rounded-lg p-4 overflow-x-auto">
                {`import { Button, Card } from "@/components/ui";

<Button variant="primary">Click me</Button>`}
              </pre>
            </CardContent>
          </Card>

          <Card variant="outlined">
            <CardHeader>
              <CardTitle>Design Tokens</CardTitle>
              <CardDescription>
                Colors, spacing, typography, and radii defined as CSS variables.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="error">Error</Badge>
                <Badge variant="outline">Outline</Badge>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
}
