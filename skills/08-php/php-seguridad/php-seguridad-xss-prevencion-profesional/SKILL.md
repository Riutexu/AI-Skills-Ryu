---
name: php-seguridad-xss-prevencion-profesional
description: XSS y CSP · nivel Profesional · Seguridad web en PHP. Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. Objetivo del nivel: XSS como riesgo gestionado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "xss-prevencion"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# XSS y CSP — Profesional

## Qué hace este skill

Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. En este nivel se entrega: **XSS como riesgo gestionado**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **XSS y CSP** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la política de salida del framework (escapes por contexto)
2. Probar XSS con herramientas (DAST, fuzzing) en CI
3. Mitigar DOM-XSS en el frontend (contexto JS)
4. Documentar la política CSP y sus revisiones

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | XSS como riesgo gestionado | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Diseñar la política de salida del framework (escapes por contexto) · Probar XSS con herramientas (DAST, fuzzing) en CI · Mitigar DOM-XSS en el frontend (contexto JS) · Documentar la política CSP y sus revisiones | lista | sí | 3-4 pasos |
| $criterios_clave | El DAST no encuentra XSS reflejado en endpoints críticos · La política de salida está documentada y usada por el equipo | lista | sí | calidad verificable |
| $prompt_guia | Gestiona el riesgo XSS de mi plataforma: política de salida, DAST en CI y mitigación DOM-XSS | texto | no | "XSS y CSP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El DAST no encuentra XSS reflejado en endpoints críticos
- [ ] La política de salida está documentada y usada por el equipo

## Ejemplos de prompts

- "Gestiona el riesgo XSS de mi plataforma: política de salida, DAST en CI y mitigación DOM-XSS"
- "Aplica XSS y CSP (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza El DAST no encuentra XSS reflejado en endpoints críticos"
- "Revisa mi php-seguridad y dime qué pasos de XSS y CSP me faltan en este nivel"