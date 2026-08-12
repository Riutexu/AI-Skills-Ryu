---
name: wordpress-plugins-custom-avanzado
description: Plugins y hooks · nivel Avanzado · WordPress: temas y plugins. Lógica respetando las convenciones: hooks actions/filters, WP-CLI-safe, y separación plugin/tema. Objetivo del nivel: plugins robustos
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "plugins-custom"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Plugins y hooks — Avanzado

## Qué hace este skill

Lógica respetando las convenciones: hooks actions/filters, WP-CLI-safe, y separación plugin/tema. En este nivel se entrega: **plugins robustos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Plugins y hooks** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Organizar el plugin con clases y PSR-4
2. Crear opciones con Settings API y sanitización
3. Usar transients y cron de WordPress
4. Escribir el plugin con prefijos seguros (funciones/opciones)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | plugins robustos | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Organizar el plugin con clases y PSR-4 · Crear opciones con Settings API y sanitización · Usar transients y cron de WordPress · Escribir el plugin con prefijos seguros (funciones/opciones) | lista | sí | 3-4 pasos |
| $criterios_clave | El plugin configura sus opciones con Settings API saneada · Las tareas programadas usan cron de WP con limpieza de desactivación | lista | sí | calidad verificable |
| $prompt_guia | Estructura mi plugin con clases, Settings API saneada, cron y transients con prefijos seguros | texto | no | "Plugins y hooks" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El plugin configura sus opciones con Settings API saneada
- [ ] Las tareas programadas usan cron de WP con limpieza de desactivación

## Ejemplos de prompts

- "Estructura mi plugin con clases, Settings API saneada, cron y transients con prefijos seguros"
- "Aplica Plugins y hooks (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza El plugin configura sus opciones con Settings API saneada"
- "Revisa mi wordpress y dime qué pasos de Plugins y hooks me faltan en este nivel"