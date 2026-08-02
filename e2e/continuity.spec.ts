import { test, expect } from "@playwright/test";

test("flagship project and cross-page links resolve to their intended destinations", async ({
  page,
}) => {
  // Homepage flagship CTA -> Projects (the Workflow Intelligence case study).
  await page.goto("/");
  await page.locator("#selected-work").scrollIntoViewIfNeeded();
  await expect(
    page.getByRole("heading", { name: "Workflow Intelligence", level: 3 })
  ).toBeVisible();
  await page.getByRole("link", { name: "View Case Study →" }).click();
  await expect(page).toHaveURL("/projects");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText("Engineering Projects");

  // Projects -> back to the RocketGate experience case study.
  await page.getByRole("link", { name: "See it in context at RocketGate →" }).click();
  await expect(page).toHaveURL("/experience");
  await expect(page.getByRole("heading", { name: "RocketGate", level: 2 })).toBeVisible();

  // Experience's flagship link -> homepage Selected Work anchor.
  await page.getByRole("link", { name: "View Workflow Intelligence →" }).click();
  await expect(page).toHaveURL(/\/#selected-work$/);
  await expect(page.locator("#selected-work")).toBeVisible();

  // "View All Projects" from the homepage's More Projects section.
  await page.getByRole("link", { name: "View All Projects →" }).click();
  await expect(page).toHaveURL("/projects");

  // Engineering Foundations "Visible In" links land on real destinations.
  await page.goto("/education");
  const foundationsLink = page.getByRole("link", { name: "Engineering Capabilities" }).first();
  await expect(foundationsLink).toHaveAttribute("href", "/skills");
  await foundationsLink.click();
  await expect(page).toHaveURL("/skills");

  // Resume Hub links reach Experience, Projects, Capabilities, and Foundations.
  await page.goto("/resume");
  const exploreTargets: [string, string][] = [
    ["Engineering Experience", "/experience"],
    ["Engineering Projects", "/projects"],
    ["Engineering Capabilities", "/skills"],
    ["Engineering Foundations", "/education"],
  ];
  for (const [label, href] of exploreTargets) {
    await expect(page.getByRole("link", { name: label })).toHaveAttribute("href", href);
  }
});
