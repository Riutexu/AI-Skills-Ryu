---
name: php-seguridad-sanitizacion-entradas-basico
description: Saneamiento de entradas · nivel Básico · Seguridad web en PHP. Tratar toda entrada como hostil: filtrar, validar y sanear sin romper la funcionalidad. Objetivo del nivel: nunca confiar en la entrada
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "sanitizacion-entradas"
  nivel: basico
  stack: "PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF"
---

# Saneamiento de entradas — Básico

## Qué hace este skill

Tratar toda entrada como hostil: filtrar, validar y sanear sin romper la funcionalidad. En este nivel se entrega: **nunca confiar en la entrada**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Seguridad web en PHP** (PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Saneamiento de entradas** dentro de Seguridad web en PHP.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Identificar todas las fuentes de entrada (GET, POST, headers, files)
2. Aplicar filtros básicos (filter_var, trim, casts)
3. Validar antes de usar en SQL/HTML/shell

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | nunca confiar en la entrada | texto | sí | resultado medible |
| $stack | Seguridad web en PHP | texto | sí | 08-php/php-seguridad |
| $tecnologias | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF | texto | sí | PHP 8.3, OWASP Top 10, Argon2ID, CSP, CSRF |
| $tareas_clave | Identificar todas las fuentes de entrada (GET, POST, headers, files) · Aplicar filtros básicos (filter_var, trim, casts) · Validar antes de usar en SQL/HTML/shell | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna entrada llega sin validación a operaciones sensibles · Los casos de entrada maliciosa simple se rechazan | lista | sí | calidad verificable |
| $prompt_guia | Audita las entradas de mi app y aplica validación y saneamiento básico en cada fuente | texto | no | "Saneamiento de entradas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna entrada llega sin validación a operaciones sensibles
- [ ] Los casos de entrada maliciosa simple se rechazan

## Ejemplos de prompts

- "Audita las entradas de mi app y aplica validación y saneamiento básico en cada fuente"
- "Aplica Saneamiento de entradas (nivel basico) a mi trabajo actual con Seguridad web en PHP: prioriza Ninguna entrada llega sin validación a operaciones sensibles"
- "Revisa mi php-seguridad y dime qué pasos de Saneamiento de entradas me faltan en este nivel"