---
name: php-seguridad-dependencias-seguras-profesional
description: Dependencias y suministro · nivel Profesional · Seguridad web en PHP. Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. Objetivo del nivel: gestión del suministro
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "dependencias-seguras"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Dependencias y suministro — Profesional

## Qué hace este skill

Cadena de suministro: auditoría de dependencias, pinning y abastecimiento seguro. En este nivel se entrega: **gestión del suministro**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Dependencias y suministro** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer la política de dependencias de la plataforma
2. Automatizar el escaneo en CI (Dependabot/Renovate)
3. Manejar incidentes de supply chain (advisories)
4. Documentar la aprobación de dependencias nuevas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | gestión del suministro | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Establecer la política de dependencias de la plataforma · Automatizar el escaneo en CI (Dependabot/Renovate) · Manejar incidentes de supply chain (advisories) · Documentar la aprobación de dependencias nuevas | lista | sí | 3-4 pasos |
| $criterios_clave | El escaneo automático corre en cada PR · El runbook de advisory está listo y practicado | lista | sí | calidad verificable |
| $prompt_guia | Establece la gestión del suministro de mi plataforma: política, escaneo en CI y runbook de advisories | texto | no | "Dependencias y suministro" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El escaneo automático corre en cada PR
- [ ] El runbook de advisory está listo y practicado

## Ejemplos de prompts

- "Establece la gestión del suministro de mi plataforma: política, escaneo en CI y runbook de advisories"
- "Aplica Dependencias y suministro (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza El escaneo automático corre en cada PR"
- "Revisa mi php-seguridad y dime qué pasos de Dependencias y suministro me faltan en este nivel"