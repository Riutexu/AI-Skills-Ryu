---
name: mvc-propio-middleware-cadena-basico
description: Middleware y pipelines · nivel Básico · Framework MVC propio. Petición procesada por capas: autenticación, logging, CSRF y más como piezas intercambiables. Objetivo del nivel: middleware como función envolvente
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "middleware-cadena"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Middleware y pipelines — Básico

## Qué hace este skill

Petición procesada por capas: autenticación, logging, CSRF y más como piezas intercambiables. En este nivel se entrega: **middleware como función envolvente**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Middleware y pipelines** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un middleware simple (logging de request)
2. Aplicarlo antes/después del controlador
3. Añadir un middleware de verificación de sesión

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | middleware como función envolvente | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Crear un middleware simple (logging de request) · Aplicarlo antes/después del controlador · Añadir un middleware de verificación de sesión | lista | sí | 3-4 pasos |
| $criterios_clave | La orden de ejecución de middlewares es predecible y probada · El middleware de sesión bloquea sin auth | lista | sí | calidad verificable |
| $prompt_guia | Implementa middlewares de logging y sesión en mi framework con orden predecible | texto | no | "Middleware y pipelines" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La orden de ejecución de middlewares es predecible y probada
- [ ] El middleware de sesión bloquea sin auth

## Ejemplos de prompts

- "Implementa middlewares de logging y sesión en mi framework con orden predecible"
- "Aplica Middleware y pipelines (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza La orden de ejecución de middlewares es predecible y probada"
- "Revisa mi mvc-propio y dime qué pasos de Middleware y pipelines me faltan en este nivel"