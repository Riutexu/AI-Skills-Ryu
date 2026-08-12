---
name: wordpress-migraciones-backup-basico
description: Migraciones y backups · nivel Básico · WordPress: temas y plugins. Mover sitios entre entornos y respaldar con restauración probada, no con plugins mágicos. Objetivo del nivel: migrar y respaldar simple
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "migraciones-backup"
  nivel: basico
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Migraciones y backups — Básico

## Qué hace este skill

Mover sitios entre entornos y respaldar con restauración probada, no con plugins mágicos. En este nivel se entrega: **migrar y respaldar simple**.

Solución correcta, mínima y explicada paso a paso. Para quien declara que está aprendiendo el tema o quiere resultados simples que entienda al 100%. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migraciones y backups** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Básico** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Generar backup manual de BD + archivos
2. Restaurar en local y verificar el sitio
3. Migrar entre dominios con búsqueda-reemplazo segura

4. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
5. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Básico | texto | sí | basico |
| $objetivo | migrar y respaldar simple | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Generar backup manual de BD + archivos · Restaurar en local y verificar el sitio · Migrar entre dominios con búsqueda-reemplazo segura | lista | sí | 3-4 pasos |
| $criterios_clave | La restauración en local funciona de punta a punta · El cambio de dominio no rompe enlaces | lista | sí | calidad verificable |
| $prompt_guia | Migra mi WordPress a localhost y haz backup manual con restauración verificada | texto | no | "Migraciones y backups" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Básico, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] La restauración en local funciona de punta a punta
- [ ] El cambio de dominio no rompe enlaces

## Ejemplos de prompts

- "Migra mi WordPress a localhost y haz backup manual con restauración verificada"
- "Aplica Migraciones y backups (nivel basico) a mi trabajo actual con WordPress: temas y plugins: prioriza La restauración en local funciona de punta a punta"
- "Revisa mi wordpress y dime qué pasos de Migraciones y backups me faltan en este nivel"