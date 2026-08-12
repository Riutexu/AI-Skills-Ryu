---
name: wordpress-rendimiento-wordpress-avanzado
description: Rendimiento y caché · nivel Avanzado · WordPress: temas y plugins. Sitios rápidos: caché de página/object, lazy loading, optimización de BD y presupuesto de peso. Objetivo del nivel: optimización real de queries y assets
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rendimiento-wordpress"
  nivel: avanzado
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Rendimiento y caché — Avanzado

## Qué hace este skill

Sitios rápidos: caché de página/object, lazy loading, optimización de BD y presupuesto de peso. En este nivel se entrega: **optimización real de queries y assets**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento y caché** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Optimizar el tema: enqueue condicional y critical CSS
2. Detectar y arreglar queries lentas (Query Monitor)
3. Configurar object cache (Redis) para entornos con capacidad
4. Implementar lazy loading y preloads de LCP

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | optimización real de queries y assets | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Optimizar el tema: enqueue condicional y critical CSS · Detectar y arreglar queries lentas (Query Monitor) · Configurar object cache (Redis) para entornos con capacidad · Implementar lazy loading y preloads de LCP | lista | sí | 3-4 pasos |
| $criterios_clave | Query Monitor no muestra queries lentas ni duplicadas · LCP mejora con preloads y critical CSS medidos | lista | sí | calidad verificable |
| $prompt_guia | Optimiza el rendimiento real de mi WordPress: enqueue condicional, queries lentas, Redis y preloads LCP | texto | no | "Rendimiento y caché" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Query Monitor no muestra queries lentas ni duplicadas
- [ ] LCP mejora con preloads y critical CSS medidos

## Ejemplos de prompts

- "Optimiza el rendimiento real de mi WordPress: enqueue condicional, queries lentas, Redis y preloads LCP"
- "Aplica Rendimiento y caché (nivel avanzado) a mi trabajo actual con WordPress: temas y plugins: prioriza Query Monitor no muestra queries lentas ni duplicadas"
- "Revisa mi wordpress y dime qué pasos de Rendimiento y caché me faltan en este nivel"