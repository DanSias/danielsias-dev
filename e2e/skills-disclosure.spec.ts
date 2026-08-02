import { test, expect } from "@playwright/test";

test("skills disclosures open via click and keyboard, reveal technology content, and work on mobile without overflow", async ({
  page,
}) => {
  await page.goto("/");
  const skillsSection = page.locator("section", { has: page.getByRole("heading", { name: "Skills", exact: true }) });
  const frontendDisclosure = skillsSection.locator("details", { hasText: "Frontend" });
  const summary = frontendDisclosure.locator("summary");

  // Closed by default; native <details>/<summary> semantics, not custom ARIA.
  await expect(frontendDisclosure).not.toHaveAttribute("open", "");

  // Opens via click, and the underlying technology list becomes present.
  await summary.click();
  await expect(frontendDisclosure).toHaveAttribute("open", "");
  await expect(frontendDisclosure.getByText("React, Next.js", { exact: false })).toBeVisible();

  // Toggles via keyboard (native <summary> responds to Enter/Space).
  await summary.focus();
  await page.keyboard.press("Enter");
  await expect(frontendDisclosure).not.toHaveAttribute("open", "");
  await page.keyboard.press("Enter");
  await expect(frontendDisclosure).toHaveAttribute("open", "");

  // Works at mobile viewport, and opening it doesn't cause horizontal overflow.
  await page.setViewportSize({ width: 390, height: 844 });
  const backendDisclosure = skillsSection.locator("details", { hasText: "Backend" });
  await backendDisclosure.locator("summary").click();
  await expect(backendDisclosure).toHaveAttribute("open", "");

  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth - clientWidth).toBeLessThanOrEqual(1);
});
