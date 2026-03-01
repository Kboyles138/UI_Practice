import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";

const meta: Meta<typeof Select> = {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    error: { control: "text" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
];

export const Default: Story = {
  args: {
    options: countryOptions,
    placeholder: "Select a country",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Choose...",
  },
};

export const WithError: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Choose...",
    error: "Please select a country",
  },
};

export const Disabled: Story = {
  args: {
    label: "Country",
    options: countryOptions,
    placeholder: "Choose...",
    disabled: true,
  },
};
