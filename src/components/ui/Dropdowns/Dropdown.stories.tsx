import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import { Button } from "../Buttons/Button";

const meta: Meta<typeof Dropdown> = {
  title: "UI/Dropdown",
  component: Dropdown,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
  { id: "1", label: "Edit", onClick: () => {} },
  { id: "2", label: "Duplicate", onClick: () => {} },
  { id: "3", label: "Delete", onClick: () => {} },
];

export const Default: Story = {
  args: {
    trigger: <Button variant="outline">Actions</Button>,
    items,
  },
};
