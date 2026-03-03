import {test, expect} from "@playwright/test";

test("user logs in successfully", async ({ page }) => {
    await page.goto("http://localhost:3000/login.html/");

    await page.fill("#email", process.env.TEST_EMAIL);
    await page.fill("#password", process.env.TEST_PASSWORD);
    await page.click("#login-button");
    await expect(page).toHaveURL("http://localhost:3000/dashboard.html");
});

test("invalid login shows error message", async ({ page }) => {
    await page.goto("http://localhost:3000/login.html/");

    await page.fill("#email", "invalid@example.com");
    await page.fill("#password", "wrongpassword");
    await page.click("#login-button");

    await expect(page.locator("#message-container")).toHaveText("Invalid email or password.");
});