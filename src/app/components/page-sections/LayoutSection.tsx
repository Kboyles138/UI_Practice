import { Divider, Separator, Spacer } from "@/components/ui";

export function LayoutSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Layout</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Divider
          </h3>
          <div>
            <p>Above</p>
            <Divider />
            <p>Below</p>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Separator
          </h3>
          <div className="flex h-12 items-center gap-4">
            <span>Item 1</span>
            <Separator orientation="vertical" className="h-6" />
            <span>Item 2</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Spacer
          </h3>
          <div>
            <div className="h-4 w-4 bg-primary-500 rounded" />
            <Spacer size="lg" />
            <div className="h-4 w-4 bg-primary-500 rounded" />
          </div>
        </div>
      </div>
    </section>
  );
}
