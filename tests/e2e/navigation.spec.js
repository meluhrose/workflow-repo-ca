import {test, expect } from "@playwright/test";

test("venue navigation works", async ({ page }) => {
    await page.goto("http://localhost:3000/");

    await page.waitForSelector("#venue-container a");
    await page.locator("#venue-container a").first().click();

    await expect(page.locator("h1").first()).toContainText("Venue details");

});