import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { Card } from "../Cards/Card";

const meta: Meta<typeof Carousel> = {
  title: "UI/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

const slides = [1, 2, 3, 4, 5].map((n) => (
  <Card key={n} variant="outlined" className="min-w-[200px] shrink-0">
    <div className="h-24 flex items-center justify-center text-neutral-500">Slide {n}</div>
  </Card>
));

export const Default: Story = {
  args: { children: slides },
};
