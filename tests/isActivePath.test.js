import { describe, it, expect } from "vitest";
import { isActivePath } from "../js/utils/userInterface.js";

describe("isActivePath", () => {
  it("returns true when paths match exactly", () => {
    expect(isActivePath("/about", "/about")).toBe(true);
  });

  it("returns true for root path cases", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/", "/index.html")).toBe(true);
  });

  it("returns true when current path includes href", () => {
    expect(isActivePath("/venues/123", "/venues")).toBe(true);
  });

  it("returns false when paths do not match", () => {
    expect(isActivePath("/about", "/contact")).toBe(false);
  });
});