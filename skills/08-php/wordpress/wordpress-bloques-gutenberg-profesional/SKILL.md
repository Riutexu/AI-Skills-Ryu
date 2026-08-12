---
name: wordpress-bloques-gutenberg-profesional
description: Block Editor (Gutenberg) · nivel Profesional · WordPress: temas y plugins. Crear bloques nativos y patterns: la forma moderna de construir contenido reutilizable. Objetivo del nivel: bloques dinámicos de producto
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "bloques-gutenberg"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Block Editor (Gutenberg) — Profesional

## Qué hace este skill

Crear bloques nativos y patterns: la forma moderna de construir contenido reutilizable. En este nivel se entrega: **bloques dinámicos de producto**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Block Editor (Gutenberg)** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear bloques dinámicos con render_callback y datos de BD
2. Diseñar la arquitectura de bloques del sitio (alcance y contratos)
3. Añadir variaciones y la experiencia de edición (UX del editor)
4. Integrar con ACF fields en el editor de bloques

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | bloques dinámicos de producto | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Crear bloques dinámicos con render_callback y datos de BD · Diseñar la arquitectura de bloques del sitio (alcance y contratos) · Añadir variaciones y la experiencia de edición (UX del editor) · Integrar con ACF fields en el editor de bloques | lista | sí | 3-4 pasos |
| $criterios_clave | Los bloques dinámicos muestran contenido de BD y se cachean bien · La arquitectura de bloques está documentada para el equipo | lista | sí | calidad verificable |
| $prompt_guia | Diseña la arquitectura de bloques dinámicos de mi sitio con datos de BD y experiencia de edición coherente | texto | no | "Block Editor (Gutenberg)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los bloques dinámicos muestran contenido de BD y se cachean bien
- [ ] La arquitectura de bloques está documentada para el equipo

## Ejemplos de prompts

- "Diseña la arquitectura de bloques dinámicos de mi sitio con datos de BD y experiencia de edición coherente"
- "Aplica Block Editor (Gutenberg) (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza Los bloques dinámicos muestran contenido de BD y se cachean bien"
- "Revisa mi wordpress y dime qué pasos de Block Editor (Gutenberg) me faltan en este nivel"