"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { Lightbox } from "./Lightbox";
import { Button } from "../Buttons/Button";
import { useState } from "react";

const meta: Meta<typeof Lightbox> = {
  title: "UI/Lightbox",
  component: Lightbox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Lightbox>;

function LightboxDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Lightbox</Button>
      <Lightbox
        open={open}
        onClose={() => setOpen(false)}
        src="https://placehold.co/800x600"
        alt="Sample image"
      />
    </>
  );
}

export const Default: Story = {
  render: () => <LightboxDemo />,
};
