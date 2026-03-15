"use client";

import { useState } from "react";
import { FiMail, FiBell, FiMessageCircle } from "react-icons/fi";
import {
  Checkbox,
  CheckboxGroup,
  CheckboxSelectAllGroup,
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
  const [groupValue, setGroupValue] = useState<string[]>([]);
  const [selectAllValue, setSelectAllValue] = useState<string[]>([]);

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
            <CardContent className="space-y-8 max-w-md">
              <div>
                <p className="text-sm text-neutral-500 mb-2">Default</p>
                <div className="space-y-4">
                  <Checkbox label="Accept terms and conditions" />
                  <Checkbox label="Subscribe to newsletter" defaultChecked />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Sizes</p>
                <div className="space-y-4">
                  <Checkbox label="Small" size="sm" />
                  <Checkbox label="Medium" size="md" defaultChecked />
                  <Checkbox label="Large" size="lg" />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Color variants</p>
                <div className="space-y-4">
                  <Checkbox label="Primary" color="primary" defaultChecked />
                  <Checkbox label="Secondary" color="secondary" defaultChecked />
                  <Checkbox label="Tertiary" color="tertiary" defaultChecked />
                  <Checkbox label="Warning" color="warning" defaultChecked />
                  <Checkbox label="Error" color="error" defaultChecked />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Supporting text</p>
                <Checkbox
                  variant="supporting"
                  label="Enable two-factor authentication"
                  supportingText="Add an extra layer of security to your account"
                />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Inline (within sentences)</p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  I agree to the{" "}
                  <Checkbox variant="inline" label="terms of service" size="sm" /> and{" "}
                  <Checkbox variant="inline" label="privacy policy" size="sm" />.
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Partial / Indeterminate</p>
                <div className="space-y-4">
                  <Checkbox label="Unselected" />
                  <Checkbox label="Partial (indeterminate)" indeterminate />
                  <Checkbox label="Selected" defaultChecked />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Group</p>
                <CheckboxGroup
                  label="Notification preferences"
                  options={[
                    { value: "email", label: "Email", supportingText: "Receive updates via email" },
                    { value: "push", label: "Push", supportingText: "Browser push notifications" },
                    { value: "sms", label: "SMS", supportingText: "Text message alerts" },
                  ]}
                  value={groupValue}
                  onChange={setGroupValue}
                />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Select all group</p>
                <CheckboxSelectAllGroup
                  label="Permissions"
                  selectAllLabel="Select all permissions"
                  options={[
                    { value: "read", label: "Read" },
                    { value: "write", label: "Write" },
                    { value: "delete", label: "Delete" },
                  ]}
                  value={selectAllValue}
                  onChange={setSelectAllValue}
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Radio Button
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="space-y-8 max-w-md">
              <div>
                <p className="text-sm text-neutral-500 mb-2">Default (stacked)</p>
                <RadioButton
                  name="demo-size"
                  label="Select size"
                  options={[
                    { value: "sm", label: "Small" },
                    { value: "md", label: "Medium" },
                    { value: "lg", label: "Large" },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Sizes</p>
                <div className="space-y-4">
                  <RadioButton
                    name="demo-size-sm"
                    label="Small"
                    size="sm"
                    options={[
                      { value: "a", label: "Option A" },
                      { value: "b", label: "Option B" },
                    ]}
                  />
                  <RadioButton
                    name="demo-size-md"
                    label="Medium"
                    size="md"
                    options={[
                      { value: "a", label: "Option A" },
                      { value: "b", label: "Option B" },
                    ]}
                  />
                  <RadioButton
                    name="demo-size-lg"
                    label="Large"
                    size="lg"
                    options={[
                      { value: "a", label: "Option A" },
                      { value: "b", label: "Option B" },
                    ]}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Horizontal</p>
                <RadioButton
                  name="demo-horizontal"
                  orientation="horizontal"
                  options={[
                    { value: "yes", label: "Yes" },
                    { value: "no", label: "No" },
                    { value: "maybe", label: "Maybe" },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Supporting text</p>
                <RadioButton
                  name="demo-supporting"
                  label="Delivery method"
                  options={[
                    {
                      value: "standard",
                      label: "Standard",
                      supportingText: "5–7 business days",
                    },
                    {
                      value: "express",
                      label: "Express",
                      supportingText: "2–3 business days",
                    },
                    {
                      value: "overnight",
                      label: "Overnight",
                      supportingText: "Next business day",
                    },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">With icons</p>
                <RadioButton
                  name="demo-icons"
                  label="Notification preferences"
                  options={[
                    { value: "email", label: "Email", icon: <FiMail size={20} /> },
                    { value: "push", label: "Push", icon: <FiBell size={20} /> },
                    { value: "sms", label: "SMS", icon: <FiMessageCircle size={20} /> },
                  ]}
                />
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Color variants</p>
                <div className="space-y-4">
                  <RadioButton
                    name="demo-color-primary"
                    label="Primary"
                    color="primary"
                    options={[{ value: "a", label: "Option" }]}
                  />
                  <RadioButton
                    name="demo-color-secondary"
                    label="Secondary"
                    color="secondary"
                    options={[{ value: "a", label: "Option" }]}
                  />
                  <RadioButton
                    name="demo-color-tertiary"
                    label="Tertiary"
                    color="tertiary"
                    options={[{ value: "a", label: "Option" }]}
                  />
                  <RadioButton
                    name="demo-color-warning"
                    label="Warning"
                    color="warning"
                    options={[{ value: "a", label: "Option" }]}
                  />
                  <RadioButton
                    name="demo-color-error"
                    label="Error"
                    color="error"
                    options={[{ value: "a", label: "Option" }]}
                  />
                </div>
              </div>
              <div>
                <p className="text-sm text-neutral-500 mb-2">Disabled</p>
                <RadioButton
                  name="demo-disabled"
                  label="Disabled options"
                  disabled
                  options={[
                    { value: "a", label: "Option A" },
                    { value: "b", label: "Option B" },
                  ]}
                />
              </div>
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
