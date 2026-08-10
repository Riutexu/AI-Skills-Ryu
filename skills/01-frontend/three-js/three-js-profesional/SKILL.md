---
name: three-js-profesional
description: Optimización 3D de producción: LOD y frustum culling, batching e instancing, shaders GLSL, React Three Fiber, Draco y pipeline de assets con CDN
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "three-js"
  nivel: profesional
  stack: "Three.js, GLSL, React Three Fiber, TypeScript"
---

# Three.js — Nivel profesional full stack

## Qué hace este skill

Guía para llevar experiencias 3D a producción: presupuesto de draw calls, LOD y frustum culling, shaders personalizados, integración con React Three Fiber, compresión de assets (Draco/meshopt) servidos por CDN y manejo de context loss en móviles.

## Cuándo usarlo

- La experiencia 3D es un producto (configurador, vitrina 3D) con requisitos de rendimiento.
- La escena tiene muchos objetos o polys y necesitas presupuestos duros (fps objetivo, memoria).
- El front es React y quieres integrar Three.js de forma mantenible (R3F).

## Requisitos previos

- Niveles básico y avanzado de este tema.
- TypeScript y React si usas React Three Fiber.
- Pipeline de assets definido (Blender → GLB → compresión → CDN).

## Workflow paso a paso

1. **Presupuesto**: define objetivo de fps (60/30), draw calls y memoria GPU antes de construir; mide en cada hito con `stats.js` o DevTools GPU.
2. **LOD**: `THREE.LOD` con 2-3 niveles de detalle del mismo modelo (por lo general LowPoly en Blender); elige distancias según tamaño de la escena.
3. **Frustum culling**: mantenlo activo por defecto; desactívalo solo en objetos animados que teletransportan (si no, desaparecen vistas).
4. **Batching**: une geometrías estáticas en un solo `BufferGeometry`/`Mesh` (favorece GPUs); usa `InstancedMesh` para copias animadas.
5. **Shaders**: `ShaderMaterial` para efectos propios; al menos un ejemplo de uniforms animados, `varying` y `gl_FragColor`; evita bucles costosos en el fragment shader.
6. **Compresión de assets**: instala `gltf-transform` (`npx gltf-transform optimize` o script) para Draco + KTX2; sube el GLB a CDN con cabeceras de caché agresivas.
7. **R3F**: usa `<Canvas>`, hooks (`useFrame`, `useLoader`, `useGLTF`) y `primitive`; define componentes por objeto/entidad y suspends de loading con `<Suspense>`.
8. **Context loss** (móvil): escucha `webglcontextlost`/`webglcontextrestored` y recarga escena o muestra fallback; controla la memoria con `renderer.info`.
9. **Calidad por dispositivo**: detecta capacidad (RAM/fps) y baja pixelRatio, sombras o postprocessing en gama baja (o degrada a imagen estática).
10. **Integración con el resto de la app**: overlay HTML/CSS para UI, gestión de estado del 3D (Zustand en R3F), telemetría de errores WebGL.
11. Mide Core Web Vitals del contenedor y carga la escena de forma lazy (no bloquees el LCP).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `fps_objetivo` | Frames por segundo objetivo | número | sí | 60 en desktop, 30 móvil |
| `presupuesto_drawcalls` | Draw calls máximos | número | no | 200 |
| `assets_cdn` | URL base del CDN de assets | url | no | "https://cdn.midominio.com/3d" |
| `compresion` | Draco / meshopt / KTX2 | texto | no | "draco+ktx2" |
| `framework` | Vanilla o React Three Fiber | texto | no | "R3F + TS" |
| `degradacion` | Plan para dispositivos débiles | texto | no | "bajar pixelRatio a 1" |

## Reglas y checklist

- [ ] LOD con 2-3 niveles y distancias calibradas
- [ ] `.gltf-transform` aplicado (Draco/KTX2) y verificado el peso
- [ ] Assets servidos por CDN con caché hasta el hash del archivo
- [ ] Context loss manejado (recrear o fallback)
- [ ] pixelRatio y calidad adaptados por dispositivo
- [ ] Escena cargada lazy (no bloquea LCP por encima del umbral)
- [ ] fps medidos en móvil real (no solo emulación)
- [ ] Errores WebGL capturados y reportados (no en blanco para el usuario)

## Ejemplos de prompts

- "Optimiza mi escena para 60 fps en móvil: LOD, instancing y presupuesto de draw calls"
- "Crea un shader GLSL de onda para el agua y úsalo en un plano"
- "Integra mi cargador GLB en React Three Fiber con Suspense y Draco"
- "Implementa degradación automática de calidad en dispositivos con poca RAM"
- "Configura el pipeline: GLB → compresión gltf-transform → CDN → escena"

## Plantillas y recursos

- [templates/escena-r3f.tsx](templates/escena-r3f.tsx) — Canvas R3F con GLB + Draco + LOD
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel