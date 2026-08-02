import { test, expect } from "@playwright/test";
import { ROUTES } from "./fixtures";

const VIEWPORTS = [
  { name: "desktop (1440x900)", width: 1440, height: 900 },
  { name: "mobile (390x844)", width: 390, height: 844 },
  { name: "small mobile (320x720)", width: 320, height: 720 },
];

test("no route causes horizontal overflow at desktop or mobile widths", async ({
  page,
}) => {
  for (const viewport of VIEWPORTS) {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });

    for (const { path } of ROUTES) {
      await test.step(`${viewport.name} — ${path || "/"}`, async () => {
        await page.goto(path);
        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        expect(
          scrollWidth - clientWidth,
          `${path || "/"} at ${viewport.name}: scrollWidth ${scrollWidth} vs clientWidth ${clientWidth}`
        ).toBeLessThanOrEqual(1);
      });
    }
  }
});
