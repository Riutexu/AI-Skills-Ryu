# Checklist avanzado: Three.js

- [ ] Modelos GLTF/GLB cargados con GLTFLoader (DRACOLoader si comprimido)
- [ ] Texturas con `SRGBColorSpace` en las de color
- [ ] Material PBR coherente (metalness/roughness/normal)
- [ ] Raycaster con lista explícita y feedback visual (emissive, cursor)
- [ ] Estado de hover restaurado correctamente
- [ ] EffectComposer con RenderPass + OutputPass y resize OK
- [ ] InstancedMesh para objetos repetidos
- [ ] FPS estables; sin fugas de texturas al liberar
- [ ] Funciona en móvil (pixel ratio limitado)