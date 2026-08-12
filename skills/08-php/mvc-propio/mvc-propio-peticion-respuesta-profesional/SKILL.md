---
name: mvc-propio-peticion-respuesta-profesional
description: Request y Response · nivel Profesional · Framework MVC propio. Encapsular HTTP: objetos Request y Response inmutables que el framework consume y produce. Objetivo del nivel: PSR-7 y middleware http
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "peticion-respuesta"
  nivel: profesional
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Request y Response — Profesional

## Qué hace este skill

Encapsular HTTP: objetos Request y Response inmutables que el framework consume y produce. En este nivel se entrega: **PSR-7 y middleware http**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Request y Response** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Adaptar el diseño a interfaces PSR-7 (ServerRequestInterface)
2. Montar el procesamiento HTTP como pipeline de middleware
3. Controlar el ciclo de vida (terminación, logs, cleanup)
4. Compatibilidad con librerías del ecosistema (PSR-15)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | PSR-7 y middleware http | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Adaptar el diseño a interfaces PSR-7 (ServerRequestInterface) · Montar el procesamiento HTTP como pipeline de middleware · Controlar el ciclo de vida (terminación, logs, cleanup) · Compatibilidad con librerías del ecosistema (PSR-15) | lista | sí | 3-4 pasos |
| $criterios_clave | El framework pasa un test básico de compatibilidad PSR-7 · El pipeline de middlewares se documenta y extiende fácilmente | lista | sí | calidad verificable |
| $prompt_guia | Adapta mi framework a PSR-7/PSR-15 con pipeline de middlewares y documenta el ciclo de vida | texto | no | "Request y Response" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El framework pasa un test básico de compatibilidad PSR-7
- [ ] El pipeline de middlewares se documenta y extiende fácilmente

## Ejemplos de prompts

- "Adapta mi framework a PSR-7/PSR-15 con pipeline de middlewares y documenta el ciclo de vida"
- "Aplica Request y Response (nivel profesional) a mi trabajo actual con Framework MVC propio: prioriza El framework pasa un test básico de compatibilidad PSR-7"
- "Revisa mi mvc-propio y dime qué pasos de Request y Response me faltan en este nivel"