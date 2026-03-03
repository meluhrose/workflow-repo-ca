import { getUsername } from "../../js/utils/storage.js";

describe("getUsername", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns name from storage", () => {
    const user = { name: "Mila" };
    localStorage.setItem("user", JSON.stringify(user));

    expect(getUsername()).toBe("Mila");
  });

  it("returns null if no user exists", () => {
    expect(getUsername()).toBeNull();
  });
});