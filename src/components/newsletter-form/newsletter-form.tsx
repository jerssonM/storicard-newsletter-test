import { FormEvent, useRef, useState } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";

export function NewsletterForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const payload = {
        subject: formData.get("subject"),
        content: formData.get("content"),
        callToAction: {
          link: formData.get("link"),
          label: formData.get("label"),
        },
      };

      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      formRef.current?.reset();
      alert("Message sent!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mt-4 w-4/6 my-0 mx-auto">
      <CardHeader>
        <h2>Send newsletter!</h2>
      </CardHeader>
      <CardBody>
        <form onSubmit={onSubmit} ref={formRef}>
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
              label="Link"
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
