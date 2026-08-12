# Guía de revisión por riesgo (nivel avanzado)

Revisa SIEMPRE en este orden. Lo que está arriba bloquea; lo de abajo opina.

## 1. Seguridad (bloquea siempre)
- Entradas: ¿validadas? ¿límites? ¿inyección posible (SQL, shell, XSS)?
- Secretos: ¿en código/logs/.env versionado?
- Permisos: ¿mínimos? ¿control de acceso por entidad, no por ruta?
- Abuso: ¿rate limits? ¿coste por llamada?

## 2. Correctitud (bloquea si rompe)
- ¿El caso prometido funciona? ¿casos límite (vacío, null, máximo)?
- ¿Errores se manejan o se tragan?
- ¿Estado compartido/concurrencia?
- ¿Transacciones/rollbacks donde hay escrituras múltiples?

## 3. Rendimiento (bloquea si escala mal y es fácil de arreglar)
- N+1 queries, bucles con trabajo pesado, carga de archivos grandes
- Bloqueos de hilo/async mal usado
- Cachés sin invalidación

## 4. Mantenibilidad (no bloquea, educa)
- Nombres, duplicación sistemática, acoplamiento
- Tests que faltan para la lógica nueva
- Convenciones del proyecto

## 5. Estilo (nunca bloquea)
- Formato, reordenamientos cosméticos