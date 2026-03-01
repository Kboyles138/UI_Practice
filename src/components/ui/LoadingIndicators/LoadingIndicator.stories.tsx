import type { Meta, StoryObj } from "@storybook/react";
import { LoadingIndicator } from "./LoadingIndicator";

const meta: Meta<typeof LoadingIndicator> = {
  title: "UI/LoadingIndicator",
  component: LoadingIndicator,
  tags: ["autodocs"],
  argTypes: { size: { control: "select", options: ["sm", "md", "lg"] } },
};

export default meta;
type Story = StoryObj<typeof LoadingIndicator>;

export const Default: Story = { args: {} };

export const CustomLabel: Story = {
  args: { label: "Fetching data..." },
};
