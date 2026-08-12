---
name: wordpress-instalacion-configuracion-avanzado
description: Instalación y configuración · nivel Avanzado · WordPress: temas y plugins. WordPress limpio y explotado: instalación local, wp-config, permalinks y estructura del core. Objetivo del nivel: configuración profesional y multisitio
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "instalacion-configuracion"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Instalación y configuración — Avanzado

## Qué hace este skill

WordPress limpio y explotado: instalación local, wp-config, permalinks y estructura del core. En este nivel se entrega: **configuración profesional y multisitio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Instalación y configuración** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Configurar multisitio (wp multisite) con redes y dominios
2. Aplicar wp-config hardening (salts, table_prefix, memory)
3. Gestionar updates con staging y backups
4. Configurar entorno de producción (HTTPS, caching layers)

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | configuración profesional y multisitio | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Configurar multisitio (wp multisite) con redes y dominios · Aplicar wp-config hardening (salts, table_prefix, memory) · Gestionar updates con staging y backups · Configurar entorno de producción (HTTPS, caching layers) | lista | sí | 3-4 pasos |
| $criterios_clave | El multisitio comparte plugins/temas sin conflictos · El wp-config usa salts y medidas de dureza documentadas | lista | sí | calidad verificable |
| $prompt_guia | Prepara mi WordPress para producción: multisitio seguro, wp-config hardened y flujo de updates con staging | texto | no | "Instalación y configuración" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El multisitio comparte plugins/temas sin conflictos
- [ ] El wp-config usa salts y medidas de dureza documentadas

## Ejemplos de prompts

- "Prepara mi WordPress para producción: multisitio seguro, wp-config hardened y flujo de updates con staging"
- "Aplica Instalación y configuración (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza El multisitio comparte plugins/temas sin conflictos"
- "Revisa mi wordpress y dime qué pasos de Instalación y configuración me faltan en este nivel"