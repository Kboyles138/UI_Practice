import type { Meta, StoryObj } from "@storybook/react";
import { FiPlus, FiTrash2, FiDownload } from "react-icons/fi";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "danger"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
    fullWidth: { control: "boolean" },
    disabled: { control: "boolean" },
    icon: { control: false },
    iconPosition: {
      control: "select",
      options: ["left", "right"],
    },
    "aria-label": { control: "text", description: "Required for icon-only buttons" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    children: "Primary",
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary",
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    children: "Ghost",
    variant: "ghost",
  },
};

export const Danger: Story = {
  args: {
    children: "Danger",
    variant: "danger",
    size: "lg",
    fullWidth: false,
    icon: undefined,
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const FullWidth: Story = {
  args: {
    children: "Full Width",
    fullWidth: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    children: "Add item",
    icon: FiPlus,
    iconPosition: "left",
  },
};

export const WithIconRight: Story = {
  args: {
    children: "Download",
    icon: FiDownload,
    iconPosition: "right",
  },
};

export const IconOnly: Story = {
  args: {
    icon: FiTrash2,
    "aria-label": "Delete item",
  },
};

export const IconOnlyVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button icon={FiPlus} aria-label="Add" variant="primary" />
      <Button icon={FiTrash2} aria-label="Delete" variant="danger" />
      <Button icon={FiDownload} aria-label="Download" variant="outline" />
    </div>
  ),
};
