import { Badge, Card, CardContent } from "@/components/ui";

export function BadgeSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Badge</h2>
      <Card variant="outlined" className="mb-6">
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
