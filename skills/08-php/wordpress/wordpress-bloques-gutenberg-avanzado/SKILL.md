---
name: wordpress-bloques-gutenberg-avanzado
description: Block Editor (Gutenberg) · nivel Avanzado · WordPress: temas y plugins. Crear bloques nativos y patterns: la forma moderna de construir contenido reutilizable. Objetivo del nivel: bloques custom estáticos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "bloques-gutenberg"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Block Editor (Gutenberg) — Avanzado

## Qué hace este skill

Crear bloques nativos y patterns: la forma moderna de construir contenido reutilizable. En este nivel se entrega: **bloques custom estáticos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Block Editor (Gutenberg)** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Crear un bloque custom con block.json y render callback
2. Usar supports y attributes con InspectorControls
3. Encolar estilos solo cuando el bloque se usa
4. Registrar variaciones y transforms

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | bloques custom estáticos | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Crear un bloque custom con block.json y render callback · Usar supports y attributes con InspectorControls · Encolar estilos solo cuando el bloque se usa · Registrar variaciones y transforms | lista | sí | 3-4 pasos |
| $criterios_clave | El bloque custom renderiza con datos de attributes · El CSS del bloque solo carga cuando se usa (verificado) | lista | sí | calidad verificable |
| $prompt_guia | Crea un bloque custom de tarjeta de producto con block.json, InspectorControls y carga condicional de estilos | texto | no | "Block Editor (Gutenberg)" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El bloque custom renderiza con datos de attributes
- [ ] El CSS del bloque solo carga cuando se usa (verificado)

## Ejemplos de prompts

- "Crea un bloque custom de tarjeta de producto con block.json, InspectorControls y carga condicional de estilos"
- "Aplica Block Editor (Gutenberg) (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza El bloque custom renderiza con datos de attributes"
- "Revisa mi wordpress y dime qué pasos de Block Editor (Gutenberg) me faltan en este nivel"