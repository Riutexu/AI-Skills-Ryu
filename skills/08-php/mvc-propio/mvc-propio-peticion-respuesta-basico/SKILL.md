---
name: mvc-propio-peticion-respuesta-basico
description: Request y Response · nivel Básico · Framework MVC propio. Encapsular HTTP: objetos Request y Response inmutables que el framework consume y produce. Objetivo del nivel: objetos Request/Response simples
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "peticion-respuesta"
  nivel: basico
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Request y Response — Básico

## Qué hace este skill

Encapsular HTTP: objetos Request y Response inmutables que el framework consume y produce. En este nivel se entrega: **objetos Request/Response simples**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Request y Response** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear clases Request con métodos, headers y body
2. Crear Response con status y headers
3. Enviar la respuesta al navegador desde el front controller

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | objetos Request/Response simples | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Crear clases Request con métodos, headers y body · Crear Response con status y headers · Enviar la respuesta al navegador desde el front controller | lista | sí | 3-4 pasos |
| $criterios_clave | El framework solo manipula objetos, no superglobals dispersas · Las respuestas de error (404/500) son coherentes | lista | sí | calidad verificable |
| $prompt_guia | Encapsula $_GET/$_POST en una clase Request y las respuestas en Response en mi mini-framework | texto | no | "Request y Response" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El framework solo manipula objetos, no superglobals dispersas
- [ ] Las respuestas de error (404/500) son coherentes

## Ejemplos de prompts

- "Encapsula $_GET/$_POST en una clase Request y las respuestas en Response en mi mini-framework"
- "Aplica Request y Response (nivel basico) a mi trabajo actual con Framework MVC propio: prioriza El framework solo manipula objetos, no superglobals dispersas"
- "Revisa mi mvc-propio y dime qué pasos de Request y Response me faltan en este nivel"