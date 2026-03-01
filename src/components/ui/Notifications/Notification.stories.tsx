import type { Meta, StoryObj } from "@storybook/react";
import { Notification } from "./Notification";

const meta: Meta<typeof Notification> = {
  title: "UI/Notification",
  component: Notification,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["info", "success", "warning", "error"] } },
};

export default meta;
type Story = StoryObj<typeof Notification>;

export const Default: Story = {
  args: {
    variant: "info",
    title: "New message",
    children: "You have a new message from John.",
    timestamp: "2 min ago",
    onClose: () => {},
  },
};
