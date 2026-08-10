import { describe, it, expect, beforeAll, afterAll } from "vitest";
import { app, iniciarServidor, detenerServidor } from "../src/server";
import request from "supertest";

describe("API /api/health", () => {
  beforeAll(async () => {
    await iniciarServidor();
  });

  afterAll(async () => {
    await detenerServidor();
  });

  it("responde 200 con estado ok", async () => {
    const respuesta = await request(app).get("/api/health").expect(200);

    expect(respuesta.body).toMatchObject({
      status: "ok",
      uptime: expect.any(Number)
    });
  });

  it("responde 404 para rutas inexistentes con JSON de error", async () => {
    const respuesta = await request(app).get("/api/no-existe").expect(404);

    expect(respuesta.body).toMatchObject({
      error: "recurso no encontrado",
      status: 404
    });
  });

  it("valida el cuerpo al crear un usuario", async () => {
    const respuesta = await request(app)
      .post("/api/usuarios")
      .send({ correo: "invalido" })
      .expect(400);

    expect(respuesta.body).toMatchObject({
      error: "validacion",
      campos: ["correo", "nombre"]
    });
  });

  it("crea un usuario correctamente", async () => {
    const respuesta = await request(app)
      .post("/api/usuarios")
      .send({ correo: "nuevo@example.com", nombre: "Ana" })
      .expect(201);

    expect(respuesta.body).toMatchObject({
      id: expect.any(Number),
      correo: "nuevo@example.com"
    });
  });
});