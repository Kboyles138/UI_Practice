import type { Meta, StoryObj } from "@storybook/react";
import { Autocomplete } from "./Autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "UI/Autocomplete",
  component: Autocomplete,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Autocomplete>;

const cityOptions = [
  { value: "nyc", label: "New York" },
  { value: "la", label: "Los Angeles" },
  { value: "chi", label: "Chicago" },
  { value: "hou", label: "Houston" },
  { value: "phx", label: "Phoenix" },
  { value: "phl", label: "Philadelphia" },
];

export const Default: Story = {
  args: {
    options: cityOptions,
    placeholder: "Start typing a city...",
  },
};

export const WithLabel: Story = {
  args: {
    label: "City",
    options: cityOptions,
    placeholder: "Start typing...",
  },
};

export const WithHint: Story = {
  args: {
    label: "City",
    options: cityOptions,
    placeholder: "Start typing...",
    hint: "Results filter as you type",
  },
};
