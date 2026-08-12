# Checklist — Seguridad de IA nivel básico

## Inventario
- [ ] Entradas del modelo documentadas (chat, archivos, URLs)
- [ ] Herramientas del modelo listadas (con permisos)
- [ ] Datos a los que tiene acceso el modelo

## Entradas
- [ ] Contenido no confiable (URL/archivo) tratado como DATA
- [ ] Límites de tamaño/formato en entradas
- [ ] Sin instrucciones del usuario mezcladas con el system prompt

## Salidas
- [ ] Salida escapada antes de renderizar (sin XSS)
- [ ] URLs de la salida validadas (solo http/https, sin dominios raros)
- [ ] Comandos/código peligroso en la salida detectados

## Datos
- [ ] Cero secretos en el system prompt
- [ ] Datos al proveedor minimizados (redacción si aplica)
- [ ] PII manejada con criterio

## Herramientas
- [ ] Permisos mínimos por herramienta
- [ ] Confirmación humana en acciones destructivas
- [ ] Límites de tiempo/tamaño/gasto

## Prueba
- [ ] Prompt injection probado contra tu propia app
- [ ] Resultado documentado (qué filtró, qué no)