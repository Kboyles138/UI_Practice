import type { Meta, StoryObj } from "@storybook/react";
import { LogoWithBrandName } from "./LogoWithBrandName";

const meta: Meta<typeof LogoWithBrandName> = {
  title: "UI/LogoWithBrandName",
  component: LogoWithBrandName,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LogoWithBrandName>;

export const Default: Story = {
  args: {
    src: "/next.svg",
    alt: "Logo",
    brandName: "My Brand",
  },
};
