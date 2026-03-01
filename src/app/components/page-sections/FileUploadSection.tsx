import { FileUpload, Card, CardContent } from "@/components/ui";

export function FileUploadSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        File Upload
      </h2>
      <Card variant="outlined" className="mb-6">
        <CardContent>
          <FileUpload label="Upload files" />
        </CardContent>
      </Card>
    </section>
  );
}
