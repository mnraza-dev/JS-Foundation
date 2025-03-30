import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "./App";
test("test for first react app", () => {
  render(<App />);
  const text = screen.getByText(/Hello World/i);
  const titleOfImage = screen.getByTitle(/Google Logo/i);
  expect(titleOfImage).toBeInTheDocument();
  expect(text).toBeInTheDocument();
});

test("Testing Input Box", () => {
  render(<App />);
  const inputBox = screen.getByRole("textbox");
  const button = screen.getByRole("button");
  const btnText = screen.getByText(/Add Todo/i);
  const placeHolderText = screen.getByPlaceholderText(/Enter a todo/i);
  expect(button).toBeInTheDocument();
  expect(inputBox).toBeInTheDocument();
  expect(inputBox).toHaveAttribute("name", "todo");
  expect(inputBox).toHaveAttribute("id", "todo");
  expect(placeHolderText).toBeInTheDocument();
  expect(btnText).toBeInTheDocument();
})

