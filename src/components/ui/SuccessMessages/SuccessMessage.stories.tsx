import type { Meta, StoryObj } from "@storybook/react";
import { SuccessMessage } from "./SuccessMessage";

const meta: Meta<typeof SuccessMessage> = {
  title: "UI/SuccessMessage",
  component: SuccessMessage,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SuccessMessage>;

export const Default: Story = {
  args: { children: "Your changes have been saved." },
};
