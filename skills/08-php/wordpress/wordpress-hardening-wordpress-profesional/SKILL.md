---
name: wordpress-hardening-wordpress-profesional
description: Seguridad y hardening · nivel Profesional · WordPress: temas y plugins. Endurecer WordPress de verdad: usuarios, archivos, plugins, login y la superficie de ataque. Objetivo del nivel: postura de seguridad gestionada
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "hardening-wordpress"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Seguridad y hardening — Profesional

## Qué hace este skill

Endurecer WordPress de verdad: usuarios, archivos, plugins, login y la superficie de ataque. En este nivel se entrega: **postura de seguridad gestionada**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Seguridad y hardening** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Montar monitorización de integridad (cambios de archivos) y alertas
2. Realizar pentest básico propio (WPScan) y plan de remediación
3. Definir runbooks de incidentes (sitio caído, hackeado)
4. Gestión de riesgos de terceros: plugins con política de scoring

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | postura de seguridad gestionada | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Montar monitorización de integridad (cambios de archivos) y alertas · Realizar pentest básico propio (WPScan) y plan de remediación · Definir runbooks de incidentes (sitio caído, hackeado) · Gestión de riesgos de terceros: plugins con política de scoring | lista | sí | 3-4 pasos |
| $criterios_clave | WPScan no reporta vulnerabilidades críticas sin plan · El runbook de incidente está escrito y practicado | lista | sí | calidad verificable |
| $prompt_guia | Implementa la postura de seguridad gestionada de mi WordPress: WPScan, integridad monitorizada y runbooks | texto | no | "Seguridad y hardening" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] WPScan no reporta vulnerabilidades críticas sin plan
- [ ] El runbook de incidente está escrito y practicado

## Ejemplos de prompts

- "Implementa la postura de seguridad gestionada de mi WordPress: WPScan, integridad monitorizada y runbooks"
- "Aplica Seguridad y hardening (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza WPScan no reporta vulnerabilidades críticas sin plan"
- "Revisa mi wordpress y dime qué pasos de Seguridad y hardening me faltan en este nivel"