import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

describe("App tests", () => {
  test("dummy test", () => {
    render(<App />);
    expect(screen.getByText(/Hello Carbon/)).toBeInTheDocument();
  });
});
