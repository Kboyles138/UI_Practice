import type { Meta, StoryObj } from "@storybook/react";
import { SkeletonLoader } from "./SkeletonLoader";

const meta: Meta<typeof SkeletonLoader> = {
  title: "UI/SkeletonLoader",
  component: SkeletonLoader,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["text", "circular", "rectangular"] } },
};

export default meta;
type Story = StoryObj<typeof SkeletonLoader>;

export const Text: Story = {
  args: { variant: "text" },
};

export const Circular: Story = {
  args: { variant: "circular", width: 40, height: 40 },
};

export const Rectangular: Story = {
  args: { variant: "rectangular", width: "100%", height: 120 },
};

export const CardSkeleton: Story = {
  render: () => (
    <div className="w-64 space-y-4 rounded-lg border p-4">
      <SkeletonLoader variant="circular" width={48} height={48} />
      <SkeletonLoader variant="text" className="w-3/4" />
      <SkeletonLoader variant="text" />
      <SkeletonLoader variant="text" className="w-1/2" />
    </div>
  ),
};
