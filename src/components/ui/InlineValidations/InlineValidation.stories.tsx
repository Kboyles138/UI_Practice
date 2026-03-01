import type { Meta, StoryObj } from "@storybook/react";
import { InlineValidation } from "./InlineValidation";
import { Input } from "../Inputs/Input";

const meta: Meta<typeof InlineValidation> = {
  title: "UI/InlineValidation",
  component: InlineValidation,
  tags: ["autodocs"],
  argTypes: { status: { control: "select", options: ["error", "success", "warning"] } },
};

export default meta;
type Story = StoryObj<typeof InlineValidation>;

export const Error: Story = {
  args: {
    status: "error",
    message: "Please enter a valid email address.",
    children: <Input label="Email" placeholder="you@example.com" />,
  },
};

export const Success: Story = {
  args: {
    status: "success",
    message: "Looks good!",
    children: <Input label="Username" value="johndoe" readOnly />,
  },
};

export const Warning: Story = {
  args: {
    status: "warning",
    message: "This username may already be taken.",
    children: <Input label="Username" placeholder="johndoe" />,
  },
};
