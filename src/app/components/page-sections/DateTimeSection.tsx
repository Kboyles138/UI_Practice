import { DatePicker, TimePicker, DateRangePicker } from "@/components/ui";

export function DateTimeSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Date & Time
      </h2>
      <div className="space-y-8 max-w-md">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Date Picker
          </h3>
          <DatePicker label="Select date" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Time Picker
          </h3>
          <TimePicker label="Select time" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Date Range Picker
          </h3>
          <DateRangePicker label="Date range" />
        </div>
      </div>
    </section>
  );
}
