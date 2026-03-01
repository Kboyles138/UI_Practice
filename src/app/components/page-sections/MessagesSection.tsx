import { Alert, Banner, Toast, Snackbar, Notification } from "@/components/ui";

export function MessagesSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Messages
      </h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Alert</h3>
          <div className="space-y-3 max-w-md">
            <Alert variant="info" title="Info">
              This is an informational alert.
            </Alert>
            <Alert variant="success" children="Your changes have been saved." />
            <Alert variant="warning" children="Please review before submitting." />
            <Alert variant="error" children="Something went wrong." />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Banner
          </h3>
          <Banner variant="info">New feature available. Check it out!</Banner>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">Toast</h3>
          <Toast variant="success" title="Success">
            Your message has been sent.
          </Toast>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Snackbar
          </h3>
          <Snackbar
            variant="default"
            action={<span className="cursor-pointer text-sm font-medium underline">Undo</span>}
          >
            Item added to cart.
          </Snackbar>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Notification
          </h3>
          <Notification variant="info" title="New message" timestamp="2 min ago">
            You have a new message from John.
          </Notification>
        </div>
      </div>
    </section>
  );
}
