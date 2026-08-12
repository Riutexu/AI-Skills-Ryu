---
name: bundlers-assets-imagenes-avanzado
description: Assets e imágenes · nivel Avanzado · Bundlers y tooling. Gestionás imágenes, fuentes y media en el build con formatos modernos y optimización. Objetivo del nivel: Optimizar imágenes y usar formatos modernos
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "assets-imagenes"
  nivel: avanzado
  stack: "Vite, esbuild, Rollup, ESLint, Prettier"
---

# Assets e imágenes — Avanzado

## Qué hace este skill

Gestionás imágenes, fuentes y media en el build con formatos modernos y optimización. En este nivel se entrega: **Optimizar imágenes y usar formatos modernos**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **Bundlers y tooling** (Vite, esbuild, Rollup, ESLint, Prettier) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Assets e imágenes** dentro de Bundlers y tooling.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, esbuild, Rollup, ESLint, Prettier**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Convertir a AVIF/WebP con carga condicional
2. Usar picture y srcset para resoluciones
3. Aplicar lazy loading con loading=lazy
4. Configurar la optimización de assets en el build

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Optimizar imágenes y usar formatos modernos | texto | sí | resultado medible |
| $stack | Bundlers y tooling | texto | sí | 12-js-ts/bundlers |
| $tecnologias | Vite, esbuild, Rollup, ESLint, Prettier | texto | sí | Vite, esbuild, Rollup, ESLint, Prettier |
| $tareas_clave | Convertir a AVIF/WebP con carga condicional · Usar picture y srcset para resoluciones · Aplicar lazy loading con loading=lazy · Configurar la optimización de assets en el build | lista | sí | 3-4 pasos |
| $criterios_clave | El formato moderno se usa con fallback · Las imágenes optimizadas reducen el peso real | lista | sí | calidad verificable |
| $prompt_guia | Las imágenes del catálogo pesan 800KB: convertilas a AVIF/WebP con <picture> y srcset, agregá lazy loading y medí la mejora de peso. | texto | no | "Assets e imágenes" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] El formato moderno se usa con fallback
- [ ] Las imágenes optimizadas reducen el peso real

## Ejemplos de prompts

- "Las imágenes del catálogo pesan 800KB: convertilas a AVIF/WebP con <picture> y srcset, agregá lazy loading y medí la mejora de peso."
- "Aplica Assets e imágenes (nivel avanzado) a mi trabajo actual con Bundlers y tooling: prioriza El formato moderno se usa con fallback"
- "Revisa mi bundlers y dime qué pasos de Assets e imágenes me faltan en este nivel"