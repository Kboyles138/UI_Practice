import { Button, Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui";

export function CardSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Card</h2>
      <div className="grid md:grid-cols-3 gap-6">
        <Card variant="elevated">
          <CardHeader>
            <CardTitle>Elevated</CardTitle>
            <CardDescription>Card with shadow and subtle border.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
        <Card variant="outlined">
          <CardHeader>
            <CardTitle>Outlined</CardTitle>
            <CardDescription>Card with border, no shadow.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="outline" size="sm">
              Action
            </Button>
          </CardFooter>
        </Card>
        <Card variant="filled">
          <CardHeader>
            <CardTitle>Filled</CardTitle>
            <CardDescription>Card with muted background.</CardDescription>
          </CardHeader>
          <CardFooter>
            <Button variant="ghost" size="sm">
              Action
            </Button>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
