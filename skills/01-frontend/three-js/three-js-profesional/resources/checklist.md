# Checklist profesional: Three.js

- [ ] Presupuestos definidos (fps, draw calls, memoria GPU) y medidos en cada hito
- [ ] LOD con 2-3 niveles y distancias calibradas
- [ ] Frustum culling activo salvo excepciones justificadas
- [ ] Uniones/instancing aplicados donde haya geometría repetida
- [ ] Shaders con uniforms limitadas y sin bucles costosos
- [ ] `gltf-transform` con Draco + KTX2 aplicado y peso verificado
- [ ] Assets en CDN con caché por hash
- [ ] React Three Fiber con Suspense y estados de carga
- [ ] Context loss manejado; degradación por dispositivo probada en móvil real
- [ ] LCP sin bloquear; errores WebGL reportados