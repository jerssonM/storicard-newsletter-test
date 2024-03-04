import { Card, CardBody } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { FormEventHandler, forwardRef } from "react";

interface SubscribeFormProps {
  isLoading: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
}

export const SubscribeForm = forwardRef<HTMLFormElement, SubscribeFormProps>(
  function SubscribeForm({ isLoading, onSubmit }, ref) {
    return (
      <Card>
        <CardBody>
          <form onSubmit={onSubmit} className="flex flex-col gap-4" ref={ref}>
            <Input isRequired name="name" label="Name" />
            <Input isRequired name="email" label="Email" />
            <Button type="submit" isLoading={isLoading} color="primary">
              Subscribe
            </Button>
          </form>
        </CardBody>
      </Card>
    );
  }
);
