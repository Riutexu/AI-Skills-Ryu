---
name: wordpress-rendimiento-wordpress-basico
description: Rendimiento y caché · nivel Básico · WordPress: temas y plugins. Sitios rápidos: caché de página/object, lazy loading, optimización de BD y presupuesto de peso. Objetivo del nivel: caché y primeras optimizaciones
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rendimiento-wordpress"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Rendimiento y caché — Básico

## Qué hace este skill

Sitios rápidos: caché de página/object, lazy loading, optimización de BD y presupuesto de peso. En este nivel se entrega: **caché y primeras optimizaciones**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento y caché** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Activar un plugin de caché (page cache + browser)
2. Optimizar imágenes básicas (compresión y formatos)
3. Medir con PageSpeed y fijar la línea base

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | caché y primeras optimizaciones | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Activar un plugin de caché (page cache + browser) · Optimizar imágenes básicas (compresión y formatos) · Medir con PageSpeed y fijar la línea base | lista | sí | 3-4 pasos |
| $criterios_clave | El PageSpeed mejora respecto a la línea base sin cargar el servidor · Las imágenes no se sirven más pesadas de lo necesario | lista | sí | calidad verificable |
| $prompt_guia | Mejora el rendimiento de mi WordPress: caché activada, imágenes optimizadas y medición PageSpeed | texto | no | "Rendimiento y caché" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El PageSpeed mejora respecto a la línea base sin cargar el servidor
- [ ] Las imágenes no se sirven más pesadas de lo necesario

## Ejemplos de prompts

- "Mejora el rendimiento de mi WordPress: caché activada, imágenes optimizadas y medición PageSpeed"
- "Aplica Rendimiento y caché (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza El PageSpeed mejora respecto a la línea base sin cargar el servidor"
- "Revisa mi wordpress y dime qué pasos de Rendimiento y caché me faltan en este nivel"