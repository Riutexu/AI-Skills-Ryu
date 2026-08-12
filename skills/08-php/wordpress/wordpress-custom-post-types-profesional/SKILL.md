---
name: wordpress-custom-post-types-profesional
description: Custom Post Types y taxonomías · nivel Profesional · WordPress: temas y plugins. Contenido estructurado más allá de posts/pages: CPTs, taxonomías, meta boxes y queries. Objetivo del nivel: contenido como dominio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "custom-post-types"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Custom Post Types y taxonomías — Profesional

## Qué hace este skill

Contenido estructurado más allá de posts/pages: CPTs, taxonomías, meta boxes y queries. En este nivel se entrega: **contenido como dominio**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Custom Post Types y taxonomías** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Modelar el contenido del sitio como dominio (CPTs, relaciones)
2. Esquemas estructurados (JSON-LD) por CPT
3. Sincronizar CPTs con fuentes externas (imports/migraciones)
4. Rendimiento: page cache friendly y object cache en listados

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | contenido como dominio | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Modelar el contenido del sitio como dominio (CPTs, relaciones) · Esquemas estructurados (JSON-LD) por CPT · Sincronizar CPTs con fuentes externas (imports/migraciones) · Rendimiento: page cache friendly y object cache en listados | lista | sí | 3-4 pasos |
| $criterios_clave | Cada CPT aporta JSON-LD coherente · Los imports no duplican contenido (idempotentes) | lista | sí | calidad verificable |
| $prompt_guia | Modela el contenido de mi sitio como dominio con JSON-LD por CPT e imports idempotentes | texto | no | "Custom Post Types y taxonomías" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada CPT aporta JSON-LD coherente
- [ ] Los imports no duplican contenido (idempotentes)

## Ejemplos de prompts

- "Modela el contenido de mi sitio como dominio con JSON-LD por CPT e imports idempotentes"
- "Aplica Custom Post Types y taxonomías (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza Cada CPT aporta JSON-LD coherente"
- "Revisa mi wordpress y dime qué pasos de Custom Post Types y taxonomías me faltan en este nivel"