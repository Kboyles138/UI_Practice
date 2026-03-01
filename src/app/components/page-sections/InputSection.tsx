import { Input, Card, CardContent } from "@/components/ui";

export function InputSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Input</h2>
      <Card variant="outlined" className="mb-6">
        <CardContent className="space-y-6 max-w-md">
          <Input label="Email" type="email" placeholder="you@example.com" />
          <Input
            label="Password"
            type="password"
            placeholder="••••••••"
            hint="Must be at least 8 characters"
          />
          <Input label="With error" placeholder="Invalid input" error="This field is required" />
        </CardContent>
      </Card>
    </section>
  );
}
