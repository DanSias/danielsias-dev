import { test, expect } from "@playwright/test";

test("resume page download and preview controls point to a valid, non-empty PDF", async ({
  page,
  request,
}) => {
  await page.goto("/resume");

  const downloadLink = page.getByRole("link", { name: "Download PDF" });
  await expect(downloadLink).toHaveAttribute("href", "/resume.pdf");

  const iframe = page.locator("iframe");
  await expect(iframe).toHaveAttribute("src", /^\/resume\.pdf/);

  const fallbackLink = page.getByRole("link", { name: "Open the PDF directly →" });
  await expect(fallbackLink).toHaveAttribute("href", "/resume.pdf");

  const pdfResponse = await request.get("/resume.pdf");
  expect(pdfResponse.status()).toBe(200);
  expect(pdfResponse.headers()["content-type"]).toContain("application/pdf");
  const body = await pdfResponse.body();
  expect(body.byteLength).toBeGreaterThan(0);
});
