---
name: php-seguridad-csrf-proteccion-profesional
description: CSRF y abuso de sesiones · nivel Profesional · Seguridad web en PHP. Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. Objetivo del nivel: anti-abuso de sesiones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "csrf-proteccion"
  nivel: profesional
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# CSRF y abuso de sesiones — Profesional

## Qué hace este skill

Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. En este nivel se entrega: **anti-abuso de sesiones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSRF y abuso de sesiones** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la política CSRF del framework (doble cookie o token por acción)
2. Proteger contra login CSRF y acciones sensibles (pago, email)
3. Auditar mutaciones sin protección en todo el código
4. Documentar excepciones legítimas (webhooks)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | anti-abuso de sesiones | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Diseñar la política CSRF del framework (doble cookie o token por acción) · Proteger contra login CSRF y acciones sensibles (pago, email) · Auditar mutaciones sin protección en todo el código · Documentar excepciones legítimas (webhooks) | lista | sí | 3-4 pasos |
| $criterios_clave | Las acciones sensibles tienen protección extra verificada · La auditoría no encuentra mutaciones desprotegidas | lista | sí | calidad verificable |
| $prompt_guia | Diseña la política CSRF completa de mi plataforma con auditoría de mutaciones | texto | no | "CSRF y abuso de sesiones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las acciones sensibles tienen protección extra verificada
- [ ] La auditoría no encuentra mutaciones desprotegidas

## Ejemplos de prompts

- "Diseña la política CSRF completa de mi plataforma con auditoría de mutaciones"
- "Aplica CSRF y abuso de sesiones (nivel profesional) a mi trabajo actual con Seguridad web en PHP: prioriza Las acciones sensibles tienen protección extra verificada"
- "Revisa mi php-seguridad y dime qué pasos de CSRF y abuso de sesiones me faltan en este nivel"