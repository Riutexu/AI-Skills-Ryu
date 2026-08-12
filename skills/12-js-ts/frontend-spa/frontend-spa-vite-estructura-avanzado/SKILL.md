---
name: frontend-spa-vite-estructura-avanzado
description: Vite y estructura · nivel Avanzado · SPAs vanilla y Vite. Organizás el proyecto Vite en capas y carpetas que escalan sin framework. Objetivo del nivel: Diseñar la arquitectura de carpetas por dominio
license: MIT
compatibility: opencode
metadata:
  familia: "12-js-ts"
  tema: "vite-estructura"
  nivel: avanzado
  stack: "Vite, Custom Elements, Fetch, PHP 8.3"
---

# Vite y estructura — Avanzado

## Qué hace este skill

Organizás el proyecto Vite en capas y carpetas que escalan sin framework. En este nivel se entrega: **Diseñar la arquitectura de carpetas por dominio**.

Solución robusta con patrones estándar, configuración real y errores contemplados. Para quien domina el tema y trabaja en proyectos funcionales. Esta skill se aplica sobre el stack **SPAs vanilla y Vite** (Vite, Custom Elements, Fetch, PHP 8.3) y respeta SIEMPRE la calibración de calibracion-experiencia: el registro del trabajo coincide con el nivel declarado por el usuario.

## Cuándo usarlo

- Cuando la tarea pertenece a **Vite y estructura** dentro de SPAs vanilla y Vite.
- Solo cuando el registro calibrado de la sesión corresponde al nivel **Avanzado** (consulta calibracion-experiencia antes de decidir).
- NO usar si la tarea pide un nivel distinto: carga la versión -basico, -avanzado o -profesional adecuada (o pregunta antes de mezclar).

## Requisitos previos

- Stack disponible y configurado: **Vite, Custom Elements, Fetch, PHP 8.3**.
- Proyecto/repositorio donde trabajar, con control de versiones si aplica.
- Registro calibrado de la sesión (nivel declarado o pregunta de calibración respondida).

## Workflow paso a paso

1. Organizar los módulos por dominio de negocio
2. Separar estilos globales de los por componente
3. Configurar assets y alias de importación
4. Documentar la estructura en el README

5. Verificar el resultado contra cada criterio de calidad (checklist abajo): si alguno falla, corregir antes de entregar.
6. Preparar la defensa de 3 frases: qué hace / cómo funciona / por qué está hecho así. Si el usuario no puede defenderlo en 3 frases, recalibrar el registro (bajar nivel o añadir explicaciones).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| $nivel | Avanzado | texto | sí | avanzado |
| $objetivo | Diseñar la arquitectura de carpetas por dominio | texto | sí | resultado medible |
| $stack | SPAs vanilla y Vite | texto | sí | 12-js-ts/frontend-spa |
| $tecnologias | Vite, Custom Elements, Fetch, PHP 8.3 | texto | sí | Vite, Custom Elements, Fetch, PHP 8.3 |
| $tareas_clave | Organizar los módulos por dominio de negocio · Separar estilos globales de los por componente · Configurar assets y alias de importación · Documentar la estructura en el README | lista | sí | 3-4 pasos |
| $criterios_clave | Cada dominio tiene sus vistas, servicios y estilos juntos · El alias @/ funciona en todo el proyecto | lista | sí | calidad verificable |
| $prompt_guia | Reorganizá la SPA por dominios (auth, productos, pedidos, reportes) con sus vistas, servicios y estilos; actualizá el README con la estructura nueva. | texto | no | "Vite y estructura" |

## Reglas y checklist

- [ ] No mezclar niveles: el registro calibrado es Avanzado, no se importan trucos de niveles superiores sin avisar y confirmar.
- [ ] No prometer resultados absolutos ("siempre funciona", "100% seguro"): entregar con condiciones y alternativas.
- [ ] Código en el idioma y convenciones del proyecto del usuario; comentarios donde aportan, no donde repiten.
- [ ] Final del trabajo: resumen en lenguaje humano de qué hace, cómo funciona y por qué así.
- [ ] Cada dominio tiene sus vistas, servicios y estilos juntos
- [ ] El alias @/ funciona en todo el proyecto

## Ejemplos de prompts

- "Reorganizá la SPA por dominios (auth, productos, pedidos, reportes) con sus vistas, servicios y estilos; actualizá el README con la estructura nueva."
- "Aplica Vite y estructura (nivel avanzado) a mi trabajo actual con SPAs vanilla y Vite: prioriza Cada dominio tiene sus vistas, servicios y estilos juntos"
- "Revisa mi frontend-spa y dime qué pasos de Vite y estructura me faltan en este nivel"