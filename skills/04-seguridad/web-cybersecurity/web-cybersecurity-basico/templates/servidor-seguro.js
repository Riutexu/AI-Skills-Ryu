import express from "express";
import helmet from "helmet";
import session from "express-session";
import bcrypt from "bcrypt";
import crypto from "node:crypto";

const app = express();

app.use(helmet());
app.use(express.json({ limit: "100kb" }));
app.use(express.urlencoded({ extended: false }));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", maxAge: 1000 * 60 * 60 * 24 },
  })
);

const USUARIOS = new Map();

function tokenCsrf(req, res, next) {
  if (req.method === "GET") {
    req.session.csrf = req.session.csrf ?? crypto.randomBytes(24).toString("hex");
    res.locals.csrf = req.session.csrf;
  } else {
    const propuesto = (req.body && req.body._csrf) || req.headers["x-csrf-token"];
    if (!propuesto || propuesto !== req.session.csrf) {
      return res.status(403).json({ error: "CSRF inválido" });
    }
  }
  next();
}

app.post("/registro", tokenCsrf, async (req, res) => {
  const { email, password } = req.body;
  if (!email || typeof email !== "string" || email.length > 254) {
    return res.status(400).json({ error: "Email inválido" });
  }
  if (!password || password.length < 8 || password.length > 72) {
    return res.status(400).json({ error: "Password 8-72 caracteres" });
  }
  if (USUARIOS.has(email)) {
    return res.status(409).json({ error: "Ya existe" });
  }
  const hash = await bcrypt.hash(password, 12);
  USUARIOS.set(email, hash);
  res.status(201).json({ ok: true });
});

app.post("/login", tokenCsrf, async (req, res) => {
  const { email, password } = req.body ?? {};
  const hash = USUARIOS.get(email);
  if (!hash || !(await bcrypt.compare(String(password ?? ""), hash))) {
    return res.status(401).json({ error: "Credenciales inválidas" });
  }
  req.session.user = email;
  res.json({ ok: true });
});

app.use((err, req, res, next) => {
  console.error(`[500] ${req.method} ${req.path}`, err.message);
  if (err.type === "entity.too.large") return res.status(413).json({ error: "Body demasiado grande" });
  res.status(500).json({ error: "Error interno" });
});

export default app;