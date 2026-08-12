---
name: php-advanced-correo-notificaciones-profesional
description: Correo y notificaciones · nivel Profesional · PHP avanzado: metaprogramación y sistemas. Emails que llegan: SMTP correcto, plantillas, rebotes y métricas de entrega. Objetivo del nivel: plataforma de notificaciones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "correo-notificaciones"
  nivel: profesional
  stack: "PHP 8.3, Reflection, Attributes, streams, pcntl, phar"
---

# Correo y notificaciones — Profesional

## Qué hace este skill

Emails que llegan: SMTP correcto, plantillas, rebotes y métricas de entrega. En este nivel se entrega: **plataforma de notificaciones**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **PHP avanzado: metaprogramación y sistemas** (PHP 8.3, Reflection, Attributes, streams, pcntl, phar) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Correo y notificaciones** dentro de PHP avanzado: metaprogramación y sistemas.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **PHP 8.3, Reflection, Attributes, streams, pcntl, phar**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el sistema de notificaciones (email, push, in-app)
2. Gestionar rebotes y bounces (feedback loop)
3. Métricas de entrega y apertura (cuando el proveedor permite)
4. Template versioning y previsualización

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | plataforma de notificaciones | texto | sí | resultado medible |
| $stack | PHP avanzado: metaprogramación y sistemas | texto | sí | 08-php/php-advanced |
| $tecnologias | PHP 8.3, Reflection, Attributes, streams, pcntl, phar | texto | sí | PHP 8.3, Reflection, Attributes, streams, pcntl, phar |
| $tareas_clave | Diseñar el sistema de notificaciones (email, push, in-app) · Gestionar rebotes y bounces (feedback loop) · Métricas de entrega y apertura (cuando el proveedor permite) · Template versioning y previsualización | lista | sí | 3-4 pasos |
| $criterios_clave | Los rebotes se procesan y limpian suscriptores · Las métricas de entrega se consultan por campaña | lista | sí | calidad verificable |
| $prompt_guia | Diseña mi sistema de notificaciones multicanal con gestión de rebotes y métricas | texto | no | "Correo y notificaciones" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los rebotes se procesan y limpian suscriptores
- [ ] Las métricas de entrega se consultan por campaña

## Ejemplos de prompts

- "Diseña mi sistema de notificaciones multicanal con gestión de rebotes y métricas"
- "Aplica Correo y notificaciones (nivel profesional) a mi trabajo actual con PHP avanzado: metaprogramación y sistemas: prioriza Los rebotes se procesan y limpian suscriptores"
- "Revisa mi php-advanced y dime qué pasos de Correo y notificaciones me faltan en este nivel"