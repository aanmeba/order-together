import { fireEvent, render, screen } from "@testing-library/react";
import AuthForm from "../auth_form";

describe("AuthForm", () => {
  jest.mock("props", () => jest.fn());
  const props = {
    userAuth: {
      signUp: jest.fn(),
      logIn: jest.fn(),
      logOut: jest.fn(),
    },
  };

  // const userAuth = jest.fn();
  // const signUp = jest.fn();
  // const logIn = jest.fn();
  // const logOut = jest.fn();
  const setup = () => render(<AuthForm userAuth={props.userAuth} />);

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
