import { classNames } from "./classNames"

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("some class")).toBe("some class")
  })
  test("with additional param", () => {
    expect(classNames("some class", {}, ["class1", "class2"])).toBe("some class class1 class2")
  })
  test("with mods param", () => {
    expect(classNames("some class", { "scrollable": true, "fixable": true }, ["class1", "class2"])).toBe("some class class1 class2 scrollable fixable")
  })
  test("with undefined mods param", () => {
    expect(classNames("some class", { "scrollable": false }, [])).toBe("some class")
  })
})