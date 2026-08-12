---
name: mvc-propio-logueo-errores-framework-basico
description: Logging y errores del framework · nivel Básico · Framework MVC propio. El framework que informa: manejo central de excepciones, logging estructurado y errores bonitos. Objetivo del nivel: errors centralizados
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "logueo-errores-framework"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Logging y errores del framework — Básico

## Qué hace este skill

El framework que informa: manejo central de excepciones, logging estructurado y errores bonitos. En este nivel se entrega: **errors centralizados**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Logging y errores del framework** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Registrar un handler central de excepciones
2. Devolver páginas 404/500 amigables
3. Loguear errores con fecha y contexto mínimo

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | errors centralizados | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Registrar un handler central de excepciones · Devolver páginas 404/500 amigables · Loguear errores con fecha y contexto mínimo | lista | sí | 3-4 pasos |
| $criterios_clave | Ninguna excepción llega cruda al navegador · El log captura la pila con contexto | lista | sí | calidad verificable |
| $prompt_guia | Centraliza el manejo de errores de mi framework con páginas de error y logging | texto | no | "Logging y errores del framework" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Ninguna excepción llega cruda al navegador
- [ ] El log captura la pila con contexto

## Ejemplos de prompts

- "Centraliza el manejo de errores de mi framework con páginas de error y logging"
- "Aplica Logging y errores del framework (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza Ninguna excepción llega cruda al navegador"
- "Revisa mi mvc-propio y dime qué pasos de Logging y errores del framework me faltan en este nivel"