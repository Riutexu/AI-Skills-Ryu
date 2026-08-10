---
name: three-js-avanzado
description: Escenas 3D con texturas y modelos GLTF/GLB, interacción con raycasting, postprocessing e instancing para escenas complejas
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "three-js"
  nivel: avanzado
  stack: "Three.js, GLTFLoader, TypeScript"
---

# Three.js — Nivel avanzado

## Qué hace este skill

Guía para crear escenas con assets reales: texturas (PBR), modelos GLTF/GLB cargados desde disco o red, interacción por raycasting (hover/click), postprocessing con EffectComposer e instancing para escenas con muchas copias.

## Cuándo usarlo

- La escena necesita modelos 3D de Blender/asset stores (GLTF/GLB).
- Necesitas interactividad: seleccionar, arrastrar o resaltar objetos con el ratón.
- Tienes decenas o cientos de objetos repetidos (árboles, partículas, edificios).

## Requisitos previos

- Nivel básico de este tema (escena, luces, bucle, OrbitControls).
- Archivos GLB o GLTF disponibles (gltf, bin + texturas) o URL pública.

## Workflow paso a paso

1. Usa `GLTFLoader` (desde `three/addons/loaders/GLTFLoader.js`) para cargar modelos; carga GLB con Draco con `DRACOLoader` si están comprimidos.
2. Normaliza la escena cargada: `gltf.scene.scale.setScalar(...)`, posición/rotación y `scene.add(gltf.scene)`.
3. Texturas PBR: `TextureLoader` (color/metalness/roughness/normal map) con `texture.colorSpace = SRGBColorSpace` en las de color.
4. Crea material PBR realista con `MeshStandardMaterial` y sus mapas; considera `MeshPhysicalMaterial` para transparencia y clearcoat.
5. Interacción: `Raycaster` (de `three`) + el ratón normalizado en `pointermove`/`click`; intersecta contra una lista de `intersectable`.
6. Feedback visual: cambia `emissive` o material en hover, muestra cursor `pointer`, restaura al salir. Recuerda `renderer.domElement.style.cursor`.
7. Postprocessing: `EffectComposer`, `RenderPass`, `UnrealBloomPass` (+ `OutputPass`); reemplaza `renderer.render` por `composer.render` en el bucle.
8. Instancing: para muchos objetos idénticos usa `InstancedMesh` (mismo geometría/material) con `setMatrixAt` por instancia; actualiza `instanceMatrix.needsUpdate`.
9. Mantén el resize: actualiza cámara, renderer y composer (el composer lleva su propio tamaño).
10. Limpia por desempaquetado de texturas y `renderer.renderLists.dispose()` si recreas escenas.
11. Mide con el panel de rendimiento de DevTools (GPU) si hay caídas de fps.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `modelos` | Rutas de archivos GLTF/GLB | lista | sí | "models/arbol.glb" |
| `compresion` | ¿GLB con Draco? | booleano | no | true |
| `interaccion` | hover/click/arrastrar | lista | no | hover + click |
| `postprocesado` | Efectos deseados | lista | no | bloom |
| `instancias` | Nº de copias repetidas | número | no | 200 |
| `texturas_pbr` | Mapas a usar | lista | no | color, normal, roughness |

## Reglas y checklist

- [ ] GLTFLoader con DRACOLoader cuando el modelo esté comprimido
- [ ] `SRGBColorSpace` en texturas de color
- [ ] Raycaster contra lista explícita de objetos (no toda la escena)
- [ ] Limpieza de estado en hover (restaurar material original)
- [ ] InstancedMesh en vez de meshes duplicados cuando aplique
- [ ] Composer con resize correcto y OutputPass al final
- [ ] FPS estables en la escena cargada

## Ejemplos de prompts

- "Carga este modelo GLB y ajústalo a escala 0.5, y añade hover que lo ilumine"
- "Añade bloom y color grading con EffectComposer a mi escena"
- "Renderiza 500 árboles iguales con InstancedMesh sin perder rendimiento"
- "Implementa selección con clic sobre objetos usando Raycaster"

## Plantillas y recursos

- [templates/escena-modelo.js](templates/escena-modelo.js) — carga de modelo GLB + raycasting + instancing
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel