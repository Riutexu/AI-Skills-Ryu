# Casos de prueba — plantilla

> Un caso por fila. Lenguaje humano primero, detalles técnicos después.

## Feature: <nombre> · Versión: <v> · Entorno: <ambiente>

| # | Tipo | DADO (contexto) | CUANDO (acción) | ENTONCES (resultado esperado) | Estado |
|---|---|---|---|---|---|
| C01 | Feliz | Usuario registrado | Inicia sesión con credenciales correctas | Entra a su panel | ✅ |
| C02 | Borde | Usuario con email de 254 caracteres | Intenta registrarse | Acepta o rechaza con mensaje claro | |
| C03 | Borde | Campo vacío | Envía formulario | Mensaje de error en el campo | |
| C04 | Error | Servidor cae | Intenta guardar | Mensaje amable + no pierde datos | |
| C05 | Negativo | Usuario no registrado | Inicia sesión | "Credenciales inválidas", sin filtrar si existe | |
| C06 | Experiencia | Usuario nuevo | Completa el flujo | Lo entiende sin ayuda y en < tiempo | |

## Tipos de caso
- **Feliz**: el camino normal del usuario.
- **Borde**: valores límite (vacío, máximo, 0, 1, null).
- **Error**: fallo controlado (red, servidor, formato).
- **Negativo**: lo que NO debe pasar (acceso no autorizado, datos corruptos).
- **Experiencia**: usabilidad y percepción (se entiende, responde rápido).