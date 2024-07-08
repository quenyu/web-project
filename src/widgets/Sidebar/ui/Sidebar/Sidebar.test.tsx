import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import renderWithTranslations from "shared/lib/test/renderWithTranslations/renderWithTranslations"

describe("sidebar", () => {
  test("with text in button", () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })
  test("toggle sidebar", () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    fireEvent.click(screen.getByTestId("sidbar-button"))
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })
})