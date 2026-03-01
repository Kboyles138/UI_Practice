import { Card, CardContent } from "@/components/ui";
import { OverlayDemos } from "../OverlayDemos";

export function OverlaysSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Overlays
      </h2>
      <Card variant="outlined" className="mb-6">
        <CardContent>
          <OverlayDemos />
        </CardContent>
      </Card>
    </section>
  );
}
