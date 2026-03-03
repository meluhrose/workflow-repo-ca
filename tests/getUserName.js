import { getUserName } from "../js/utils/storage.js";

describe("getUserName", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("returns name from storage", () => {
    const user = { name: "Mila" };
    localStorage.setItem("user", JSON.stringify(user));

    expect(getUserName()).toBe("Mila");
  });

  it("returns null if no user exists", () => {
    expect(getUserName()).toBeNull();
  });
});