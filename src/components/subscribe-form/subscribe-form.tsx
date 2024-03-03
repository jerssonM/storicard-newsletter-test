import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FormEvent, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export const SubscribeForm = () => {
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

  return (
    <Card>
      <CardBody>
        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <Input isRequired name="name" label="Name" />
          <Input isRequired name="email" label="Email" />
          <Button type="submit" isLoading={isLoading} color="primary">
            Subscribe
          </Button>
        </form>
      </CardBody>
    </Card>
  );
};
