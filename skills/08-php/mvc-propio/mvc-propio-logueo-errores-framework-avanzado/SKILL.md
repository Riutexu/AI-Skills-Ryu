---
name: mvc-propio-logueo-errores-framework-avanzado
description: Logging y errores del framework · nivel Avanzado · Framework MVC propio. El framework que informa: manejo central de excepciones, logging estructurado y errores bonitos. Objetivo del nivel: logging estructurado
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "logueo-errores-framework"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Logging y errores del framework — Avanzado

## Qué hace este skill

El framework que informa: manejo central de excepciones, logging estructurado y errores bonitos. En este nivel se entrega: **logging estructurado**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging y errores del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Implementar un logger con niveles y contexto estructurado (JSON)
2. Registrar request ids en todo el flujo
3. Separar logs por canal (app, http, bd)
4. Rotar y conservar logs con retención

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | logging estructurado | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Implementar un logger con niveles y contexto estructurado (JSON) · Registrar request ids en todo el flujo · Separar logs por canal (app, http, bd) · Rotar y conservar logs con retención | lista | sí | 3-4 pasos |
| $criterios_clave | Los logs son parseables (JSON) y con request id · La retención de logs está configurada | lista | sí | calidad verificable |
| $prompt_guia | Implementa logging estructurado con request ids y canales en mi framework | texto | no | "Logging y errores del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los logs son parseables (JSON) y con request id
- [ ] La retención de logs está configurada

## Ejemplos de prompts

- "Implementa logging estructurado con request ids y canales en mi framework"
- "Aplica Logging y errores del framework (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Los logs son parseables (JSON) y con request id"
- "Revisa mi mvc-propio y dime qué pasos de Logging y errores del framework me faltan en este nivel"