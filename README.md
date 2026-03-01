# UI Design System

A personal, reusable UI design system built with **Next.js**, **TypeScript**, and **Tailwind CSS**. Use it as a component library, copy components into other projects, or extend it as your design foundation.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the design system.

## Storybook

Storybook provides an isolated environment to develop, test, and document components.

### Running Storybook

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to browse the component library.

### Components in Storybook

All UI components have stories with multiple variants:

| Category               | Components                                                                 |
| ---------------------- | -------------------------------------------------------------------------- |
| **Core**               | Button, Input, Card, Badge                                                 |
| **Selection Controls** | Checkbox, RadioButton, Toggle, Select, MultiSelect, Combobox, Autocomplete |

### Addons

- **Docs** — Auto-generated documentation from component props and JSDoc
- **Controls** — Tweak props interactively in the Canvas
- **A11y** — Accessibility checks (WCAG) with violation highlighting
- **Vitest** — Run component tests directly from stories

### Configuration

Storybook is configured in `.storybook/`:

- **main.ts** — Stories glob (`src/components/ui/**/*.stories.*`), addons, Vite path alias (`@` → `src`)
- **preview.ts** — Global CSS import (`globals.css`), controls matchers, a11y test mode

### Adding a New Component Story

Create a `*.stories.tsx` file next to your component:

```tsx
// src/components/ui/MyComponent/MyComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { MyComponent } from "./MyComponent";

const meta: Meta<typeof MyComponent> = {
  title: "UI/MyComponent",
  component: MyComponent,
  tags: ["autodocs"],
  argTypes: {
    variant: { control: "select", options: ["a", "b"] },
  },
};

export default meta;
type Story = StoryObj<typeof MyComponent>;

export const Default: Story = {
  args: { label: "Example" },
};
```

### Building Static Storybook

```bash
npm run build-storybook
```

Output goes to `storybook-static/` for deployment (e.g. Chromatic, GitHub Pages).

## Structure

```
src/
├── app/
│   ├── page.tsx          # Home / overview
│   ├── components/       # Component showcase
│   └── tokens/           # Design tokens reference
├── components/
│   └── ui/               # Reusable UI components (each in its own folder)
│       ├── Buttons/
│       ├── Inputs/
│       ├── Cards/
│       ├── Badges/
│       ├── Checkboxes/
│       ├── RadioButtons/
│       ├── Toggles/
│       ├── Selects/
│       ├── MultiSelects/
│       ├── Comboboxes/
│       ├── Autocompletes/
│       └── index.ts      # Barrel exports
```

## Components

| Component             | Description                                                                               |
| --------------------- | ----------------------------------------------------------------------------------------- |
| **Button**            | Primary, secondary, outline, ghost, danger variants. Sizes: sm, md, lg                    |
| **Input**             | Text input with label, error, and hint support                                            |
| **Card**              | Elevated, outlined, filled variants. Includes Header, Title, Description, Content, Footer |
| **Badge**             | Default, primary, success, warning, error, outline variants                               |
| **Checkbox**          | Checkbox with label and error support                                                     |
| **RadioButton**       | Radio group with options array                                                            |
| **Toggle**            | Switch/toggle with label                                                                  |
| **Select**            | Native-style dropdown with options                                                        |
| **MultiSelect**       | Multi-option dropdown with checkboxes                                                     |
| **Combobox**          | Type-to-filter + select from list                                                         |
| **Autocomplete**      | Searchable input with suggestions                                                         |
| **Alert**             | Inline alert (info, success, warning, error)                                              |
| **Banner**            | Full-width dismissible banner                                                             |
| **Toast**             | Floating notification with close                                                          |
| **Snackbar**          | Compact message with optional action                                                      |
| **Notification**      | Rich notification with title/timestamp                                                    |
| **ProgressBar**       | Progress indicator (sm, md, lg)                                                           |
| **Spinner**           | Loading spinner                                                                           |
| **SkeletonLoader**    | Content placeholder (text, circular, rectangular)                                         |
| **LoadingIndicator**  | Spinner with label                                                                        |
| **EmptyState**        | Empty list/state placeholder                                                              |
| **ErrorMessage**      | Error text                                                                                |
| **SuccessMessage**    | Success text                                                                              |
| **WarningMessage**    | Warning text                                                                              |
| **InlineValidation**  | Form field wrapper with validation message                                                |
| **Carousel**          | Horizontal scroll with arrows                                                             |
| **Image**             | Image with optional Next.js optimization                                                  |
| **Avatar**            | User avatar with fallback initials                                                        |
| **Icon**              | SVG icon wrapper with sizes                                                               |
| **Logo**              | Brand logo                                                                                |
| **LogoWithBrandName** | Logo with brand name text                                                                 |
| **Modal**             | Centered overlay dialog                                                                   |
| **Dialog**            | Confirmation dialog with actions                                                          |
| **Drawer**            | Side panel (left/right)                                                                   |
| **Popover**           | Floating content menu                                                                     |
| **Tooltip**           | Hover hint                                                                                |
| **Lightbox**          | Full-screen image viewer                                                                  |
| **Divider**           | Horizontal/vertical rule                                                                  |
| **Separator**         | Visual separator                                                                          |
| **Spacer**            | Vertical spacing (xs–xl)                                                                  |
| **DatePicker**        | Native date input                                                                         |
| **TimePicker**        | Native time input                                                                         |
| **DateRangePicker**   | Start and end date inputs                                                                 |
| **Tabs**              | Tabbed content panels                                                                     |
| **Table**             | Data table with semantic subcomponents                                                    |
| **Calendar**          | Month grid date picker                                                                    |
| **FileUpload**        | Drag-and-drop file upload                                                                 |
| **Dropdown**          | Button with menu items                                                                    |
| **RichTextEditor**    | Basic rich text (bold, italic, underline)                                                 |

### Usage

```tsx
import {
  Button,
  Input,
  Card,
  Badge,
  Checkbox,
  Select,
} from "@/components/ui";

<Button variant="primary" size="md">Click me</Button>
<Input label="Email" placeholder="you@example.com" />
<Card variant="elevated">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description text</CardDescription>
  </CardHeader>
</Card>
<Badge variant="success">Active</Badge>
<Checkbox label="Accept terms" />
<Select label="Country" options={[...]} placeholder="Choose..." />
```

## Design Tokens

CSS variables are defined in `src/app/globals.css`:

- **Colors**: Primary (50–900), neutral, semantic (success, warning, error, info)
- **Spacing**: 4px base scale (space-1 through space-16)
- **Border radius**: sm, md, lg, xl, full
- **Typography**: xs through 4xl

Dark mode is supported via `prefers-color-scheme: dark`.

## Reusing in Other Projects

1. **Copy components**: Copy the entire `src/components/ui/` folder (including subfolders) into your project
2. **Copy tokens**: Copy the `:root` and `@theme` sections from `globals.css`
3. **Ensure Tailwind**: Your project needs Tailwind CSS v4 with the same theme variables

## Scripts

- `npm run dev` — Start development server
- `npm run storybook` — Start Storybook (port 6006)
- `npm run build-storybook` — Build static Storybook
- `npm run build` — Build for production
- `npm run start` — Start production server
- `npm run lint` — Run ESLint

## License

MIT
