import type { Meta, StoryObj } from "@storybook/react";
import { Snackbar } from "./Snackbar";
import { Button } from "../Buttons/Button";

const meta: Meta<typeof Snackbar> = {
  title: "UI/Snackbar",
  component: Snackbar,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["default", "success", "warning", "error"] } },
};

export default meta;
type Story = StoryObj<typeof Snackbar>;

export const Default: Story = {
  args: { variant: "default", children: "Item added to cart." },
};

export const WithAction: Story = {
  args: {
    variant: "default",
    children: "Item added to cart.",
    action: (
      <Button size="sm" variant="ghost" className="!text-white hover:!bg-white/20">
        Undo
      </Button>
    ),
  },
};
