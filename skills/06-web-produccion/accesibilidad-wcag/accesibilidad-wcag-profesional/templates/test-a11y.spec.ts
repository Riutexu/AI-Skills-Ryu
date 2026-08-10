import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const PAGINAS_CRITICAS = ["/", "/login", "/checkout"];

test.describe("Accesibilidad automatizada", () => {
  for (const ruta of PAGINAS_CRITICAS) {
    test(`sin violations graves en ${ruta}`, async ({ page }) => {
      await page.goto(ruta);
      await page.waitForLoadState("networkidle");

      const resultados = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"])
        .analyze();

      const graves = resultados.violations.filter((v) => v.impact === "critical" || v.impact === "serious");
      expect(
        graves.map((v) => `${v.id} (${v.impact})`),
        `Violaciones graves en ${ruta}: ${JSON.stringify(graves, null, 2)}`
      ).toEqual([]);
    });
  }
});

test("navegación por teclado: modal mantiene el foco y lo restaura", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("button", { name: "Abrir modal" }).focus();
  await page.keyboard.press("Enter");
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog").getByRole("button").first()).toBeFocused();

  const dialogo = page.getByRole("dialog");
  await dialogo.getByRole("button", { name: "Cancelar" }).focus();
  await page.keyboard.press("Escape");
  await expect(dialogo).toBeHidden();
  await expect(page.getByRole("button", { name: "Abrir modal" })).toBeFocused();
});