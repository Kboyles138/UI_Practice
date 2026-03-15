import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox, CheckboxGroup, CheckboxSelectAllGroup } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    checked: { control: "boolean" },
    required: { control: "boolean" },
    variant: { control: "select", options: ["default", "supporting", "inline"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "secondary", "tertiary", "warning", "error"] },
    indeterminate: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

export const Checked: Story = {
  args: {
    label: "Subscribe to newsletter",
    defaultChecked: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Medium" size="md" defaultChecked />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Primary" color="primary" defaultChecked />
      <Checkbox label="Secondary" color="secondary" defaultChecked />
      <Checkbox label="Tertiary" color="tertiary" defaultChecked />
      <Checkbox label="Warning" color="warning" defaultChecked />
      <Checkbox label="Error" color="error" defaultChecked />
    </div>
  ),
};

export const SupportingText: Story = {
  args: {
    variant: "supporting",
    label: "Enable two-factor authentication",
    supportingText: "Add an extra layer of security to your account",
  },
};

export const Inline: Story = {
  render: () => (
    <p className="text-neutral-700 dark:text-neutral-300">
      I agree to the <Checkbox variant="inline" label="terms of service" size="sm" /> and{" "}
      <Checkbox variant="inline" label="privacy policy" size="sm" />.
    </p>
  ),
};

export const Partial: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Unselected" />
      <Checkbox label="Partial (indeterminate)" indeterminate />
      <Checkbox label="Selected" defaultChecked />
    </div>
  ),
};

export const Required: Story = {
  args: {
    label: "I agree to the terms (required)",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Required checkbox",
    error: "You must accept to continue",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled option",
    disabled: true,
  },
};

export const Group: Story = {
  render: () => (
    <CheckboxGroup
      label="Notification preferences"
      options={[
        { value: "email", label: "Email", supportingText: "Receive updates via email" },
        { value: "push", label: "Push", supportingText: "Browser push notifications" },
        { value: "sms", label: "SMS", supportingText: "Text message alerts" },
      ]}
    />
  ),
};

export const SelectAllGroup: Story = {
  render: () => (
    <CheckboxSelectAllGroup
      label="Permissions"
      selectAllLabel="Select all permissions"
      options={[
        { value: "read", label: "Read" },
        { value: "write", label: "Write" },
        { value: "delete", label: "Delete" },
      ]}
    />
  ),
};
