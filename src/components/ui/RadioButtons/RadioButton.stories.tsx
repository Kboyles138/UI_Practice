import type { Meta, StoryObj } from "@storybook/react";
import { RadioButton } from "./RadioButton";

const meta: Meta<typeof RadioButton> = {
  title: "UI/RadioButton",
  component: RadioButton,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
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
