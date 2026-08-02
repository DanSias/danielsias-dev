import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { ROUTES } from "./fixtures";

test("no route has serious or critical automated accessibility violations", async ({
  page,
}) => {
  for (const { path } of ROUTES) {
    await test.step(path || "/", async () => {
      await page.goto(path);
      await page.waitForLoadState("networkidle");

      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();

      const serious = results.violations.filter(
        (v) => v.impact === "serious" || v.impact === "critical"
      );

      const summary = serious
        .map(
          (v) =>
            `[${v.impact}] ${v.id}: ${v.help} (${v.nodes.length} node(s)) — ${v.nodes
              .map((n) => n.target.join(" "))
              .join(", ")}`
        )
        .join("\n");

      expect(serious, summary).toEqual([]);
    });
  }
});
