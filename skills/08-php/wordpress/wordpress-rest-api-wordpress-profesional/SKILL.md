---
name: wordpress-rest-api-wordpress-profesional
description: REST API y headless · nivel Profesional · WordPress: temas y plugins. WordPress como API: endpoints propios, autenticación, y sitios headless sin fricción. Objetivo del nivel: headless de producción
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rest-api-wordpress"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# REST API y headless — Profesional

## Qué hace este skill

WordPress como API: endpoints propios, autenticación, y sitios headless sin fricción. En este nivel se entrega: **headless de producción**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **REST API y headless** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar la arquitectura headless (frontend JS + WP como CMS)
2. Authentication con JWT/application passwords para el front
3. Cachear la API (caché de respuestas + object cache)
4. Vigilar rate limits y coherencia del contenido publicado
5. Whitepaper de decisión: headless vs clásico

6. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
7. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | headless de producción | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Diseñar la arquitectura headless (frontend JS + WP como CMS) · Authentication con JWT/application passwords para el front · Cachear la API (caché de respuestas + object cache) · Vigilar rate limits y coherencia del contenido publicado · Whitepaper de decisión: headless vs clásico | lista | sí | 3-4 pasos |
| $criterios_clave | El frontend desatendido se sirve con caché y autenticado · El documento de decisión headless está escrito | lista | sí | calidad verificable |
| $prompt_guia | Diseña la migración headless de mi contenido a WordPress como API con auth JWT y caché | texto | no | "REST API y headless" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El frontend desatendido se sirve con caché y autenticado
- [ ] El documento de decisión headless está escrito

## Ejemplos de prompts

- "Diseña la migración headless de mi contenido a WordPress como API con auth JWT y caché"
- "Aplica REST API y headless (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza El frontend desatendido se sirve con caché y autenticado"
- "Revisa mi wordpress y dime qué pasos de REST API y headless me faltan en este nivel"