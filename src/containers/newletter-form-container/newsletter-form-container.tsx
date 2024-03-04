import { FormEvent, useRef, useState } from "react";
import { ImageListType } from "react-images-uploading";

import { NewsletterForm } from "@/components/newsletter-form/newsletter-form";

export const NewsletterFormContainer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [images, setImages] = useState<ImageListType>([]);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      if (images.length) {
        formData.append("file", images[0].file as any);
      }

      await fetch("/api/newsletter", {
        method: "POST",
        body: formData,
      });
      formRef.current?.reset();
      setImages([]);
      alert("Message sent!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <NewsletterForm
      isLoading={isLoading}
      onSubmit={onSubmit}
      ref={formRef}
      images={images}
      onChangeImages={setImages}
    />
  );
};
