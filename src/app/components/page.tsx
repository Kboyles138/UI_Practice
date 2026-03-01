import Link from "next/link";
import {
  BadgeSection,
  ButtonSection,
  CalendarSection,
  CardSection,
  DateTimeSection,
  DropdownSection,
  EmptyStateSection,
  FileUploadSection,
  InputSection,
  LayoutSection,
  MediaSection,
  MessagesSection,
  OverlaysSection,
  RichTextEditorSection,
  SelectionControlsSection,
  StatusSection,
  TableSection,
  TabsSection,
  ValidationSection,
} from "./page-sections";

export default function ComponentsPage() {
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
          Components
        </h1>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          Reusable UI building blocks for your projects.
        </p>

        <ButtonSection />
        <InputSection />
        <CardSection />
        <BadgeSection />
        <SelectionControlsSection />
        <MessagesSection />
        <StatusSection />
        <EmptyStateSection />
        <ValidationSection />
        <MediaSection />
        <OverlaysSection />
        <LayoutSection />
        <DateTimeSection />
        <TabsSection />
        <TableSection />
        <CalendarSection />
        <FileUploadSection />
        <DropdownSection />
        <RichTextEditorSection />
      </main>
    </div>
  );
}
