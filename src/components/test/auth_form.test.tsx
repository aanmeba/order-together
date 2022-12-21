import { fireEvent, render, screen } from "@testing-library/react";
import AuthForm from "../auth_form";

describe("AuthForm", () => {
  const setup = () => render(<AuthForm />);

  it("renders input fields", () => {
    setup();
    const name = screen.getByLabelText(/name/i);
    const password = screen.getByLabelText(/password/i);

    expect(name).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  it("returns error if any required field is blank", () => {
    setup();
    const mockedHandleSubmit = jest.fn();
    const onClick = jest.fn(() => mockedHandleSubmit);

    const button = screen.getByRole("button");
    const name = screen.getByLabelText(/name/i);

    fireEvent.change(name, { target: { value: "test" } });
    fireEvent.click(button);

    expect(button).toBeInTheDocument();
    expect(onClick).toHaveBeenCalledTimes(0);
  });
});
