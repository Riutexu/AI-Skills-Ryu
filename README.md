# AI Skills Ryu

[![Version](https://img.shields.io/badge/Version-1.0.0-b19cd9?style=flat-square)](https://github.com/Riutexu/AI-Skills-Ryu)
[![Skills](https://img.shields.io/badge/Skills-70-00d4ff?style=flat-square)](https://github.com/Riutexu/AI-Skills-Ryu)
[![Temas](https://img.shields.io/badge/Temas-23-ff6b9d?style=flat-square)](https://github.com/Riutexu/AI-Skills-Ryu)
[![Niveles](https://img.shields.io/badge/Niveles-Basico_%C2%B7_Avanzado_%C2%B7_Profesional-3ddc84?style=flat-square)](https://github.com/Riutexu/AI-Skills-Ryu)
[![Compatible](https://img.shields.io/badge/Claude_Code-Gemini_Antigravity-opencode-ff9e64?style=flat-square)](https://github.com/Riutexu/AI-Skills-Ryu)
[![Licencia](https://img.shields.io/badge/Licencia-MIT-7ecb8e?style=flat-square)](LICENSE)

[![Estrellas](https://img.shields.io/github/stars/Riutexu/AI-Skills-Ryu?style=for-the-badge&label=ESTRELLAS&color=b19cd9&logo=github&logoColor=white)](https://github.com/Riutexu/AI-Skills-Ryu/stargazers)
[![Actualizado](https://img.shields.io/github/last-commit/Riutexu/AI-Skills-Ryu?style=for-the-badge&label=ACTUALIZADO&color=ff9e64&logo=git&logoColor=white)](https://github.com/Riutexu/AI-Skills-Ryu)

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=600&size=20&duration=3200&pause=700&color=b19cd9&center=true&vCenter=true&width=720&lines=%F0%9F%A7%A0+70+skills+para+tus+agentes+de+IA;%E2%9A%A1+Tus+agentes+programan+contigo%2C+no+por+encima+de+ti;%F0%9F%92%B0+Econom%C3%ADa+de+tokens+con+carga+por+demanda;%F0%9F%8E%AF+Niveles+%3A+b%C3%A1sico%2C+avanzado+y+profesional;%F0%9F%8F%86+Resultados+defendibles+ante+un+jurado" alt="Typing SVG: AI Skills Ryu" />

**El sistema de skills que enseña a los agentes de IA a programar contigo, no por encima de ti.**

Un ecosistema de 70 skills que lleva a cualquier agente de IA (Claude Code, Gemini CLI, Google Antigravity, opencode, Cursor, Copilot) a trabajar con **economía de tokens**, **profundidad calibrada a tu nivel** y un resultado final **defendible ante un jurado humano**.

---

## 🧠 LA CIENCIA DEL PROYECTO 🧠

Este repositorio condensa meses de estudio sobre cómo hacer que una IA programe mejor, gaste menos tokens y produzca trabajo que parezca humano. Cuatro pilares:

**1 · Calibración de experiencia (la pieza clave)**
Toda sesión comienza con una pregunta obligatoria que fija el registro del trabajo:

> **"Para hacer el trabajo más creíble y más humano a nivel personal: ¿usted considera que es bueno programando, o está aplicando conocimientos que todavía está aprendiendo en este momento?"**

Un jurado no juzga la calidad absoluta del código: juzga su **coherencia con el autor**. Esta pregunta elimina el mayor error de la IA generativa: entregar código de arquitecto a un aprendiz o tutoriales a un senior. El resultado siempre encaja con quien lo firma.

**2 · Progressive disclosure (economía de tokens)**
Las skills no se cargan al azar: el agente ve solo ~100 tokens de metadatos (nombre + descripción) y carga las instrucciones completas **solo cuando la tarea coincide**. Leer toda la biblioteca costaría decenas de miles de tokens; este diseño lo reduce a lo indispensable por tarea.

**3 · Niveles por skill (básico · avanzado · profesional)**
Cada tema existe en 3 profundidades independientes. El agente elige el nivel según la calibración, no toca código de niveles superiores y gasta exactamente la complejidad que el usuario puede explicar y mantener.

**4 · Formato universal (portabilidad)**
`SKILL.md` + `AGENTS.md` es el estándar que comparten Claude Code, Gemini CLI, Google Antigravity, opencode y otros agentes. El mismo repo entrena a todos con el mismo contrato: **calibra primero, gasta poco, entrega creíble**.

---

## 🏗️ ARQUITECTURA DEL ECOSISTEMA 🏗️

```
+------------------+      +------------------+      +------------------+
|                  |      |                  |      |                  |
|   Usuario        +----->+   Pregunta       +----->+   Skill          |
|   (cualquier     |      |   obligatoria    |      |   del tema       |
|    nivel)        |      |   de calibración |      |   + nivel        |
|                  |      |                  |      |                  |
+------------------+      +------------------+      +------------------+
        |                        |                        |
        +------------------------+------------------------+
                                |
       +--------------------------------------------------------------+
       |                REGISTRO CALIBRADO DE TRABAJO                 |
       |  Jerga segun nivel  |  Complejidad segun nivel               |
       |  Explicaciones justas  |  Defensa de 3 frases ante jurado    |
       +--------------------------------------------------------------+
                                |
                                v
       +--------------------------------------------------------------+
       |   Trabajo creible, defensible y mantenible por SU autor ⭐   |
       +--------------------------------------------------------------+
```

---

## 🎯 LIBRERÍA DE SKILLS - 23 TEMAS 🎯

Cada tema trae: `README.md` (guía + parámetros por nivel) y 3 skills independientes (`-basico`, `-avanzado`, `-profesional`) con instrucciones, parámetros, checklists, prompts y plantillas de código real.

### 🌐 FRONTEND (8 temas)

| Tema | Básico | Avanzado | Profesional |
|---|---|---|---|
| **landing-pages** | HTML+CSS responsive | Tailwind, SEO, animaciones | Next.js, Core Web Vitals, A/B |
| **web-design** | color, tipografía, grid | design tokens, UX | design systems, dark mode, motion |
| **html5-base-structure** | semántica, forms | ARIA, JSON-LD | Web Components, estándares W3C |
| **css-tailwind** | flexbox, grid, units | variables, @theme | arquitectura CSS, capas, a11y |
| **javascript-moderno** | fundamentos, DOM | ES2024, async, módulos | patrones, workers, streams |
| **typescript** | tipos e interfaces | generics, utility types | tipos condicionales, Zod |
| **react-nextjs** | componentes, state | hooks, SSR/SSG/ISR | RSC, Suspense, testing, edge |
| **three-js** | escena, luces, animate | GLTF, raycasting | shaders, R3F, LOD, WebGPU |

### ⚙️ BACKEND (4 temas)

| Tema | Básico | Avanzado | Profesional |
|---|---|---|---|
| **node-api-rest** | Express CRUD | middlewares, Zod, errores | Fastify, OpenAPI, rate limit |
| **api-design** | verbos, status codes | RESTful, OpenAPI | GraphQL, webhooks, gateway |
| **autenticacion-autorizacion** | bcrypt, sesiones | JWT, OAuth2, RBAC | SSO, TOTP, zero trust |
| **arquitectura-codigo** | carpetas limpias | capas, DTOs | hexagonal, CQRS, monorepos |

### 🗄️ DATOS (3 temas)

| Tema | Básico | Avanzado | Profesional |
|---|---|---|---|
| **database-programming** | SQL CRUD, 3FN | joins, ACID, Prisma | modelado, caching, pooling |
| **sql-postgresql** | queries básicas | CTEs, índices, EXPLAIN | particionado, PL/pgSQL, PITR |
| **orm-migraciones** | Prisma CRUD | relaciones, seeders | zero-downtime, multi-tenant |

### 🔐 SEGURIDAD (1 tema)

**web-cybersecurity**: HTTPS y cabeceras → OWASP Top 10, CSP, JWT seguro → GDPR, Semgrep/CodeQL, zero trust, threat modeling.

### 🛠️ INGENIERÍA (5 temas)

| Tema | Básico | Avanzado | Profesional |
|---|---|---|---|
| **git-control-versiones** | commit, ramas | rebase, PRs, semver | git-flow, hooks, bisect |
| **testing-calidad** | Vitest básico | RTL, mocks | TDD, Playwright, mutation |
| **devops-cicd** | deploy Vercel | GitHub Actions | Docker Compose, canary |
| **performance-web** | Core Web Vitals | code splitting, caché | Lighthouse CI, RUM, edge |
| **observabilidad** | logs útiles | pino, Prometheus | OpenTelemetry, SLOs |

### 🚀 WEB EN PRODUCCIÓN (2 temas)

**seo-tecnico**: metadatos → JSON-LD, sitemap → Lighthouse CI, hreflang, crawl budget.
**accesibilidad-wcag**: contraste, teclado → ARIA, modales → WCAG 2.2 AA, axe CI.

### ⭐ SKILL NÚCLEO (1 tema)

**calibracion-experiencia**: la pregunta obligatoria, rúbrica de 11 niveles, registro ajustado y guía de defensa ante jurado. Se carga SIEMPRE primero.

---

## 🚀 INSTALACIÓN 🚀

**Paso 1** — Clona el repositorio:

```
git clone https://github.com/Riutexu/AI-Skills-Ryu.git
```

**Paso 2** — Instala los skills que quieras (o todos):

```
# Opción A: global (todos tus proyectos) — elige tu agente
xcopy skills\* %USERPROFILE%\.config\opencode\skills\ /E /I     # opencode
xcopy skills\* %USERPROFILE%\.claude\skills\ /E /I              # Claude Code
xcopy skills\* %USERPROFILE%\.agents\skills\ /E /I              # Gemini / Antigravity

# Opción B: proyecto actual
xcopy skills\calibracion-experiencia .opencode\skills\ /E /I
```

**Paso 3** — Copia `AGENTS.md` a la raíz del proyecto donde trabajas (o tu global). Ese archivo garantiza que el agente SIEMPRE calibre antes de programar, en cualquier agente compatible.

**Paso 4** — Abre tu agente y escribe cualquier tarea: "hazme una landing page de un SaaS". El agente primero preguntará la pregunta obligatoria de calibración y ajustará todo el trabajo a tu nivel.

---

## ⚡ EJEMPLO DE SESIÓN ⚡

```
Tú:            "Quiero una web de portfolio con un formulario de contacto"
Agente:        "Para hacer el trabajo más creíble y más humano a nivel personal:
                ¿usted considera que es bueno programando, o está aplicando
                conocimientos que todavía está aprendiendo en este momento?"
Tú:            "Estoy aprendiendo, llevo 2 meses con HTML y CSS"
Agente:        (Carga landing-pages-basico) "Perfecto: trabajaremos con HTML y
                CSS puros, sin librerías. Empiezo por la estructura, te explico
                cada sección y al final repasamos las 3 frases con las que
                podrás defender el trabajo ante quien te lo evalúe."
```

El resultado: código simple y correcto, comentado en tu idioma, sin arquitectura de sobre, 100% explicable por ti.

---

## 🧪 ¿POR QUÉ ES DIFERENTE? 🧪

| Problema de la IA genérica | Solución de AI Skills Ryu |
|---|---|
| Entrega código de nivel uniforme (casi siempre avanzado) | 70 skills calibradas en 3 niveles de profundidad |
| Explica demasiado (gasta tokens) o demasiado poco (no entiendes) | Registro ajustado por calibración honesta |
| Carga instrucciones completas de todo (tokens desperdiciados) | Progressive disclosure: poca metadata + carga por demanda |
| El usuario no puede defender lo que "su agente" hizo | Preparación de defensa en 3 frases antes de entregar |
| Cada agente se configura distinto | Formato universal SKILL.md + AGENTS.md |
| Sin puerta de entrada al nivel del usuario | Pregunta obligatoria innegociable |

---

## 🌲 SKILL TREE - PROGRESIÓN DEL PROYECTO 🌲

**LVL 1 ██████████ 100%** · Núcleo de calibración y biblioteca de 23 temas
**LVL 2 ░░░░░░░░░░ 0%** · Guías de estudio por nivel (roadmaps autoaprendiz → arquitecto)
**LVL 3 ░░░░░░░░░░ 0%** · Evaluadores de nivel automáticos (tests de calibración)
**LVL 4 ░░░░░░░░░░ 0%** · Generador de planes de estudio personalizados por agente

---

## 📁 ESTRUCTURA DEL REPOSITORIO 📁

```
AI-Skills-Ryu/
├── README.md                 ← este manifiesto
├── AGENTS.md                 ← protocolo universal para agentes de IA
├── LICENSE                   ← MIT
├── docs/
│   └── METODOLOGIA.md        ← la ciencia completa del proyecto
└── skills/
    ├── calibracion-experiencia/  ← skill núcleo (SIEMPRE primero)
    ├── 01-frontend/              ← 8 temas
    ├── 02-backend/               ← 4 temas
    ├── 03-datos/                 ← 3 temas
    ├── 04-seguridad/             ← 1 tema
    ├── 05-ingenieria/            ← 5 temas
    └── 06-web-produccion/        ← 2 temas
```

---

## 📜 LICENCIA 📜

MIT · [Riutexu](https://github.com/Riutexu)

*"Quien no arriesga no gana, y yo nunca gano"*

*"Mi IA gasta menos tokens con estos skills que algunos developers que conozco gastan en excusas."* 🧠

[⭐ Dar estrella](https://github.com/Riutexu/AI-Skills-Ryu/stargazers) · [Perfil de Riutexu](https://github.com/Riutexu)