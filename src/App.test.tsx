import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";

describe("App test", () => {
  test("Should show app component", () => {
    render(<App />);
    const label = screen.getByTestId("label");
    expect(label).toBeDefined();
  });
});
