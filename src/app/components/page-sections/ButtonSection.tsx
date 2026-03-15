import { Button, Card, CardContent } from "@/components/ui";
import { FaPlus } from "react-icons/fa";

export function ButtonSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Button</h2>
      <Card variant="outlined" className="mb-6">
        <CardContent className="space-y-6">
          {/* Variants */}
          <div>
            <p className="text-sm text-neutral-500 mb-2">Variants</p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
            </div>
          </div>

          {/* Icons */}
          <div>
            <p className="text-sm text-neutral-500 mb-2">Icons</p>

            {/* Icon + text (left) */}
            <div className="flex flex-wrap gap-3 mb-3">
              <Button variant="primary" icon={FaPlus}>
                Primary
              </Button>
              <Button variant="secondary" icon={FaPlus}>
                Secondary
              </Button>
              <Button variant="outline" icon={FaPlus}>
                Outline
              </Button>
              <Button variant="ghost" icon={FaPlus}>
                Ghost
              </Button>
              <Button variant="danger" icon={FaPlus}>
                Danger
              </Button>
            </div>

            {/* Icon + text (right) */}
            <div className="flex flex-wrap gap-3 mb-3">
              <Button variant="primary" icon={FaPlus} iconPosition="right">
                Primary
              </Button>
              <Button variant="secondary" icon={FaPlus} iconPosition="right">
                Secondary
              </Button>
              <Button variant="outline" icon={FaPlus} iconPosition="right">
                Outline
              </Button>
              <Button variant="ghost" icon={FaPlus} iconPosition="right">
                Ghost
              </Button>
              <Button variant="danger" icon={FaPlus} iconPosition="right">
                Danger
              </Button>
            </div>

            {/* Icon-only */}
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" icon={FaPlus} />
              <Button variant="secondary" icon={FaPlus} />
              <Button variant="outline" icon={FaPlus} />
              <Button variant="ghost" icon={FaPlus} />
              <Button variant="danger" icon={FaPlus} />
            </div>
          </div>

          {/* Sizes */}
          {/* Text-only buttons */}
          <div>
            <p className="text-sm text-neutral-500 mb-2">Sizes</p>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* Icon + Text buttons */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" icon={FaPlus}>
                Small
              </Button>
              <Button size="md" icon={FaPlus}>
                Medium
              </Button>
              <Button size="lg" icon={FaPlus}>
                Large
              </Button>
            </div>
          </div>

          {/* Icon-only buttons */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="sm" icon={FaPlus} />
              <Button size="md" icon={FaPlus} />
              <Button size="lg" icon={FaPlus} />
            </div>
          </div>

          {/* States */}
          <div>
            <p className="text-sm text-neutral-500 mb-2">States</p>
            <div className="flex flex-wrap gap-3">
              <Button disabled>Disabled</Button>
              <Button variant="primary" fullWidth>
                Full Width
              </Button>
            </div>
          </div>

          {/* States with Icons */}
          <div>
            <p className="text-sm text-neutral-500 mb-2">States with Icons</p>
            <div className="flex flex-wrap gap-3">
              <Button icon={FaPlus} disabled>
                Disabled
              </Button>
              <Button icon={FaPlus} variant="primary" fullWidth>
                Full Width
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
