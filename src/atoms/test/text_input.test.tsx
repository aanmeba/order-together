import { render, screen } from "@testing-library/react";
import TextInput from "../text_input";

describe("TextInput", () => {
  // beforeEach(() => {
  render(
    <TextInput
      label="test label"
      idName="test-label"
      required={true}
      helper="this is a test label"
    />
  );
  // });
  it("renders an input", () => {
    const input = screen.getByText("test label");
    expect(input).toBeInTheDocument();
  });
});
