---
name: wordpress-migraciones-backup-avanzado
description: Migraciones y backups · nivel Avanzado · WordPress: temas y plugins. Mover sitios entre entornos y respaldar con restauración probada, no con plugins mágicos. Objetivo del nivel: backups programados y migraciones en Git
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "migraciones-backup"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Migraciones y backups — Avanzado

## Qué hace este skill

Mover sitios entre entornos y respaldar con restauración probada, no con plugins mágicos. En este nivel se entrega: **backups programados y migraciones en Git**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migraciones y backups** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Programar backups automáticos (BD + archivos) con retención
2. Migrar configuraciones con WP-CLI (search-replace, export)
3. Versionar el código del sitio en Git (tema + plugins propios)
4. Configurar staging con sincronización selectiva

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | backups programados y migraciones en Git | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Programar backups automáticos (BD + archivos) con retención · Migrar configuraciones con WP-CLI (search-replace, export) · Versionar el código del sitio en Git (tema + plugins propios) · Configurar staging con sincronización selectiva | lista | sí | 3-4 pasos |
| $criterios_clave | El backup automático se restaura en <20 min (probado) · El código del sitio vive en Git y se despliega con WP-CLI | lista | sí | calidad verificable |
| $prompt_guia | Monta backups automáticos con retención, staging en Git y migraciones con WP-CLI para mis sitios | texto | no | "Migraciones y backups" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El backup automático se restaura en <20 min (probado)
- [ ] El código del sitio vive en Git y se despliega con WP-CLI

## Ejemplos de prompts

- "Monta backups automáticos con retención, staging en Git y migraciones con WP-CLI para mis sitios"
- "Aplica Migraciones y backups (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza El backup automático se restaura en <20 min (probado)"
- "Revisa mi wordpress y dime qué pasos de Migraciones y backups me faltan en este nivel"