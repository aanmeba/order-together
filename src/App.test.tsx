import { render, screen } from "@testing-library/react";
import App from "./app";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  beforeEach(() => {
    render(<App />, { wrapper: BrowserRouter });
  });

  it("renders order together headline text", () => {
    const welcomeElement = screen.getByText(/order together/i);
    expect(welcomeElement).toBeInTheDocument();
  });

  it("renders two buttons", () => {
    const buttons = screen.getAllByRole("button");
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons[1]).toBeInTheDocument();
  });
});
