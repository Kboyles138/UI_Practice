import type { Meta, StoryObj } from "@storybook/react";
import { EmptyState } from "./EmptyState";
import { Button } from "../Buttons/Button";

const meta: Meta<typeof EmptyState> = {
  title: "UI/EmptyState",
  component: EmptyState,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Default: Story = {
  args: {
    title: "No items yet",
    description: "Get started by creating your first item.",
  },
};

export const WithAction: Story = {
  args: {
    title: "No results found",
    description: "Try adjusting your search or filters.",
    action: <Button size="md">Clear filters</Button>,
  },
};
