---
name: wordpress-temas-y-plantillas-avanzado
description: Temas y plantillas · nivel Avanzado · WordPress: temas y plugins. Temas profesionales con custom theme: hierarchy de plantillas, functions.php y hooks visuales. Objetivo del nivel: theme custom de cero
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "temas-y-plantillas"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Temas y plantillas — Avanzado

## Qué hace este skill

Temas profesionales con custom theme: hierarchy de plantillas, functions.php y hooks visuales. En este nivel se entrega: **theme custom de cero**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Temas y plantillas** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Construir un theme desde underscores básicos
2. Implementar la template hierarchy completa (archive, single, search)
3. Usar funciones de theme (menus, thumbnails, widgets)
4. Extender el loop con query personalizadas

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | theme custom de cero | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Construir un theme desde underscores básicos · Implementar la template hierarchy completa (archive, single, search) · Usar funciones de theme (menus, thumbnails, widgets) · Extender el loop con query personalizadas | lista | sí | 3-4 pasos |
| $criterios_clave | Todas las páginas del sitio usan plantillas intencionadas · El theme pasa los estándares de escaneo (theme check) | lista | sí | calidad verificable |
| $prompt_guia | Construye un theme WordPress desde cero con hierarchy completa y theme check limpio | texto | no | "Temas y plantillas" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Todas las páginas del sitio usan plantillas intencionadas
- [ ] El theme pasa los estándares de escaneo (theme check)

## Ejemplos de prompts

- "Construye un theme WordPress desde cero con hierarchy completa y theme check limpio"
- "Aplica Temas y plantillas (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza Todas las páginas del sitio usan plantillas intencionadas"
- "Revisa mi wordpress y dime qué pasos de Temas y plantillas me faltan en este nivel"