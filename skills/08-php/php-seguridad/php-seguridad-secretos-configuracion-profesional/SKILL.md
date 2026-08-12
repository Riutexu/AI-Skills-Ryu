---
name: php-seguridad-secretos-configuracion-profesional
description: Secretos y configuración · nivel Profesional · Seguridad web en PHP. Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. Objetivo del nivel: política de secretos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "secretos-configuracion"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Secretos y configuración — Profesional

## Qué hace este skill

Secretos que nunca se filtran: variables de entorno, gestores y políticas de rotación. En este nivel se entrega: **política de secretos**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Secretos y configuración** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Establecer la política de secretos de la plataforma (ciclo completo)
2. Automatizar la detección de secretos en CI (gitleaks)
3. Planificar la rotación forzosa y respuesta ante fuga
4. Auditar el acceso a secretos periódicamente

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | política de secretos | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Establecer la política de secretos de la plataforma (ciclo completo) · Automatizar la detección de secretos en CI (gitleaks) · Planificar la rotación forzosa y respuesta ante fuga · Auditar el acceso a secretos periódicamente | lista | sí | 3-4 pasos |
| $criterios_clave | gitleaks bloquea fugas en PRs · La respuesta ante fuga está escrita y practicada | lista | sí | calidad verificable |
| $prompt_guia | Establece la política de secretos de mi plataforma: gitleaks en CI, rotación forzosa y respuesta ante fuga | texto | no | "Secretos y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] gitleaks bloquea fugas en PRs
- [ ] La respuesta ante fuga está escrita y practicada

## Ejemplos de prompts

- "Establece la política de secretos de mi plataforma: gitleaks en CI, rotación forzosa y respuesta ante fuga"
- "Aplica Secretos y configuración (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza gitleaks bloquea fugas en PRs"
- "Revisa mi php-seguridad y dime qué pasos de Secretos y configuración me faltan en este nivel"