import { expect, it, vi, describe } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { NewsletterForm } from "@/components/newsletter-form/newsletter-form";

describe("<NewsletterForm />", () => {
  it("Should call newsletter create method", async () => {
    const spyOnSubmit = vi.fn();
    render(<NewsletterForm onSubmit={spyOnSubmit} isLoading={false} />);

    const inputSubject = screen.getByLabelText("Subject");
    const inputCallToActionLabel = screen.getByLabelText(
      "Call to action label"
    );
    const inputCallToActionLink = screen.getByLabelText("Call to action link");
    const inputContent = screen.getByLabelText("Content");
    const buttonSend = screen.getByTestId("newsletter-button-send");

    fireEvent.change(inputSubject, {
      target: { name: "subject", value: "Subject" },
    });
    fireEvent.change(inputCallToActionLabel, {
      target: { name: "label", value: "Click me!" },
    });
    fireEvent.change(inputCallToActionLink, {
      target: { name: "link", value: "www.google.com" },
    });
    fireEvent.change(inputContent, {
      target: {
        name: "content",
        value:
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil at perspiciatis est cumque alias rerum dolores maiores fuga, velit mollitia debitis, sunt veniam minima? Provident, sit ab? Minus, at non!",
      },
    });

    await waitFor(() => {
      fireEvent.click(buttonSend);
      expect(spyOnSubmit).toBeCalled();
    });
  });

  it("Should call newsletter create method without data", async () => {
    const spyOnSubmit = vi.fn();
    render(<NewsletterForm onSubmit={spyOnSubmit} isLoading={false} />);

    const [buttonSend] = screen.getAllByTestId("newsletter-button-send");

    await waitFor(() => {
      fireEvent.click(buttonSend);
      expect(spyOnSubmit).not.toBeCalled();
    });
  });
});
