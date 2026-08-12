---
name: php-seguridad-sql-injection-profesional
description: Inyección SQL · nivel Profesional · Seguridad web en PHP. Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. Objetivo del nivel: postura anti-SQLi
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sql-injection"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Inyección SQL — Profesional

## Qué hace este skill

Erradicar SQLi: prepared statements, escapes y defensa del acceso a datos. En este nivel se entrega: **postura anti-SQLi**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Inyección SQL** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Centralizar el acceso a datos en repositorios auditables
2. Realizar pruebas de SQLi automatizadas (DAST básico)
3. Monitorizar queries anómalas en producción
4. Documentar la política de consultas dinámicas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | postura anti-SQLi | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Centralizar el acceso a datos en repositorios auditables · Realizar pruebas de SQLi automatizadas (DAST básico) · Monitorizar queries anómalas en producción · Documentar la política de consultas dinámicas | lista | sí | 3-4 pasos |
| $criterios_clave | El DAST no encuentra SQLi en endpoints críticos · La monitorización detecta queries anómalas | lista | sí | calidad verificable |
| $prompt_guia | Establece la postura anti-SQLi de mi plataforma: repositorios auditables, DAST y monitorización | texto | no | "Inyección SQL" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El DAST no encuentra SQLi en endpoints críticos
- [ ] La monitorización detecta queries anómalas

## Ejemplos de prompts

- "Establece la postura anti-SQLi de mi plataforma: repositorios auditables, DAST y monitorización"
- "Aplica Inyección SQL (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza El DAST no encuentra SQLi en endpoints críticos"
- "Revisa mi php-seguridad y dime qué pasos de Inyección SQL me faltan en este nivel"