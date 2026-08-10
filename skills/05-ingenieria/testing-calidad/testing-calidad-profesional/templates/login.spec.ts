import { test, expect } from "@playwright/test";

test.describe("Login", () => {
  test("inicia sesion con credenciales validas", async ({ page }) => {
    await page.goto("/login");

    await page.getByLabel("Correo electronico").fill("usuario@example.com");
    await page.getByLabel("Contrasena").fill("fakepass-123");
    await page.getByRole("button", { name: "Iniciar sesion" }).click();

    await expect(page).toHaveURL(/\/dashboard/);
    await expect(
      page.getByRole("heading", { name: "Panel de control" })
    ).toBeVisible();
  });

  test("muestra error con credenciales invalidas", async ({ page }) => {
    await page.goto("/login");

    await page.getByLabel("Correo electronico").fill("usuario@example.com");
    await page.getByLabel("Contrasena").fill("incorrecta");
    await page.getByRole("button", { name: "Iniciar sesion" }).click();

    await expect(
      page.getByRole("alert").filter({ hasText: "Credenciales invalidas" })
    ).toBeVisible();
    await expect(page).toHaveURL(/\/login/);
  });

  test("valida campos vacios sin llamar a la API", async ({ page }) => {
    let peticiones = 0;
    page.on("request", (req) => {
      if (req.url().includes("/api/auth")) peticiones++;
    });

    await page.goto("/login");
    await page.getByRole("button", { name: "Iniciar sesion" }).click();

    await expect(page.getByText("El correo es obligatorio")).toBeVisible();
    await expect(page.getByText("La contrasena es obligatoria")).toBeVisible();
    expect(peticiones).toBe(0);
  });
});

test.describe("Regresiones visuales", () => {
  test("el dashboard mantiene su apariencia de referencia", async ({ page }) => {
    await page.goto("/login");
    await page.getByLabel("Correo electronico").fill("usuario@example.com");
    await page.getByLabel("Contrasena").fill("fakepass-123");
    await page.getByRole("button", { name: "Iniciar sesion" }).click();

    await page.goto("/dashboard");
    await expect(page.getByRole("heading", { name: "Panel" })).toBeVisible();
    await expect(page).toHaveScreenshot("dashboard.png", {
      maxDiffPixelRatio: 0.02
    });
  });
});