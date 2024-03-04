import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState } from "react";

import { SubscribeForm } from "@/components/subscribe-form/subscribe-form";

export const SubscribeFormContainer = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    try {
      setIsLoading(true);
      event.preventDefault();
      const formData = new FormData(event.currentTarget);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
      };

      const request = await fetch("/api/users/add", {
        method: "POST",
        body: JSON.stringify(payload),
      });
      const response = await request.json();

      formRef.current?.reset();
      router.refresh();
      alert(response?.message || "User added!");
    } finally {
      setIsLoading(false);
    }
  };

  return <SubscribeForm isLoading={isLoading} onSubmit={onSubmit} />;
};
