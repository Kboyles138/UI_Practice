import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "./Card";
import { Button } from "../Buttons/Button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["elevated", "outlined", "filled"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Elevated: Story = {
  args: {
    variant: "elevated",
    children: (
      <>
        <CardHeader>
          <CardTitle>Elevated Card</CardTitle>
          <CardDescription>
            Card with shadow and subtle border. Best for primary content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">This is the card content area.</p>
        </CardContent>
        <CardFooter>
          <Button size="sm">Action</Button>
        </CardFooter>
      </>
    ),
  },
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    children: (
      <>
        <CardHeader>
          <CardTitle>Outlined Card</CardTitle>
          <CardDescription>
            Card with border, no shadow. Good for secondary content.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">This is the card content area.</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Action
          </Button>
        </CardFooter>
      </>
    ),
  },
};

export const Filled: Story = {
  args: {
    variant: "filled",
    children: (
      <>
        <CardHeader>
          <CardTitle>Filled Card</CardTitle>
          <CardDescription>Card with muted background. Use for grouped content.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-600 dark:text-neutral-400">This is the card content area.</p>
        </CardContent>
        <CardFooter>
          <Button variant="ghost" size="sm">
            Action
          </Button>
        </CardFooter>
      </>
    ),
  },
};
