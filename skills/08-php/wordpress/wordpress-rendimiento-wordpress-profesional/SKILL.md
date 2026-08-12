---
name: wordpress-rendimiento-wordpress-profesional
description: Rendimiento y caché · nivel Profesional · WordPress: temas y plugins. Sitios rápidos: caché de página/object, lazy loading, optimización de BD y presupuesto de peso. Objetivo del nivel: presupuesto de rendimiento y escala
license: MIT
compatibility: opencode
metadata:
  familia: "08-php"
  tema: "rendimiento-wordpress"
  nivel: profesional
  stack: "WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL"
---

# Rendimiento y caché — Profesional

## Qué hace este skill

Sitios rápidos: caché de página/object, lazy loading, optimización de BD y presupuesto de peso. En este nivel se entrega: **presupuesto de rendimiento y escala**.

Solución de producción: optimización, escala, pruebas y operación. Para profesionales que defienden el trabajo ante clientes, equipos o jurados. Esta skill se aplica sobre el stack **WordPress: temas y plugins** (WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Rendimiento y caché** dentro de WordPress: temas y plugins.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Profesional** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Fijar presupuesto de rendimiento (LCP, peso, requests) y CI manual
2. Diseñar la arquitectura de caché completa (page/object/CDN)
3. Optimizar BD: limpieza de revisiones, tablas y índices
4. Escalar picos: staging de carga y plan de contingencia

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Profesional | texto | sí | profesional |
| $objetivo | presupuesto de rendimiento y escala | texto | sí | resultado medible |
| $stack | WordPress: temas y plugins | texto | sí | 08-php/wordpress |
| $tecnologias | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL | texto | sí | WordPress, PHP 8.3, Block Editor, ACF, WooCommerce, MySQL |
| $tareas_clave | Fijar presupuesto de rendimiento (LCP, peso, requests) y CI manual · Diseñar la arquitectura de caché completa (page/object/CDN) · Optimizar BD: limpieza de revisiones, tablas y índices · Escalar picos: staging de carga y plan de contingencia | lista | sí | 3-4 pasos |
| $criterios_clave | El presupuesto de rendimiento se mide en cada release · La arquitectura de caché sostiene el pico de tráfico previsto | lista | sí | calidad verificable |
| $prompt_guia | Diseña el presupuesto de rendimiento de mis sitios: métricas por release, caché completa y optimización de BD | texto | no | "Rendimiento y caché" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Profesional, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El presupuesto de rendimiento se mide en cada release
- [ ] La arquitectura de caché sostiene el pico de tráfico previsto

## Ejemplos de prompts

- "Diseña el presupuesto de rendimiento de mis sitios: métricas por release, caché completa y optimización de BD"
- "Aplica Rendimiento y caché (nivel profesional) a mi trabajo actual con WordPress: temas y plugins: prioriza El presupuesto de rendimiento se mide en cada release"
- "Revisa mi wordpress y dime qué pasos de Rendimiento y caché me faltan en este nivel"