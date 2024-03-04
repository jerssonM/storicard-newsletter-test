import { FormEvent, useRef, useState } from "react";

import { NewsletterForm } from "@/components/newsletter-form/newsletter-form";

export const NewsletterFormContainer = () => {
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
    <NewsletterForm isLoading={isLoading} onSubmit={onSubmit} ref={formRef} />
  );
};
