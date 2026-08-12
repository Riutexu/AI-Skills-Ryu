---
name: wordpress-rest-api-wordpress-basico
description: REST API y headless · nivel Básico · WordPress: temas y plugins. WordPress como API: endpoints propios, autenticación, y sitios headless sin fricción. Objetivo del nivel: consumir la REST API
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rest-api-wordpress"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# REST API y headless — Básico

## Qué hace este skill

WordPress como API: endpoints propios, autenticación, y sitios headless sin fricción. En este nivel se entrega: **consumir la REST API**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **REST API y headless** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Explorar la API pública de posts/pages con curl
2. Consumirla desde JS con fetch
3. Entender permisos y formatos de respuesta

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | consumir la REST API | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Explorar la API pública de posts/pages con curl · Consumirla desde JS con fetch · Entender permisos y formatos de respuesta | lista | sí | 3-4 pasos |
| $criterios_clave | Un script JS propio listado contenido vía API · El CORS/permisos están entendidos y explicados | lista | sí | calidad verificable |
| $prompt_guia | Consume la REST API de mi WordPress desde un script JS de ejemplo | texto | no | "REST API y headless" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Un script JS propio listado contenido vía API
- [ ] El CORS/permisos están entendidos y explicados

## Ejemplos de prompts

- "Consume la REST API de mi WordPress desde un script JS de ejemplo"
- "Aplica REST API y headless (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza Un script JS propio listado contenido vía API"
- "Revisa mi wordpress y dime qué pasos de REST API y headless me faltan en este nivel"