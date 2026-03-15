import type { Meta, StoryObj } from "@storybook/react";
import { FiMail, FiBell, FiMessageCircle } from "react-icons/fi";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "UI/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "secondary", "tertiary", "warning", "error"] },
    orientation: { control: "select", options: ["stacked", "horizontal"] },
  },
};

export default meta;

type Story = StoryObj<typeof RadioButton>;

const sizeOptions = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
];

export const Default: Story = {
  args: {
    name: "size",
    label: "Select size",
    options: sizeOptions,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <RadioButton name="size-sm" label="Small" size="sm" options={sizeOptions} />
      <RadioButton name="size-md" label="Medium" size="md" options={sizeOptions} />
      <RadioButton name="size-lg" label="Large" size="lg" options={sizeOptions} />
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    name: "horizontal",
    label: "Choose one",
    orientation: "horizontal",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "maybe", label: "Maybe" },
    ],
  },
};

export const SupportingText: Story = {
  args: {
    name: "delivery",
    label: "Delivery method",
    options: [
      { value: "standard", label: "Standard", supportingText: "5–7 business days" },
      { value: "express", label: "Express", supportingText: "2–3 business days" },
      { value: "overnight", label: "Overnight", supportingText: "Next business day" },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    name: "notifications",
    label: "Notification preferences",
    options: [
      { value: "email", label: "Email", icon: <FiMail size={20} /> },
      { value: "push", label: "Push", icon: <FiBell size={20} /> },
      { value: "sms", label: "SMS", icon: <FiMessageCircle size={20} /> },
    ],
  },
};

export const ColorVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <RadioButton
        name="color-primary"
        label="Primary"
        color="primary"
        options={[{ value: "a", label: "Option" }]}
      />
      <RadioButton
        name="color-secondary"
        label="Secondary"
        color="secondary"
        options={[{ value: "a", label: "Option" }]}
      />
      <RadioButton
        name="color-tertiary"
        label="Tertiary"
        color="tertiary"
        options={[{ value: "a", label: "Option" }]}
      />
      <RadioButton
        name="color-warning"
        label="Warning"
        color="warning"
        options={[{ value: "a", label: "Option" }]}
      />
      <RadioButton
        name="color-error"
        label="Error"
        color="error"
        options={[{ value: "a", label: "Option" }]}
      />
    </div>
  ),
};

export const WithError: Story = {
  args: {
    name: "size-error",
    label: "Select size",
    options: sizeOptions,
    error: "Please select an option",
  },
};

export const Disabled: Story = {
  args: {
    name: "size-disabled",
    label: "Select size (disabled)",
    options: sizeOptions,
    disabled: true,
  },
};
