import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";

const meta: Meta<typeof Avatar> = {
  title: "UI/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Fallback: Story = {
  args: { alt: "John Doe" },
};

export const WithFallbackText: Story = {
  args: { fallback: "JD" },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar fallback="S" size="sm" />
      <Avatar fallback="M" size="md" />
      <Avatar fallback="L" size="lg" />
    </div>
  ),
};
