---
name: mvc-propio-middleware-cadena-avanzado
description: Middleware y pipelines · nivel Avanzado · Framework MVC propio. Petición procesada por capas: autenticación, logging, CSRF y más como piezas intercambiables. Objetivo del nivel: cadena con contexto y respuesta
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "middleware-cadena"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Middleware y pipelines — Avanzado

## Qué hace este skill

Petición procesada por capas: autenticación, logging, CSRF y más como piezas intercambiables. En este nivel se entrega: **cadena con contexto y respuesta**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Middleware y pipelines** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la cadena como pipeline (cola de middlewares)
2. Pasar contexto (request, estado) entre middlewares
3. Implementar CSRF y rate limiting como middlewares
4. Detener la cadena con respuestas tempranas (401, 429)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | cadena con contexto y respuesta | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Diseñar la cadena como pipeline (cola de middlewares) · Pasar contexto (request, estado) entre middlewares · Implementar CSRF y rate limiting como middlewares · Detener la cadena con respuestas tempranas (401, 429) | lista | sí | 3-4 pasos |
| $criterios_clave | CSRF y rate limit funcionan como middlewares independientes · Un middleware puede cortocircuitar con código y mensaje | lista | sí | calidad verificable |
| $prompt_guia | Diseña el pipeline de middlewares de mi app: CSRF, rate limiting y corte temprano con contexto | texto | no | "Middleware y pipelines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] CSRF y rate limit funcionan como middlewares independientes
- [ ] Un middleware puede cortocircuitar con código y mensaje

## Ejemplos de prompts

- "Diseña el pipeline de middlewares de mi app: CSRF, rate limiting y corte temprano con contexto"
- "Aplica Middleware y pipelines (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza CSRF y rate limit funcionan como middlewares independientes"
- "Revisa mi mvc-propio y dime qué pasos de Middleware y pipelines me faltan en este nivel"