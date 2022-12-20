import { fireEvent, getByTestId, render, screen } from "@testing-library/react";
import MainButton from "../main_button";

const mockedUseNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUseNavigate,
}));

describe("MainButton", () => {
  const setup = () => render(<MainButton text="click" origin="join" />);
  let button: HTMLButtonElement;
  // render is banned in beforeEach
  // button can't be defined in beforeEach since setup() should be called first,
  // which cannot be called in beforeEach

  it("renders a button", () => {
    setup();
    button = screen.getByTestId("main-btn");
    expect(button).toBeInTheDocument();
  });

  it("should triger navigate function once clicked", () => {
    setup();
    button = screen.getByTestId("main-btn");
    fireEvent.click(button);
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
  });
});
