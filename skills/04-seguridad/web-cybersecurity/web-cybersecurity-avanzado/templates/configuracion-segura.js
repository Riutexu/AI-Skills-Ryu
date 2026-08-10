import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import jwt from "jsonwebtoken";

const app = express();
const ORIGENES_PERMITIDOS = (process.env.CORS_ORIGINS ?? "").split(",").filter(Boolean);

app.use(helmet());
app.use(
  helmet.contentSecurityPolicy({
    useDefaults: true,
    directives: {
      "default-src": ["'self'"],
      "script-src": ["'self'"],
      "object-src": ["'none'"],
      "base-uri": ["'self'"],
      "frame-ancestors": ["'none'"],
      reportOnly: process.env.CSP_REPORT_ONLY === "true",
    },
  })
);

app.use(
  cors({
    origin(origin, callback) {
      if (!origin || ORIGENES_PERMITIDOS.includes(origin)) return callback(null, true);
      callback(new Error("CORS no permitido"));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const limitadorLogin = rateLimit({
  windowMs: 60 * 1000,
  limit: 5,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: { error: "Demasiados intentos" },
  headers: true,
});
app.post("/login", limitadorLogin, (req, res) => {
  const { email } = req.body ?? {};
  if (!email) return res.status(400).json({ error: "Email requerido" });
  const token = jwt.sign({ sub: email, aud: "app-api", iss: "api.midominio.com" }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  res.json({ token });
});

const verificarJwt = (req, res, next) => {
  const encabezado = req.headers.authorization ?? "";
  const token = encabezado.startsWith("Bearer ") ? encabezado.slice(7) : null;
  if (!token) return res.status(401).json({ error: "Token requerido" });
  try {
    req.usuario = jwt.verify(token, process.env.JWT_SECRET, { audience: "app-api", issuer: "api.midominio.com" });
    next();
  } catch {
    res.status(401).json({ error: "Token inválido o expirado" });
  }
};

app.get("/perfil", verificarJwt, (req, res) => {
  res.json({ usuario: req.usuario.sub });
});

app.use((err, req, res, next) => {
  console.error(`[${err.type ?? "error"}]`, err.message);
  if (err.message === "CORS no permitido") return res.status(403).json({ error: err.message });
  res.status(500).json({ error: "Error interno" });
});

export default app;