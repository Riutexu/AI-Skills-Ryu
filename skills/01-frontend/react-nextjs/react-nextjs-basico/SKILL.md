---
name: react-nextjs-basico
description: Crea componentes React con JSX, props y estado: lista de tareas, contador, eventos y renderizado condicional
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "react-nextjs"
  nivel: basico
  stack: "React 18, JSX, Vite"
---

# React y Next.js — Nivel básico

## Qué hace este skill

Guía para crear los primeros componentes React: JSX, props, estado con `useState`, eventos y renderizado de listas. Al final sabes construir una interfaz reactiva simple sin frameworks externos.

## Cuándo usarlo

- Es tu primera vez con React y necesitas una base sólida.
- El proyecto pide una SPA pequeña (contador, lista de tareas, formularios).
- Necesitas entender el flujo de datos de los componentes (pasa props, renderiza, reacciona).

## Requisitos previos

- HTML, CSS y JavaScript moderno (funciones, arrays, objetos, arrow functions).
- Un proyecto Vite: `npm create vite@latest mi-app -- --template react`.
- Nociones de `npm` (instalar y correr `npm run dev`).

## Workflow paso a paso

1. Crea un proyecto Vite y elimina el contenido demo de `App.jsx`.
2. Define el componente principal `App` que renderiza la interfaz.
3. Crea 3 componentes pequeños: `Header`, `TaskList` y `TaskForm`, cada uno en su archivo, y exporta por defecto.
4. Pasa datos del padre al hijo con **props** (obj destructuring en la firma).
5. Usa `useState` para el estado: `const [tasks, setTasks] = useState([])`.
6. Maneja eventos con `onClick` y `onSubmit` recibiendo el objeto `event`.
7. Renderiza listas con `.map()` y asigna siempre una `key` estable (id, no índice).
8. Renderiza condicionalmente con `&&` o ternarias (ej. mensaje "Sin tareas").
9. Evita mutar el estado: crea arrays nuevos con spread (`[...tasks, nueva]` y `filter` para borrar).
10. Revisa en el navegador: estado inicial, añadir, borrar y vacío de la lista.
11. Limpia el formulario tras enviar (`setValue("")`) y previene `preventDefault()`.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `tipo_aplicacion` | Qué interfaz construir | texto | sí | "lista de tareas" |
| `componentes` | Componentes que quieres | lista | no | Header, TaskList, TaskForm |
| `estado_global` | ¿Se requiere contexto/tienda? | booleano | no | false |
| `framework` | React o Next.js | texto | no | "React (Vite)" |
| `estilo` | CSS a aplicar | texto | no | "CSS plano" |
| `nombre_proyecto` | Nombre de la app | texto | no | "mi-app" |

## Reglas y checklist

- [ ] Un componente por archivo, con nombre en PascalCase y export por defecto
- [ ] Props desestructuradas y tipadas (o documentadas)
- [ ] Estado nunca mutado; siempre nuevas referencias
- [ ] `key` única y estable en cada lista
- [ ] Eventos controlados en formularios (`value` + `onChange`)
- [ ] Nada de funciones definidas dentro del JSX si se reutilizan

## Ejemplos de prompts

- "Crea un contador con botones +1, -1 y reset, con React en una SPA"
- "Haz una lista de tareas: añadir y borrar con estado, sin mutar arrays"
- "Genera un mini-formulario de registro con estado controlado"
- "Convierte este HTML estático en componentes React"

## Plantillas y recursos

- [templates/contador-lista.jsx](templates/contador-lista.jsx) — contador + lista de tareas funcionales
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel