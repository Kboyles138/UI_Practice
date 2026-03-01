import type { Meta, StoryObj } from "@storybook/react";
import { MultiSelect } from "./MultiSelect";

const meta: Meta<typeof MultiSelect> = {
  title: "UI/MultiSelect",
  component: MultiSelect,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof MultiSelect>;

const tagOptions = [
  { value: "react", label: "React" },
  { value: "vue", label: "Vue" },
  { value: "angular", label: "Angular" },
  { value: "svelte", label: "Svelte" },
];

export const Default: Story = {
  args: {
    options: tagOptions,
    placeholder: "Select frameworks...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Frameworks",
    options: tagOptions,
    placeholder: "Select one or more...",
  },
};

export const WithPreselected: Story = {
  args: {
    label: "Frameworks",
    options: tagOptions,
    value: ["react", "vue"],
    placeholder: "Select one or more...",
  },
};
