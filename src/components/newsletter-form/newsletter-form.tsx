import { FormEventHandler, forwardRef } from "react";
import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { ImageListType } from "react-images-uploading";

import { ImageUploader } from "../image-uploader/image-uploader";

interface NewsletterFormProps {
  isLoading: boolean;
  onSubmit: FormEventHandler<HTMLFormElement>;
  images: ImageListType;
  onChangeImages?: (imageList: ImageListType) => void;
}

export const NewsletterForm = forwardRef<HTMLFormElement, NewsletterFormProps>(
  function NewsletterForm(
    { images, onSubmit, isLoading, onChangeImages },
    ref
  ) {
    return (
      <Card className="mt-4 w-11/12 md:w-4/6 my-0 mx-auto">
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
                name="callToActionLabel"
              />
              <Input
                className="mb-4"
                label="Call to action link"
                required
                name="callToActionLink"
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
            <ImageUploader images={images} onChange={onChangeImages} />
            <hr className="my-4" />
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
