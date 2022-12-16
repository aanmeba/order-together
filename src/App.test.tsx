import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./app";

test("renders order together link", () => {
  render(<App />);
  const welcomeElement = screen.getByText(/order together/i);
  expect(welcomeElement).toBeInTheDocument();
});
