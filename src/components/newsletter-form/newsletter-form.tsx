import { FormEventHandler, forwardRef } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

interface NewsletterFormProps {
  isLoading: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const NewsletterForm = forwardRef<HTMLFormElement, NewsletterFormProps>(
  function NewsletterForm({ onSubmit, isLoading }, ref) {
    return (
      <Card className="mt-4 w-4/6 my-0 mx-auto">
        <CardHeader>
          <h2>Send newsletter!</h2>
        </CardHeader>
        <CardBody>
          <form onSubmit={onSubmit} ref={ref}>
            <Input
              className="mb-4"
              label="Subject"
              required
              name="subject"
              isRequired
            />
            <div className="flex gap-4">
              <Input
                isRequired
                className="mb-4"
                label="Call to action label"
                required
                name="label"
              />
              <Input
                className="mb-4"
                label="Call to action link"
                required
                name="link"
                isRequired
              />
            </div>
            <Textarea
              className="mb-4"
              label="Content"
              required
              name="content"
              isRequired
              minLength={40}
              placeholder="Minimum 40 characters"
            />
            <Button
              data-testid="newsletter-button-send"
              type="submit"
              color="primary"
              className="w-32"
              isLoading={isLoading}
            >
              Send
            </Button>
          </form>
        </CardBody>
      </Card>
    );
  }
);
