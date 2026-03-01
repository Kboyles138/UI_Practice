import {
  Checkbox,
  RadioButton,
  Toggle,
  Select,
  MultiSelect,
  Combobox,
  Autocomplete,
  Card,
  CardContent,
} from "@/components/ui";

export function SelectionControlsSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Selection Controls
      </h2>
      <div className="space-y-12">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Checkbox
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="space-y-4 max-w-md">
              <Checkbox label="Accept terms and conditions" />
              <Checkbox label="Subscribe to newsletter" defaultChecked />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Radio Button
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="max-w-md">
              <RadioButton
                name="demo-size"
                label="Select size"
                options={[
                  { value: "sm", label: "Small" },
                  { value: "md", label: "Medium" },
                  { value: "lg", label: "Large" },
                ]}
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Toggle / Switch
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="space-y-4 max-w-md">
              <Toggle label="Enable notifications" />
              <Toggle label="Dark mode" checked />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Select / Dropdown
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="max-w-md">
              <Select
                label="Country"
                options={[
                  { value: "us", label: "United States" },
                  { value: "uk", label: "United Kingdom" },
                  { value: "ca", label: "Canada" },
                ]}
                placeholder="Choose..."
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Multi-select
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="max-w-md">
              <MultiSelect
                label="Frameworks"
                options={[
                  { value: "react", label: "React" },
                  { value: "vue", label: "Vue" },
                  { value: "angular", label: "Angular" },
                ]}
                placeholder="Select one or more..."
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Combobox
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="max-w-md">
              <Combobox
                label="Fruit"
                options={[
                  { value: "apple", label: "Apple" },
                  { value: "banana", label: "Banana" },
                  { value: "cherry", label: "Cherry" },
                ]}
                placeholder="Type or select..."
              />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Autocomplete
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="max-w-md">
              <Autocomplete
                label="City"
                options={[
                  { value: "nyc", label: "New York" },
                  { value: "la", label: "Los Angeles" },
                  { value: "chi", label: "Chicago" },
                ]}
                placeholder="Start typing..."
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
