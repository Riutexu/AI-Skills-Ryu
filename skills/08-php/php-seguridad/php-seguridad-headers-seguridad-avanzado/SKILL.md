---
name: php-seguridad-headers-seguridad-avanzado
description: Cabeceras de seguridad · nivel Avanzado · Seguridad web en PHP. Headers que defienden: CSP, HSTS, X-Frame, nosniff y la revisión periódica. Objetivo del nivel: CSP y política completa
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "headers-seguridad"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Cabeceras de seguridad — Avanzado

## Qué hace este skill

Headers que defienden: CSP, HSTS, X-Frame, nosniff y la revisión periódica. En este nivel se entrega: **CSP y política completa**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cabeceras de seguridad** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar CSP con directivas útiles (script-src, style-src)
2. Aplicar la política gradualmente (report-only)
3. Configurar Referrer-Policy y Permissions-Policy
4. Manejar excepciones de terceros (analytics)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | CSP y política completa | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Diseñar CSP con directivas útiles (script-src, style-src) · Aplicar la política gradualmente (report-only) · Configurar Referrer-Policy y Permissions-Policy · Manejar excepciones de terceros (analytics) | lista | sí | 3-4 pasos |
| $criterios_clave | El CSP pasa a enforce tras report-only sin romper · Las políticas de referrer y permisos están activas | lista | sí | calidad verificable |
| $prompt_guia | Implementa la política completa de headers con CSP en fases | texto | no | "Cabeceras de seguridad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CSP pasa a enforce tras report-only sin romper
- [ ] Las políticas de referrer y permisos están activas

## Ejemplos de prompts

- "Implementa la política completa de headers con CSP en fases"
- "Aplica Cabeceras de seguridad (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza El CSP pasa a enforce tras report-only sin romper"
- "Revisa mi php-seguridad y dime qué pasos de Cabeceras de seguridad me faltan en este nivel"