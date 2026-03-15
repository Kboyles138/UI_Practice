import type { Meta, StoryObj } from "@storybook/react";
import {
  Input,
  TextInput,
  EmailInput,
  PasswordInput,
  SearchInput,
  URLInput,
  NumberInput,
  TelephoneInput,
} from "./Input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    ariaLabel: { control: "text", description: "Accessible name when no visible label" },
    error: { control: "text" },
    hint: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    size: { control: "select", options: ["sm", "md", "lg"] },
    iconMode: {
      control: "select",
      options: ["default", "button", "none"],
      description: "Icon display: default (static), button (clickable), none",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Email",
    type: "email",
    placeholder: "you@example.com",
  },
};

export const WithHint: Story = {
  args: {
    label: "Password",
    type: "password",
    placeholder: "••••••••",
    hint: "Must be at least 8 characters",
  },
};

export const Required: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    required: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Username",
    placeholder: "johndoe",
    error: "This field is required",
  },
};

export const WithAriaLabel: Story = {
  args: {
    ariaLabel: "Search query",
    placeholder: "Search...",
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled",
    placeholder: "Cannot edit",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 max-w-xs">
      <TextInput label="Small" size="sm" placeholder="Small input" />
      <TextInput label="Medium" size="md" placeholder="Medium input" />
      <TextInput label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

export const EmailWithIcon: Story = {
  render: () => (
    <div className="max-w-xs space-y-4">
      <EmailInput
        label="Email"
        placeholder="you@example.com"
        iconMode="default"
      />
      <EmailInput
        label="Email (icon as button)"
        placeholder="you@example.com"
        iconMode="button"
        onIconClick={() => alert("Icon clicked")}
      />
    </div>
  ),
};

export const PasswordWithToggle: Story = {
  render: () => (
    <div className="max-w-xs">
      <PasswordInput
        label="Password"
        placeholder="••••••••"
        hint="Must be at least 8 characters"
      />
    </div>
  ),
};

export const SearchWithIcon: Story = {
  render: () => (
    <div className="max-w-xs">
      <SearchInput label="Search" placeholder="Search..." />
    </div>
  ),
};

export const SpecializedInputs: Story = {
  render: () => (
    <div className="max-w-xs space-y-4">
      <EmailInput label="Email" placeholder="you@example.com" />
      <PasswordInput label="Password" placeholder="••••••••" />
      <SearchInput label="Search" placeholder="Search..." />
      <URLInput label="Website" placeholder="https://example.com" />
      <NumberInput label="Quantity" placeholder="0" min={0} />
      <TelephoneInput label="Phone" placeholder="+1 (555) 000-0000" />
    </div>
  ),
};
