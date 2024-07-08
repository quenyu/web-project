import { render, screen,  } from "@testing-library/react"
import { Button, ThemeButton } from "./Button"

describe("button", () => {
  test("with text in button", () => {
    render(<Button>Test</Button>)
    expect(screen.getByText("Test")).toBeInTheDocument()
  })
  test("with className clear", () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByText("Test")).toHaveClass("clear")
  })
})