import { Tabs, Card, CardContent } from "@/components/ui";

export function TabsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Tabs</h2>
      <Card variant="outlined" className="mb-6">
        <CardContent className="p-0">
          <Tabs
            tabs={[
              {
                id: "1",
                label: "Overview",
                content: (
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Overview content goes here.
                  </p>
                ),
              },
              {
                id: "2",
                label: "Details",
                content: (
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Details content goes here.
                  </p>
                ),
              },
              {
                id: "3",
                label: "Settings",
                content: (
                  <p className="text-neutral-600 dark:text-neutral-400">
                    Settings content goes here.
                  </p>
                ),
              },
            ]}
          />
        </CardContent>
      </Card>
    </section>
  );
}
