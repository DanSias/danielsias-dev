import { test, expect } from "@playwright/test";
import { contactInfo } from "../src/constants/contact";

test("contact actions use correct URLs, the page has no mobile overflow, and the closing line avoids an orphan", async ({
  page,
}) => {
  await page.goto("/contact");

  // Scoped to the page's own content: the footer's social icons share the
  // same accessible names (GitHub/LinkedIn) but are a separate, sitewide
  // element, not part of this page's own contact actions.
  const main = page.getByRole("main");

  // Primary action: mailto with the correct address.
  await expect(main.getByRole("link", { name: "Email Me" })).toHaveAttribute(
    "href",
    `mailto:${contactInfo.email}`
  );

  // Secondary actions: correct external URLs, opened safely in a new tab.
  const github = main.getByRole("link", { name: "GitHub" });
  await expect(github).toHaveAttribute("href", contactInfo.github);
  await expect(github).toHaveAttribute("target", "_blank");
  await expect(github).toHaveAttribute("rel", /noopener/);

  const linkedin = main.getByRole("link", { name: "LinkedIn" });
  await expect(linkedin).toHaveAttribute("href", contactInfo.linkedin);
  await expect(linkedin).toHaveAttribute("target", "_blank");
  await expect(linkedin).toHaveAttribute("rel", /noopener/);

  // Human details line is visible.
  await expect(
    page.getByText("Florida (Remote)", { exact: false })
  ).toBeVisible();

  // Closing paragraph: the fix uses explicit <br> breaks so the final
  // segment is never a single orphaned word, regardless of viewport width.
  const closingHTML = await page
    .locator("p", { hasText: "Most of what's on this site" })
    .innerHTML();
  const lastSegment = closingHTML.split(/<br\s*\/?>/i).pop() ?? "";
  const lastSegmentWords = lastSegment.replace(/<[^>]+>/g, "").trim().split(/\s+/);
  expect(lastSegmentWords.length).toBeGreaterThan(1);

  // No horizontal overflow at a representative mobile width.
  await page.setViewportSize({ width: 390, height: 844 });
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth - clientWidth).toBeLessThanOrEqual(1);

  // Footer sits at the bottom on a tall viewport (short-page layout fix).
  await page.setViewportSize({ width: 1280, height: 2200 });
  await page.reload();
  const footerBox = await page.getByRole("contentinfo").boundingBox();
  expect(footerBox).not.toBeNull();
  if (footerBox) {
    expect(footerBox.y + footerBox.height).toBeGreaterThanOrEqual(2200 - 5);
  }
});
