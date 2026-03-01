import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";

const meta: Meta<typeof Icon> = {
  title: "UI/Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const Default: Story = { args: {} };

export const Check: Story = {
  args: {
    children: <path d="M20 6L9 17l-5-5" />,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Icon size="sm">
        <path d="M20 6L9 17l-5-5" />
      </Icon>
      <Icon size="md">
        <path d="M20 6L9 17l-5-5" />
      </Icon>
      <Icon size="lg">
        <path d="M20 6L9 17l-5-5" />
      </Icon>
    </div>
  ),
};
