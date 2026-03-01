import type { Meta, StoryObj } from "@storybook/react";
import { WarningMessage } from "./WarningMessage";

const meta: Meta<typeof WarningMessage> = {
  title: "UI/WarningMessage",
  component: WarningMessage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof WarningMessage>;

export const Default: Story = {
  args: { children: "Your session will expire in 5 minutes." },
};
