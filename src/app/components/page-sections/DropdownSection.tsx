import { Button, Dropdown } from "@/components/ui";

export function DropdownSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Dropdown
      </h2>
      <Dropdown
        trigger={<Button variant="outline">Actions</Button>}
        items={[
          { id: "1", label: "Edit" },
          { id: "2", label: "Duplicate" },
          { id: "3", label: "Delete" },
        ]}
      />
    </section>
  );
}
