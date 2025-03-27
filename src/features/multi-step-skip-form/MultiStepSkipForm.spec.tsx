import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MultiStepSkipForm from "./MultiStepSkipForm";

describe("MultiStepSkipForm", () => {
  test("renders the first step (Postcode) and validates the required field", async () => {
    render(<MultiStepSkipForm />);

    expect(screen.getByText("Postcode")).toBeInTheDocument();

    const nextButton = screen.getByRole("button", { name: /next/i });

    await userEvent.click(nextButton);

    expect(screen.getByText("postcode is required")).toBeInTheDocument();

    const postcodeInput = screen.getByRole("textbox");

    await userEvent.type(postcodeInput, "AB12CD");

    await userEvent.click(nextButton);

    expect(screen.getByText("Waste Type")).toBeInTheDocument();
  });
});
