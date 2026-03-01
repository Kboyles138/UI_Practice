"use client";

import type { Meta, StoryObj } from "@storybook/react";
import { Drawer } from "./Drawer";
import { Button } from "../Buttons/Button";
import { useState } from "react";

const meta: Meta<typeof Drawer> = {
  title: "UI/Drawer",
  component: Drawer,
  tags: ["autodocs"],
  argTypes: { position: { control: "select", options: ["left", "right"] } },
};

export default meta;
type Story = StoryObj<typeof Drawer>;

function DrawerDemo({ position }: { position?: "left" | "right" }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Drawer</Button>
      <Drawer open={open} onClose={() => setOpen(false)} title="Drawer" position={position}>
        <p className="text-neutral-600 dark:text-neutral-400">Drawer content goes here.</p>
      </Drawer>
    </>
  );
}

export const Default: Story = {
  render: () => <DrawerDemo />,
};

export const Left: Story = {
  render: () => <DrawerDemo position="left" />,
};
