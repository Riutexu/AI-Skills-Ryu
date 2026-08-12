---
name: php-advanced-correo-notificaciones-avanzado
description: Correo y notificaciones · nivel Avanzado · PHP avanzado: metaprogramación y sistemas. Emails que llegan: SMTP correcto, plantillas, rebotes y métricas de entrega. Objetivo del nivel: plantillas y entregabilidad
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "correo-notificaciones"
  nivel: avanzado
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Correo y notificaciones — Avanzado

## Qué hace este skill

Emails que llegan: SMTP correcto, plantillas, rebotes y métricas de entrega. En este nivel se entrega: **plantillas y entregabilidad**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Correo y notificaciones** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear plantillas con layouts y variables
2. Manejar adjuntos y embebidos
3. Evitar spam (SPF/DKIM desde el proveedor) y revisar headers
4. Encolar envíos para no bloquear la request

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | plantillas y entregabilidad | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Crear plantillas con layouts y variables · Manejar adjuntos y embebidos · Evitar spam (SPF/DKIM desde el proveedor) y revisar headers · Encolar envíos para no bloquear la request | lista | sí | 3-4 pasos |
| $criterios_clave | Las plantillas se reutilizan con layouts · Los envíos van por cola y no bloquean | lista | sí | calidad verificable |
| $prompt_guia | Mejora mi envío de correos: plantillas con layouts, adjuntos y cola de envío | texto | no | "Correo y notificaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Las plantillas se reutilizan con layouts
- [ ] Los envíos van por cola y no bloquean

## Ejemplos de prompts

- "Mejora mi envío de correos: plantillas con layouts, adjuntos y cola de envío"
- "Aplica Correo y notificaciones (nivel avanzado) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Las plantillas se reutilizan con layouts"
- "Revisa mi php-advanced y dime qué pasos de Correo y notificaciones me faltan en este nivel"