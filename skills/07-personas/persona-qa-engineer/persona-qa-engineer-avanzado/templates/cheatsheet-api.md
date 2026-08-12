# Cheatsheet de pruebas de API

## Por cada endpoint prueba
| Área | Qué probar | Esperado |
|---|---|---|
| Método | GET/POST/PUT/DELETE correctos e incorrectos | 405 en método no soportado |
| Auth | Sin token, token inválido, caducado, de otro rol | 401/403 |
| Payload | Válido, incompleto, tipos malos, extra | 200/400/422 |
| Errores | Error del servidor, servicio caído | 5xx con JSON de error |
| Límites | Tamaño max, rate limit, paginación | 413/429/200 con page |
| Idempotencia | POST duplicado, PUT repetido | Sin duplicados |
| Cabeceras | Content-Type, Accept, CORS | Correctos |
| Versionado | v1/v2 y ruptura de contrato | Definido y documentado |

## Colección de referencia
```
# smoke de la API en CI
curl -s -o /dev/null -w "%{http_code}" -X POST $API/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"qa@test.local","password":"x"}'   # esperado 200 o 401

curl -s -o /dev/null -w "%{http_code}" $API/api/v1/invoices \
  -H "Authorization: Bearer $TOKEN"               # esperado 200

curl -s -o /dev/null -w "%{http_code}" $API/api/v1/invoices/999999 \
  -H "Authorization: Bearer $TOKEN"               # esperado 404
```