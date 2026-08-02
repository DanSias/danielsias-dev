import { test, expect } from "@playwright/test";
import { ROUTES } from "./fixtures";

test.describe("route smoke tests", () => {
  test("every public route loads with correct heading and shared chrome", async ({
    page,
  }) => {
    for (const { path, heading } of ROUTES) {
      await test.step(`${path || "/"} loads correctly`, async () => {
        const consoleErrors: string[] = [];
        const failedRequests: string[] = [];

        const onConsole = (msg: import("@playwright/test").ConsoleMessage) => {
          if (msg.type() === "error") consoleErrors.push(msg.text());
        };
        const onResponse = (res: import("@playwright/test").Response) => {
          const sameOrigin = new URL(res.url()).origin === new URL(page.url() || "http://127.0.0.1").origin;
          if (sameOrigin && res.status() >= 400) {
            failedRequests.push(`${res.status()} ${res.url()}`);
          }
        };

        page.on("console", onConsole);
        page.on("response", onResponse);

        const response = await page.goto(path);
        expect(response?.ok(), `${path} should return a successful response`).toBeTruthy();

        // Primary heading is visible and matches the expected page identity.
        await expect(
          page.getByRole("heading", { level: 1, name: heading })
        ).toBeVisible();

        // Shared chrome: header nav (with the home link) and footer.
        await expect(page.getByRole("banner")).toBeVisible();
        await expect(
          page.getByRole("banner").getByRole("link", { name: "Daniel Sias" })
        ).toBeVisible();
        await expect(page.getByRole("contentinfo")).toBeVisible();

        page.off("console", onConsole);
        page.off("response", onResponse);

        expect(consoleErrors, `console errors on ${path}`).toEqual([]);
        expect(failedRequests, `failed same-origin requests on ${path}`).toEqual([]);
      });
    }
  });

  test("visiting a nonexistent route renders the custom not-found experience with a way back home", async ({
    page,
  }) => {
    await page.goto("/this-page-does-not-exist");

    await expect(
      page.getByRole("heading", { level: 1, name: "Page Not Found" })
    ).toBeVisible();

    const homeLink = page.getByRole("link", { name: "Back to Home" });
    await expect(homeLink).toBeVisible();
    await homeLink.click();

    await expect(page).toHaveURL("/");
    await expect(
      page.getByRole("heading", { level: 1, name: "Daniel Sias" })
    ).toBeVisible();
  });
});
