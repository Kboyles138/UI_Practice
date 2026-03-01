import type { Meta, StoryObj } from "@storybook/react";
import { Toast } from "./Toast";

const meta: Meta<typeof Toast> = {
  title: "UI/Toast",
  component: Toast,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["info", "success", "warning", "error"] } },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: { variant: "info", children: "Your message has been sent." },
};

export const WithTitle: Story = {
  args: {
    variant: "success",
    title: "Success",
    children: "Your changes have been saved.",
    onClose: () => {},
  },
};
