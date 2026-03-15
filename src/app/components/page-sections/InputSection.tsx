import {
  TextInput,
  EmailInput,
  PasswordInput,
  SearchInput,
  URLInput,
  NumberInput,
  TelephoneInput,
  NumberRangeInput,
  Card,
  CardContent,
} from "@/components/ui";

export function InputSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Input
      </h2>
      <Card variant="outlined" className="mb-6">
        <CardContent className="space-y-8 max-w-md">
          <div>
            <p className="text-sm text-neutral-500 mb-2">Sizes</p>
            <div className="space-y-4">
              <TextInput label="Small" placeholder="Small" size="sm" />
              <TextInput label="Medium" placeholder="Medium" size="md" />
              <TextInput label="Large" placeholder="Large" size="lg" />
            </div>
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Text (default)</p>
            <TextInput label="Name" placeholder="Enter your name" />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Email</p>
            <EmailInput label="Email" placeholder="you@example.com" />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Password</p>
            <PasswordInput
              label="Password"
              placeholder="••••••••"
              hint="Must be at least 8 characters"
            />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Search</p>
            <SearchInput label="Search" placeholder="Search..." />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">URL</p>
            <URLInput label="Website" placeholder="https://example.com" />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Numeric input (number only)</p>
            <NumberInput label="Quantity" placeholder="0" />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Telephone (International or Local)</p>
            <TelephoneInput label="Phone" placeholder="+1 (555) 000-0000" />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Number with min and max</p>
            <NumberRangeInput
              label="Age"
              min={0}
              max={120}
              placeholder="0–120"
              hint="Enter a value between 0 and 120"
            />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">With error text</p>
            <EmailInput
              label="Email"
              placeholder="you@example.com"
              error="Please enter a valid email address"
            />
          </div>

          <div>
            <p className="text-sm text-neutral-500 mb-2">Icon modes</p>
            <div className="space-y-4">
              <EmailInput
                label="Default icon"
                placeholder="you@example.com"
                iconMode="default"
              />
              <EmailInput
                label="Button icon"
                placeholder="you@example.com"
                iconMode="button"
              />
              <EmailInput
                label="No icon"
                placeholder="you@example.com"
                iconMode="none"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
