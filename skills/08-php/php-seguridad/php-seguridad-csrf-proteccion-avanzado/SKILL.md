---
name: php-seguridad-csrf-proteccion-avanzado
description: CSRF y abuso de sesiones · nivel Avanzado · Seguridad web en PHP. Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. Objetivo del nivel: defensa de mutaciones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "csrf-proteccion"
  nivel: avanzado
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# CSRF y abuso de sesiones — Avanzado

## Qué hace este skill

Proteger las acciones del usuario: tokens CSRF, SameSite y verificaciones de origen. En este nivel se entrega: **defensa de mutaciones**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **CSRF y abuso de sesiones** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Aplicar tokens en fetch/API (custom header + token)
2. Configurar SameSite=strict/lax con criterio
3. Verificar Origin/Referer como segunda capa
4. Proteger endpoints JSON de CSRF

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | defensa de mutaciones | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Aplicar tokens en fetch/API (custom header + token) · Configurar SameSite=strict/lax con criterio · Verificar Origin/Referer como segunda capa · Proteger endpoints JSON de CSRF | lista | sí | 3-4 pasos |
| $criterios_clave | Las llamadas fetch envían token verificable · SameSite está configurado por contexto | lista | sí | calidad verificable |
| $prompt_guia | Protege todas las mutaciones de mi app: tokens en fetch, SameSite y verificación de origen | texto | no | "CSRF y abuso de sesiones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las llamadas fetch envían token verificable
- [ ] SameSite está configurado por contexto

## Ejemplos de prompts

- "Protege todas las mutaciones de mi app: tokens en fetch, SameSite y verificación de origen"
- "Aplica CSRF y abuso de sesiones (nivel avanzado) a mi trabajo actual con Seguridad web en PHP: prioriza Las llamadas fetch envían token verificable"
- "Revisa mi php-seguridad y dime qué pasos de CSRF y abuso de sesiones me faltan en este nivel"