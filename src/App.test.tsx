import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders order together headline text", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/order together/i);
  expect(welcomeElement).toBeInTheDocument();
});

test("renders two buttons", () => {
  render(<App />);
  const buttons = screen.getAllByRole("button");
  expect(buttons[0]).toBeInTheDocument();
  expect(buttons[1]).toBeInTheDocument();
});
