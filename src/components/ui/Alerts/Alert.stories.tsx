import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "UI/Alert",
  component: Alert,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["info", "success", "warning", "error"] } },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { variant: "info", children: "This is an informational message." },
};

export const Success: Story = {
  args: { variant: "success", children: "Your changes have been saved successfully." },
};

export const Warning: Story = {
  args: { variant: "warning", children: "Please review your input before submitting." },
};

export const Error: Story = {
  args: { variant: "error", children: "Something went wrong. Please try again." },
};

export const WithTitle: Story = {
  args: {
    variant: "info",
    title: "Heads up",
    children: "You have unsaved changes. Would you like to save before leaving?",
  },
};
