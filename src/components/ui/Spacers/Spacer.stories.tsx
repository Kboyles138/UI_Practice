import type { Meta, StoryObj } from "@storybook/react";
import { Spacer } from "./Spacer";

const meta: Meta<typeof Spacer> = {
  title: "UI/Spacer",
  component: Spacer,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["xs", "sm", "md", "lg", "xl"] } },
};

export default meta;
type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: { size: "md" },
  render: (args) => (
    <div>
      <div className="h-4 w-4 bg-primary-500" />
      <Spacer {...args} />
      <div className="h-4 w-4 bg-primary-500" />
    </div>
  ),
};
