import {test, expect} from "@playwright/test";

test("user logs in successfully", async ({ page }) => {
    await page.goto("http://localhost:3000/login/index.html");

    await page.fill('[name="email"]', process.env.TEST_EMAIL);
    await page.fill('[name="password"]', process.env.TEST_PASSWORD);
    await page.click('button[type="submit"]');
    await expect(page).toHaveURL(/index/);
});

test("invalid login shows error message", async ({ page }) => {
    await page.goto("http://localhost:3000/login/index.html");

    await page.fill('[name="email"]', "invalid@example.com");
    await page.fill('[name="password"]', "wrongpassword");
    await page.click('button[type="submit"]');

    await expect(page.locator("#message-container")).toHaveText("Please enter a noroff.no or stud.noroff.no email address.");
});