import { render, screen } from "@testing-library/react";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  const setup = () => render(<App />, { wrapper: BrowserRouter });

  it("renders order together headline text", () => {
    setup();
    const welcomeElement = screen.getByText(/order together/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders two buttons", () => {
    setup();
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
  });
});
