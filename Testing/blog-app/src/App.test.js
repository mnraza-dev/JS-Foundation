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
