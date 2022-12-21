import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import AddButton from "../add_button";

const mockedOnClick = jest.fn();

describe("AddButton", () => {
  const setup = () => render(<AddButton label="add" onClick={mockedOnClick} />);
  let button: HTMLButtonElement;

  it("renders a button", () => {
    setup();
    button = screen.getByTestId("add-btn");
    expect(button).toBeInTheDocument();
  });

  it("should triger navigate function once clicked", () => {
    setup();
    button = screen.getByTestId("add-btn");
    fireEvent.click(button);
    expect(mockedOnClick).toHaveBeenCalledTimes(1);
  });
});
