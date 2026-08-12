---
name: wordpress-custom-post-types-avanzado
description: Custom Post Types y taxonomías · nivel Avanzado · WordPress: temas y plugins. Contenido estructurado más allá de posts/pages: CPTs, taxonomías, meta boxes y queries. Objetivo del nivel: meta y queries de contenido
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "custom-post-types"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Custom Post Types y taxonomías — Avanzado

## Qué hace este skill

Contenido estructurado más allá de posts/pages: CPTs, taxonomías, meta boxes y queries. En este nivel se entrega: **meta y queries de contenido**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Custom Post Types y taxonomías** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Manejar meta boxes con save_post y nonces
2. Consultar por metadatos y taxonomías (WP_Query)
3. Usar capabilities propias del CPT
4. Optimizar queries de CPT con índices en meta

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | meta y queries de contenido | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Manejar meta boxes con save_post y nonces · Consultar por metadatos y taxonomías (WP_Query) · Usar capabilities propias del CPT · Optimizar queries de CPT con índices en meta | lista | sí | 3-4 pasos |
| $criterios_clave | Los meta boxes guardan y validan con nonce · Las listas complejas de CPT se consultan sin queries lentas | lista | sí | calidad verificable |
| $prompt_guia | Añade meta boxes seguras a mi CPT con queries avanzadas por metadatos y capabilities propias | texto | no | "Custom Post Types y taxonomías" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Los meta boxes guardan y validan con nonce
- [ ] Las listas complejas de CPT se consultan sin queries lentas

## Ejemplos de prompts

- "Añade meta boxes seguras a mi CPT con queries avanzadas por metadatos y capabilities propias"
- "Aplica Custom Post Types y taxonomías (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza Los meta boxes guardan y validan con nonce"
- "Revisa mi wordpress y dime qué pasos de Custom Post Types y taxonomías me faltan en este nivel"