import { render, screen } from "@testing-library/react";
import { expect, test, } from "vitest";
import { Button } from "./Button";
test("render button", () => {
    render(<Button text='Test'/>);
    const linkElement = screen.getByText(/Test/i);
    expect(linkElement).toBeInTheDocument();
});