import { test, expect } from "@playwright/test";

test("la persona usuaria completa un flujo de compra exitoso", async ({
  page
}) => {
  await page.goto("/catalogo");

  await expect(
    page.getByRole("heading", { name: "Catalogo de productos" })
  ).toBeVisible();

  await page
    .getByRole("button", { name: "Agregar al carrito" })
    .first()
    .click();

  await expect(page.getByRole("link", { name: "Carrito (1)" })).toBeVisible();

  await page.getByRole("link", { name: "Carrito (1)" }).click();
  await page.getByRole("button", { name: "Finalizar compra" }).click();

  await page.getByLabel("Nombre completo").fill("Ana Perez");
  await page.getByLabel("Correo electronico").fill("ana@ejemplo.com");
  await page.getByLabel("Direccion").fill("Av. Siempre Viva 742");
  await page.getByLabel("Numero de tarjeta").fill("4242424242424242");
  await page.getByLabel("Fecha de expiracion").fill("12/28");
  await page.getByLabel("CVC").fill("123");

  await page.getByRole("button", { name: "Pagar" }).click();

  await expect(
    page.getByRole("heading", { name: "Compra confirmada" })
  ).toBeVisible({
    timeout: 15_000
  });

  await expect(page.getByText(/orden-2026-/)).toBeVisible();
});

test("valida errores de formulario en el checkout", async ({ page }) => {
  await page.goto("/catalogo");
  await page
    .getByRole("button", { name: "Agregar al carrito" })
    .first()
    .click();
  await page.getByRole("link", { name: "Carrito (1)" }).click();
  await page.getByRole("button", { name: "Finalizar compra" }).click();

  await page.getByRole("button", { name: "Pagar" }).click();

  await expect(
    page.getByText("El correo electronico es obligatorio")
  ).toBeVisible();
  await expect(
    page.getByText("El numero de tarjeta debe tener 16 digitos")
  ).toBeVisible();
});

test.describe("visual regression del catalogo", () => {
  test("la portada del catalogo se ve estable", async ({ page }) => {
    await page.goto("/catalogo");
    await expect(
      page.getByRole("heading", { name: "Catalogo de productos" })
    ).toBeVisible();
    await expect(page).toHaveScreenshot("catalogo-portada.png", {
      maxDiffPixelRatio: 0.01
    });
  });
});