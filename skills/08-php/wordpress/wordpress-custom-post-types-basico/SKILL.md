---
name: wordpress-custom-post-types-basico
description: Custom Post Types y taxonomías · nivel Básico · WordPress: temas y plugins. Contenido estructurado más allá de posts/pages: CPTs, taxonomías, meta boxes y queries. Objetivo del nivel: crear CPTs y taxonomías
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "custom-post-types"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Custom Post Types y taxonomías — Básico

## Qué hace este skill

Contenido estructurado más allá de posts/pages: CPTs, taxonomías, meta boxes y queries. En este nivel se entrega: **crear CPTs y taxonomías**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Custom Post Types y taxonomías** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Registrar un CPT (register_post_type) correctamente
2. Crear taxonomías asociadas
3. Mostrar CPTs en plantillas y menus

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | crear CPTs y taxonomías | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Registrar un CPT (register_post_type) correctamente · Crear taxonomías asociadas · Mostrar CPTs en plantillas y menus | lista | sí | 3-4 pasos |
| $criterios_clave | El CPT aparece en admin con taxonomías funcionales · La plantilla del CPT funciona sin modificar core | lista | sí | calidad verificable |
| $prompt_guia | Registra un CPT de proyectos con taxonomía de categoría y su plantilla | texto | no | "Custom Post Types y taxonomías" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El CPT aparece en admin con taxonomías funcionales
- [ ] La plantilla del CPT funciona sin modificar core

## Ejemplos de prompts

- "Registra un CPT de proyectos con taxonomía de categoría y su plantilla"
- "Aplica Custom Post Types y taxonomías (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza El CPT aparece en admin con taxonomías funcionales"
- "Revisa mi wordpress y dime qué pasos de Custom Post Types y taxonomías me faltan en este nivel"