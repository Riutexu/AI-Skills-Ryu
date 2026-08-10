# Three.js (3D en la web)

Skills para crear escenas 3D en el navegador con Three.js: desde una escena básica con cubos y luces hasta proyectos 3D optimizados con shaders, protocolos de compresión y React Three Fiber.

## Skills incluidas

| Skill (carpeta) | Nivel | Qué cubre |
|---|---|---|
| [three-js-basico](three-js-basico/SKILL.md) | Básico | Escena, cámara, renderer, geometrías, materiales, luces y animación |
| [three-js-avanzado](three-js-avanzado/SKILL.md) | Avanzado | Texturas, PBR, modelos GLTF, raycasting, postprocessing e instancing |
| [three-js-profesional](three-js-profesional/SKILL.md) | Profesional | Optimización (LOD, batching), shaders GLSL, React Three Fiber, Draco y WebGPU |

## Parámetros por nivel

| Parámetro | Básico | Avanzado | Profesional |
|---|---|---|---|
| `tipo_experiencia` | Escena demo simple | Tour 3D con modelos | Producto/tienda 3D en producción |
| `assets` | Geometrías nativas | Modelos GLTF/GLB | GLB comprimidos (Draco) con CDN |
| `interaccion` | OrbitControls | Raycasting y eventos | Raycasting + física + estado |
| `renderizado` | WebGLRenderer | WebGL + postprocessing | WebGL/WebGPU, targets rendimiento |
| `framework` | Vanilla JS | Vanilla JS/TS | React Three Fiber + TS |
| `target_devices` | Desktop | Desktop + móvil | Mobile-first + context loss |

## Instalación

Copia la carpeta del tema a tu proyecto o de forma global:

```
xcopy three-js C:\Users\%USERNAME%\.config\opencode\skills\three-js /E /I
```

Compatible también con `.claude/skills/` y `.agents/skills/`.

## Ruta de aprendizaje

1. **Básico**: domina escena/cámara/renderer y el bucle de animación antes de avanzar.
2. **Avanzado**: aprende el pipeline de assets GLTF y la interacción con raycasting.
3. **Profesional**: optimiza draw calls con instancing/LOD, conoce shaders y despliega con CDN.

## Referencias clave

- [Documentación de Three.js](https://threejs.org/docs/)
- [Ejemplos oficiales de Three.js](https://threejs.org/examples/)
- [React Three Fiber](https://r3f.docs.pmnd.rs/)
- [Modelos GLTF de muestra (Khronos)](https://github.com/KhronosGroup/glTF-Sample-Models)
- [Guía de rendimiento de Three.js (discoverthreejs.com)](https://discoverthreejs.com/tips-and-tricks/)