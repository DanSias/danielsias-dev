import { test, expect } from "@playwright/test";
import { ROUTES } from "./fixtures";

test("internal links resolve without 404s, contain no empty/localhost/html-resume references, and external links are well-formed", async ({
  page,
  request,
}) => {
  const internalPaths = new Set<string>();
  const externalUrls = new Set<string>();
  const problems: string[] = [];

  for (const { path } of ROUTES) {
    await page.goto(path);
    const hrefs = await page.locator("a").evaluateAll((links) =>
      links.map((el) => el.getAttribute("href"))
    );

    for (const href of hrefs) {
      if (href === null) {
        problems.push(`${path}: <a> with no href attribute`);
        continue;
      }
      if (href.trim() === "") {
        problems.push(`${path}: empty href`);
        continue;
      }
      if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
      if (/localhost|127\.0\.0\.1/.test(href)) {
        problems.push(`${path}: href points to localhost (${href})`);
        continue;
      }
      if (href.includes("html-resume")) {
        problems.push(`${path}: href references removed /html-resume route (${href})`);
        continue;
      }

      if (href.startsWith("http://") || href.startsWith("https://")) {
        try {
          new URL(href);
          externalUrls.add(href);
        } catch {
          problems.push(`${path}: malformed external URL (${href})`);
        }
        continue;
      }

      // Same-origin path (absolute "/foo", "/#hash", or "foo.pdf").
      internalPaths.add(href);
    }
  }

  // Every same-origin path resolves without a client/server error.
  for (const href of internalPaths) {
    const [pathname] = href.split("#");
    if (pathname === "") continue; // pure in-page hash link, checked separately
    const res = await request.get(pathname || "/");
    if (res.status() >= 400) {
      problems.push(`broken internal link: ${href} -> ${res.status()}`);
    }
  }

  // /resume.pdf specifically resolves successfully.
  const pdf = await request.get("/resume.pdf");
  expect(pdf.status()).toBe(200);

  // In-page anchor targets actually exist on their destination page.
  await page.goto("/");
  await expect(page.locator("#selected-work")).toHaveCount(1);

  expect(problems, problems.join("\n")).toEqual([]);
  expect(externalUrls.size, "expected at least one external link (GitHub/LinkedIn)").toBeGreaterThan(0);
});
