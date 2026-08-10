import express from "express";
import pino from "pino";
import pinoHttp from "pino-http";
import client from "prom-client";

const logger = pino({
  level: process.env.LOG_LEVEL ?? "info",
  redact: { paths: ["req.headers.authorization", "password", "token", "cvv"], censor: "[REDACTADO]" },
});

const app = express();
app.use(pinoHttp({ logger, genReqId: (req) => req.headers["x-request-id"] ?? crypto.randomUUID() }));

const contadorPeticiones = new client.Counter({
  name: "http_requests_total",
  help: "Peticiones por método, ruta y estado",
  labelNames: ["method", "route", "status"],
});

const histogramaLatencia = new client.Histogram({
  name: "http_request_duration_seconds",
  help: "Duración de peticiones",
  labelNames: ["method", "route"],
  buckets: [0.05, 0.1, 0.25, 0.5, 1, 2.5, 5],
});

app.use((req, res, next) => {
  const finhora = histogramaLatencia.startTimer({ method: req.method, route: req.route?.path ?? req.path });
  res.on("finish", () => {
    contadorPeticiones.inc({ method: req.method, route: req.route?.path ?? req.path, status: res.statusCode });
    finhora();
    req.log.info({ status: res.statusCode, duracionMs: Date.now() - req.startTime }, "request completado");
  });
  req.startTime = Date.now();
  next();
});

app.get("/api/v1/pedidos/:id", (req, res) => {
  req.log.info({ pedidoId: req.params.id }, "consultando pedido");
  res.json({ id: req.params.id });
});

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", client.register.contentType);
  res.end(await client.register.metrics());
});

app.use((err, req, res, next) => {
  req.log.error({ err, status: 500 }, "error no controlado");
  res.status(500).json({ error: "Error interno" });
});

export default app;