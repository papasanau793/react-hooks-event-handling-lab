import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import EyesOnMe from "../components/EyesOnMe";

test("renders a button with the text 'Eyes on me'", () => {
  render(<EyesOnMe />);
  const button = screen.queryByText(/eyes on me/i);
  expect(button).toBeInTheDocument();
});

test("logs 'Good!' when the button is focused", () => {
  console.log = jest.fn();
  render(<EyesOnMe />);
  const button = screen.getByText(/eyes on me/i);
  fireEvent.focus(button);
  expect(console.log).toHaveBeenCalledWith("Good!");
});

test("logs 'Hey! Eyes on me!' when the button loses focus", () => {
  console.log = jest.fn();
  render(<EyesOnMe />);
  const button = screen.getByText(/eyes on me/i);
  fireEvent.blur(button);
  expect(console.log).toHaveBeenCalledWith("Hey! Eyes on me!");
});
