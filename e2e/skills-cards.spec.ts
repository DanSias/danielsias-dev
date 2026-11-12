import { test, expect } from "@playwright/test";

test("homepage skill cards show all descriptions without interaction, with equal row heights and no overflow", async ({
  page,
}) => {
  await page.goto("/");
  const skillsSection = page.locator("section", { has: page.getByRole("heading", { name: "Skills", exact: true }) });

  await expect(skillsSection.locator("details, summary")).toHaveCount(0);
  await expect(skillsSection.getByText("React, Next.js", { exact: false })).toBeVisible();
  await expect(
    skillsSection.getByText("LLM Integration, RAG Pipelines, AI-Assisted Coding, Local LLMs, Workflow Automation"),
  ).toBeVisible();

  // The AI card description stays within two lines at desktop width.
  const aiLines = await skillsSection
    .getByText("LLM Integration", { exact: false })
    .evaluate((el) => Math.round(el.getBoundingClientRect().height / parseFloat(getComputedStyle(el).lineHeight)));
  expect(aiLines).toBeLessThanOrEqual(2);

  // Cards in the same row share a height (desktop: 3 columns).
  const heights = await skillsSection.locator("h3").evaluateAll((els) =>
    els.map((el) => Math.round(el.parentElement!.getBoundingClientRect().height)),
  );
  expect(heights).toHaveLength(6);
  expect(heights[0]).toBe(heights[1]);
  expect(heights[1]).toBe(heights[2]);
  expect(heights[3]).toBe(heights[4]);
  expect(heights[4]).toBe(heights[5]);

  await page.setViewportSize({ width: 390, height: 844 });
  await expect(skillsSection.getByText("Laravel, PHP", { exact: false })).toBeVisible();
  const { scrollWidth, clientWidth } = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
  }));
  expect(scrollWidth - clientWidth).toBeLessThanOrEqual(1);
});
