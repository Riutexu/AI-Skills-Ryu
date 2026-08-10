---
name: three-js-basico
description: Crea tu primera escena 3D con Three.js: escena, cámara, renderer, geometrías, materiales, luces, OrbitControls y animación
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "three-js"
  nivel: basico
  stack: "Three.js, JavaScript ES6+, Vite"
---

# Three.js — Nivel básico

## Qué hace este skill

Guía para montar la primera escena 3D funcional: renderer, cámara, geometrías, materiales, luces, controles orbitales y un bucle de animación con `requestAnimationFrame`.

## Cuándo usarlo

- Quieres empezar con 3D en el navegador y necesitas lo mínimo funcional.
- El proyecto pide visualización 3D simple (logo 3D, cubo animado, producto básico).
- Necesitas entender el trío escena-cámara-renderer antes de tocar texturas o modelos.

## Requisitos previos

- HTML/CSS básico y JavaScript (módulos ESM).
- Node.js y `npm`; proyecto Vite.
- Three.js instalado: `npm install three`.

## Workflow paso a paso

1. Crea el proyecto Vite y `npm install three`.
2. En `index.html` añade el `<canvas>` y dale tamaño de pantalla completa (CSS `100vh`/`100vw`, sin márgenes).
3. Importa desde `three` y desde `three/addons/controls/OrbitControls.js`.
4. Crea la escena: `const scene = new THREE.Scene();` y fondo `scene.background`.
5. Crea la cámara: `PerspectiveCamera(75, aspect, 0.1, 1000)` con posición `(3, 2, 5)` apuntando al origen.
6. Crea el renderer: `WebGLRenderer({ antialias: true })`, tamaño de ventana y `setPixelRatio(Math.min(devicePixelRatio, 2))`.
7. Añade 3 geometrías con `MeshStandardMaterial` (cubo, esfera, plano) con posiciones distintas.
8. Añade luces: `AmbientLight(0xffffff, 0.5)` + `DirectionalLight` o `PointLight` para sombras.
9. Activa `OrbitControls` con `enableDamping = true` (el damping requiere `controls.update()` en el bucle).
10. Escribe el bucle: `function animate() { requestAnimationFrame(animate); }` con la rotación (multiplica por `delta` o fija velocidad por segundo) y `renderer.render(scene, camera)`.
11. Gestión de la ventana: en `resize` actualiza cámara (`aspect`) y renderer.
12. Verifica en navegador: rotación, orbitar con el ratón, zoom.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `tipo_experiencia` | Qué escena construir | texto | sí | "cubo giratorio" |
| `geometrias` | Formas deseadas | lista | no | box, sphere, plane |
| `estilo_visual` | Material/estética | texto | no | "estándar con brillo" |
| `animacion` | Tipo de movimiento | texto | no | "rotación automática" |
| `controles` | OrbitControls u otros | texto | no | "OrbitControls con damping" |
| `fps` | Velocidad objetivo | número | no | 60 |

## Reglas y checklist

- [ ] Pixel ratio limitado a 2 para no matar móviles
- [ ] `resize` con `window.addEventListener("resize")` actualizado
- [ ] Bucle con `requestAnimationFrame` (nunca `setInterval`)
- [ ] `controls.update()` cuando hay damping
- [ ] Geometrías/materiales con tamaños y colores coherentes
- [ ] Código en módulos ESM (import/export)

## Ejemplos de prompts

- "Crea una escena tres.js con un cubo que gire, esfera y plano con OrbitControls"
- "Añade luces y sombras a mi escena básica"
- "Haz que la escena se adapte al redimensionar la ventana"
- "Convierte este HTML en un proyecto Vite con three.js"

## Plantillas y recursos

- [templates/index.html](templates/index.html) — HTML base de la escena
- [templates/main.js](templates/main.js) — escena animada completa y funcional
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel