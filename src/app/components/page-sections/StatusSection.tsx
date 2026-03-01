import {
  ProgressBar,
  Spinner,
  SkeletonLoader,
  LoadingIndicator,
  Card,
  CardContent,
} from "@/components/ui";

export function StatusSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">Status</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Progress Bar
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent className="space-y-4 max-w-md">
              <ProgressBar value={60} />
              <ProgressBar value={85} showLabel />
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Spinner
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent>
              <div className="flex gap-8">
                <Spinner size="sm" />
                <Spinner size="md" />
                <Spinner size="lg" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Skeleton Loader
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent>
              <div className="w-64 space-y-4">
                <SkeletonLoader variant="circular" width={48} height={48} />
                <SkeletonLoader variant="text" />
                <SkeletonLoader variant="text" className="w-3/4" />
                <SkeletonLoader variant="rectangular" height={80} />
              </div>
            </CardContent>
          </Card>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Loading Indicator
          </h3>
          <Card variant="outlined" className="mb-6">
            <CardContent>
              <LoadingIndicator label="Loading..." />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
