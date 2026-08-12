---
name: php-seguridad-xss-prevencion-basico
description: XSS y CSP · nivel Básico · Seguridad web en PHP. Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. Objetivo del nivel: escapar salida
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "xss-prevencion"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# XSS y CSP — Básico

## Qué hace este skill

Erradicar XSS: escape por contexto, CSP estricto y políticas de salida. En este nivel se entrega: **escapar salida**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **XSS y CSP** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Escapar toda salida dinámica en HTML
2. Usar htmlspecialchars con flags correctos
3. Probar payloads XSS simples

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | escapar salida | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Escapar toda salida dinámica en HTML · Usar htmlspecialchars con flags correctos · Probar payloads XSS simples | lista | sí | 3-4 pasos |
| $criterios_clave | Las salidas dinámicas están escapadas (revisión) · Los payloads de prueba no ejecutan | lista | sí | calidad verificable |
| $prompt_guia | Escape toda la salida dinámica de mis vistas y prueba con payloads XSS | texto | no | "XSS y CSP" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las salidas dinámicas están escapadas (revisión)
- [ ] Los payloads de prueba no ejecutan

## Ejemplos de prompts

- "Escape toda la salida dinámica de mis vistas y prueba con payloads XSS"
- "Aplica XSS y CSP (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Las salidas dinámicas están escapadas (revisión)"
- "Revisa mi php-seguridad y dime qué pasos de XSS y CSP me faltan en este nivel"