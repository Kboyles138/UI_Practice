import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from "./Combobox";

const meta: Meta<typeof Combobox> = {
  title: "UI/Combobox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Combobox>;

const fruitOptions = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry" },
];

export const Default: Story = {
  args: {
    options: fruitOptions,
    placeholder: "Type or select a fruit...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Favorite fruit",
    options: fruitOptions,
    placeholder: "Type or select...",
  },
};
