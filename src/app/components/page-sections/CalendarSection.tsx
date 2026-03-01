import { Calendar } from "@/components/ui";

export function CalendarSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Calendar
      </h2>
      <Calendar />
    </section>
  );
}
