---
name: mvc-propio-peticion-respuesta-avanzado
description: Request y Response · nivel Avanzado · Framework MVC propio. Encapsular HTTP: objetos Request y Response inmutables que el framework consume y produce. Objetivo del nivel: HTTP completo y streaming
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "peticion-respuesta"
  nivel: avanzado
  stack: "PHP 8.3, Composer, PDO, PHPUnit, Nginx"
---

# Request y Response — Avanzado

## Qué hace este skill

Encapsular HTTP: objetos Request y Response inmutables que el framework consume y produce. En este nivel se entrega: **HTTP completo y streaming**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Framework MVC propio** (PHP 8.3, Composer, PDO, PHPUnit, Nginx) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Request y Response** dentro de Framework MVC propio.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Composer, PDO, PHPUnit, Nginx**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Soportar JSON, archivos subidos y multipart (PSR-7-ish)
2. Manejar cabeceras CORS y condiciones de caché
3. Enviar respuestas con streams y rangos
4. Normalizar errores a estados HTTP del dominio

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | HTTP completo y streaming | texto | sí | resultado medible |
| $stack | Framework MVC propio | texto | sí | 08-php/mvc-propio |
| $tecnologias | PHP 8.3, Composer, PDO, PHPUnit, Nginx | texto | sí | PHP 8.3, Composer, PDO, PHPUnit, Nginx |
| $tareas_clave | Soportar JSON, archivos subidos y multipart (PSR-7-ish) · Manejar cabeceras CORS y condiciones de caché · Enviar respuestas con streams y rangos · Normalizar errores a estados HTTP del dominio | lista | sí | 3-4 pasos |
| $criterios_clave | Las respuestas JSON/streams se envían con cabeceras correctas · CORS configurable funciona con frontend externo | lista | sí | calidad verificable |
| $prompt_guia | Completa mi Request/Response: JSON, subidas multipart, CORS y respuestas en streaming | texto | no | "Request y Response" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las respuestas JSON/streams se envían con cabeceras correctas
- [ ] CORS configurable funciona con frontend externo

## Ejemplos de prompts

- "Completa mi Request/Response: JSON, subidas multipart, CORS y respuestas en streaming"
- "Aplica Request y Response (nivel avanzado) a mi trabajo actual con Framework MVC propio: prioriza Las respuestas JSON/streams se envían con cabeceras correctas"
- "Revisa mi mvc-propio y dime qué pasos de Request y Response me faltan en este nivel"