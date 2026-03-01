import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";

const meta: Meta<typeof ProgressBar> = {
  title: "UI/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  argTypes: {
    value: { control: { type: "range", min: 0, max: 100 } },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};

export default meta;
type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: { value: 60 },
};

export const WithLabel: Story = {
  args: { value: 75, showLabel: true },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-4 w-64">
      <ProgressBar value={30} size="sm" />
      <ProgressBar value={50} size="md" />
      <ProgressBar value={80} size="lg" showLabel />
    </div>
  ),
};
