import { RichTextEditor, Card, CardContent } from "@/components/ui";

export function RichTextEditorSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Rich Text Editor
      </h2>
      <Card variant="outlined" className="mb-6">
        <CardContent>
          <RichTextEditor label="Description" placeholder="Write something..." />
        </CardContent>
      </Card>
    </section>
  );
}
