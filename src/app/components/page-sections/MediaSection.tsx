import { Card, Carousel, Image, Avatar, Icon, Logo, LogoWithBrandName } from "@/components/ui";

export function MediaSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Media</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Carousel
          </h3>
          <Carousel>
            {[1, 2, 3].map((n) => (
              <Card key={n} variant="outlined" className="min-w-[180px] shrink-0">
                <div className="h-20 flex items-center justify-center text-neutral-500">
                  Slide {n}
                </div>
              </Card>
            ))}
          </Carousel>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Image</h3>
          <Image src="/next.svg" alt="Next.js" width={120} height={48} />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Avatar
          </h3>
          <div className="flex gap-4">
            <Avatar fallback="JD" size="sm" />
            <Avatar fallback="AB" size="md" />
            <Avatar fallback="XY" size="lg" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Icon</h3>
          <div className="flex gap-4">
            <Icon size="sm">
              <path d="M20 6L9 17l-5-5" />
            </Icon>
            <Icon size="md">
              <path d="M20 6L9 17l-5-5" />
            </Icon>
            <Icon size="lg">
              <path d="M20 6L9 17l-5-5" />
            </Icon>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Logo</h3>
          <Logo src="/next.svg" alt="Logo" />
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Logo with Brand Name
          </h3>
          <LogoWithBrandName src="/next.svg" alt="Logo" brandName="My Brand" />
        </div>
      </div>
    </section>
  );
}
