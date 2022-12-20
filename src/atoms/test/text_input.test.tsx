import { render, screen } from "@testing-library/react";
import TextInput from "../text_input";

describe("TextInput", () => {
  const setup = () =>
    render(
      <TextInput
        label="test label"
        id="test"
        required={true}
        helper="this is a test label"
      />
    );

  it("renders an input", () => {
    setup();
    const input = screen.getByText("test label");
    expect(input).toBeInTheDocument();
  });
});
