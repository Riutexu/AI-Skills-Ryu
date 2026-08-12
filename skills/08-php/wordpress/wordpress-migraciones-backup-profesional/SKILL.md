---
name: wordpress-migraciones-backup-profesional
description: Migraciones y backups · nivel Profesional · WordPress: temas y plugins. Mover sitios entre entornos y respaldar con restauración probada, no con plugins mágicos. Objetivo del nivel: plan de recuperación
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "migraciones-backup"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Migraciones y backups — Profesional

## Qué hace este skill

Mover sitios entre entornos y respaldar con restauración probada, no con plugins mágicos. En este nivel se entrega: **plan de recuperación**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Migraciones y backups** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Diseñar el plan de recuperación (RTO/RPO) por sitio
2. Automatizar la restauración completa (script verificable)
3. Probar la recuperación en calendario (drill trimestral)
4. Documentar los pasos para el cliente no técnico

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | plan de recuperación | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Diseñar el plan de recuperación (RTO/RPO) por sitio · Automatizar la restauración completa (script verificable) · Probar la recuperación en calendario (drill trimestral) · Documentar los pasos para el cliente no técnico | lista | sí | 3-4 pasos |
| $criterios_clave | El drill de recuperación cumple el RTO documentado · El cliente puede pedir la recuperación sin depender de un técnico | lista | sí | calidad verificable |
| $prompt_guia | Diseña el plan de recuperación de mis sitios: RTO/RPO, restauración automatizada y drill trimestral | texto | no | "Migraciones y backups" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El drill de recuperación cumple el RTO documentado
- [ ] El cliente puede pedir la recuperación sin depender de un técnico

## Ejemplos de prompts

- "Diseña el plan de recuperación de mis sitios: RTO/RPO, restauración automatizada y drill trimestral"
- "Aplica Migraciones y backups (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza El drill de recuperación cumple el RTO documentado"
- "Revisa mi wordpress y dime qué pasos de Migraciones y backups me faltan en este nivel"