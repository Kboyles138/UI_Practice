import type { Meta, StoryObj } from "@storybook/react";
import { Banner } from "./Banner";

const meta: Meta<typeof Banner> = {
  title: "UI/Banner",
  component: Banner,
  tags: ["autodocs"],
  argTypes: { variant: { control: "select", options: ["info", "success", "warning", "error"] } },
};

export default meta;
type Story = StoryObj<typeof Banner>;

export const Info: Story = {
  args: { variant: "info", children: "New feature available. Check it out!" },
};

export const Dismissible: Story = {
  args: {
    variant: "success",
    children: "Your profile has been updated.",
    onDismiss: () => {},
  },
};
