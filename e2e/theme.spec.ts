import { test, expect } from "@playwright/test";

const SHORT_PAGES = ["/contact", "/about", "/education", "/resume"];

test.describe("theme control", () => {
  test("theme toggle is keyboard accessible, updates document state, and persists across navigation", async ({
    page,
  }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Toggle Dark Mode" });

    // Keyboard accessible: focus and activate with Enter.
    await toggle.focus();
    await expect(toggle).toBeFocused();

    const initiallyDark = await page.evaluate(() =>
      document.documentElement.classList.contains("dark")
    );

    await page.keyboard.press("Enter");
    await expect
      .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
      .toBe(!initiallyDark);

    // Switching back works.
    await toggle.click();
    await expect
      .poll(() => page.evaluate(() => document.documentElement.classList.contains("dark")))
      .toBe(initiallyDark);

    // Set a known state, then confirm client-side navigation doesn't reset it.
    await toggle.click(); // now !initiallyDark
    const chosenTheme = await page.evaluate(() =>
      document.documentElement.classList.contains("dark")
    );

    await page.getByRole("navigation").first().getByRole("link", { name: "About", exact: true }).click();
    await expect(page).toHaveURL("/about");
    expect(
      await page.evaluate(() => document.documentElement.classList.contains("dark"))
    ).toBe(chosenTheme);
  });

  for (const colorScheme of ["light", "dark"] as const) {
    test(`short pages keep a full-viewport themed background in ${colorScheme} mode`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 1280, height: 2200 });
      await page.emulateMedia({ colorScheme });

      for (const route of SHORT_PAGES) {
        await test.step(route, async () => {
          await page.goto(route);

          const result = await page.evaluate(() => {
            const wrapper = document.querySelector('[data-testid="app-shell"]');
            const rect = wrapper?.getBoundingClientRect();
            const bottomEl = document.elementFromPoint(
              window.innerWidth / 2,
              window.innerHeight - 2
            );
            const bottomBg = bottomEl ? getComputedStyle(bottomEl).backgroundColor : "";
            return {
              wrapperHeight: rect?.height ?? 0,
              viewportHeight: window.innerHeight,
              bottomBgIsTransparent:
                bottomBg === "rgba(0, 0, 0, 0)" || bottomBg === "transparent",
            };
          });

          // The shell fills at least the full viewport (no gap for the
          // footer to float above), and whatever is rendered at the very
          // bottom row has a real background, not a transparent gap that
          // would let the browser's default canvas color show through.
          expect(result.wrapperHeight).toBeGreaterThanOrEqual(result.viewportHeight - 1);
          expect(result.bottomBgIsTransparent).toBe(false);
        });
      }
    });
  }
});
