---
name: php-seguridad-headers-seguridad-profesional
description: Cabeceras de seguridad · nivel Profesional · Seguridad web en PHP. Headers que defienden: CSP, HSTS, X-Frame, nosniff y la revisión periódica. Objetivo del nivel: gestión continua de headers
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "headers-seguridad"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Cabeceras de seguridad — Profesional

## Qué hace este skill

Headers que defienden: CSP, HSTS, X-Frame, nosniff y la revisión periódica. En este nivel se entrega: **gestión continua de headers**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Cabeceras de seguridad** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Definir el estándar de headers de la plataforma y su ciclo de vida
2. Automatizar la verificación de headers en CI
3. Gestionar excepciones y regresiones documentadas
4. Auditar anualmente contra el OWASP Cheat Sheet

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | gestión continua de headers | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Definir el estándar de headers de la plataforma y su ciclo de vida · Automatizar la verificación de headers en CI · Gestionar excepciones y regresiones documentadas · Auditar anualmente contra el OWASP Cheat Sheet | lista | sí | 3-4 pasos |
| $criterios_clave | El CI verifica headers en cada release · La auditoría anual tiene plan de remediación | lista | sí | calidad verificable |
| $prompt_guia | Gestiona la postura de headers de mi plataforma: estándar, CI y auditoría anual | texto | no | "Cabeceras de seguridad" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CI verifica headers en cada release
- [ ] La auditoría anual tiene plan de remediación

## Ejemplos de prompts

- "Gestiona la postura de headers de mi plataforma: estándar, CI y auditoría anual"
- "Aplica Cabeceras de seguridad (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza El CI verifica headers en cada release"
- "Revisa mi php-seguridad y dime qué pasos de Cabeceras de seguridad me faltan en este nivel"