import { Button, EmptyState, Card, CardContent } from "@/components/ui";

export function EmptyStateSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Empty State
      </h2>
      <Card variant="outlined" className="mb-6">
        <CardContent>
          <EmptyState
            title="No items yet"
            description="Get started by creating your first item."
            action={<Button size="md">Create item</Button>}
          />
        </CardContent>
      </Card>
    </section>
  );
}
