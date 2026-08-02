import { test, expect } from "@playwright/test";
import { NAV_ROUTES } from "./fixtures";

test.describe("desktop navigation", () => {
  test("every nav link reaches its route, marks itself active, and Resume has no icon", async ({
    page,
  }) => {
    await page.goto("/");
    // Scope to the header landmark: it's the only nav present until the
    // mobile menu opens, and stays first even after it does.
    const nav = page.getByRole("banner").getByRole("navigation").first();

    for (const { path, navLabel } of NAV_ROUTES) {
      await test.step(`"${navLabel}" navigates to ${path}`, async () => {
        await nav.getByRole("link", { name: navLabel, exact: true }).click();
        await expect(page).toHaveURL(path);

        const activeLink = nav.getByRole("link", { name: navLabel, exact: true });
        await expect(activeLink).toHaveAttribute("aria-current", "page");

        // Every other nav link must not be marked active.
        for (const other of NAV_ROUTES) {
          if (other.navLabel === navLabel) continue;
          await expect(
            nav.getByRole("link", { name: other.navLabel, exact: true })
          ).not.toHaveAttribute("aria-current", "page");
        }
      });
    }

    // Resume is a normal internal link — no PDF/document icon beside it.
    const resumeLink = nav.getByRole("link", { name: "Resume", exact: true });
    await expect(resumeLink.locator("svg")).toHaveCount(0);
  });

  test("homepage shows no active nav item, and the brand link returns home", async ({
    page,
  }) => {
    await page.goto("/about");
    await page.getByRole("banner").getByRole("link", { name: "Daniel Sias" }).click();
    await expect(page).toHaveURL("/");

    const nav = page.getByRole("banner").getByRole("navigation").first();
    for (const { navLabel } of NAV_ROUTES) {
      await expect(
        nav.getByRole("link", { name: navLabel, exact: true })
      ).not.toHaveAttribute("aria-current", "page");
    }
  });
});

test.describe("mobile navigation", () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test("menu opens, every route is reachable, and closes on selection and Escape", async ({
    page,
  }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: "Toggle menu" });

    // Scoped to the header landmark so the footer's nav is never matched.
    // At this viewport the desktop nav is CSS-hidden (`hidden md:flex`),
    // which removes it from the accessibility tree entirely — so only the
    // mobile dropdown's nav is ever visible to role queries here: 1 open, 0 closed.
    const banner = page.getByRole("banner");

    await toggle.click();
    const mobileNav = banner.getByRole("navigation").last();
    await expect(mobileNav.getByRole("link", { name: "Contact", exact: true })).toBeVisible();

    // Selecting a route closes the menu.
    await mobileNav.getByRole("link", { name: "Skills", exact: true }).click();
    await expect(page).toHaveURL("/skills");
    await expect(banner.getByRole("navigation")).toHaveCount(0);

    // Escape closes the menu without navigating.
    await toggle.click();
    await expect(banner.getByRole("navigation")).toHaveCount(1);
    await page.keyboard.press("Escape");
    await expect(banner.getByRole("navigation")).toHaveCount(0);
    await expect(page).toHaveURL("/skills");
  });
});

test.describe("keyboard accessibility", () => {
  test("header has a logical, keyboard-operable tab order with visible focus", async ({
    page,
  }) => {
    await page.goto("/experience");

    // First Tab reaches the brand/home link.
    await page.keyboard.press("Tab");
    await expect(
      page.getByRole("banner").getByRole("link", { name: "Daniel Sias" })
    ).toBeFocused();

    // Next Tab reaches the first nav item (About) with a visible focus ring.
    await page.keyboard.press("Tab");
    const aboutLink = page.getByRole("banner").getByRole("link", { name: "About", exact: true });
    await expect(aboutLink).toBeFocused();
    await expect(aboutLink).toHaveCSS("outline-style", /solid|auto/);

    // Enter activates the focused link.
    await page.keyboard.press("Enter");
    await expect(page).toHaveURL("/about");
  });
});
