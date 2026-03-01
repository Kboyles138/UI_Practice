import {
  Input,
  ErrorMessage,
  SuccessMessage,
  WarningMessage,
  InlineValidation,
} from "@/components/ui";

export function ValidationSection() {
  return (
    <section className="mb-16">
      <h2 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100 mb-4">
        Validation
      </h2>
      <div className="space-y-8 max-w-md">
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Error Message
          </h3>
          <ErrorMessage>This field is required.</ErrorMessage>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Success Message
          </h3>
          <SuccessMessage>Your changes have been saved.</SuccessMessage>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Warning Message
          </h3>
          <WarningMessage>Your session will expire in 5 minutes.</WarningMessage>
        </div>
        <div>
          <h3 className="text-lg font-medium text-neutral-800 dark:text-neutral-200 mb-3">
            Inline Validation
          </h3>
          <InlineValidation status="error" message="Please enter a valid email address.">
            <Input label="Email" placeholder="you@example.com" />
          </InlineValidation>
        </div>
      </div>
    </section>
  );
}
