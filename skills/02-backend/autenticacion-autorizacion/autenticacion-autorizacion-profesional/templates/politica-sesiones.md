# Política de sesiones seguras y rotación de secretos

Política de referencia para el tratamiento de sesiones, tokens, MFA y secretos.
Adapta los valores con la letra de tu organización y documenta cada decisión en un ADR.

## 1. Cookies de sesión

| Atributo | Valor | Motivo |
| --- | --- | --- |
| Nombre | `__Host-sid` | El prefijo `__Host-` fuerza `Secure`, `Path=/` y prohíbe `Domain` |
| `HttpOnly` | Sí | El JavaScript del cliente no puede leer la cookie (robo vía XSS) |
| `Secure` | Sí | La cookie solo viaja por HTTPS |
| `SameSite` | `Strict` (navegación propia) o `Lax` (referidos externos) | Mitiga CSRF en peticiones entre sitios |
| `Max-Age` | 30 minutos de inactividad (deslizante) | Reduce el riesgo de sesión secuestrada viva |
| Rotación | Se regenera el identificador en login y cada 10 minutos | Evita session fixation y reduce la ventana de reuso |

## 2. Duración y límites

- Access token: 10 minutos como máximo.
- Refresh token: 7 días, revocable por el servidor y con rotación obligatoria en cada renovación.
- Sesiones simultáneas por usuario: máximo 5. Al superarse, se revoca la más antigua.
- Sesión inactiva: cierre automático a los 30 minutos; sesión absoluta: 12 horas.
- Cierre global de sesión disponible (revocar todas las sesiones de una cuenta).

## 3. Segundo factor (MFA/TOTP)

- Obligatorio para roles con privilegios altos (admin, finanzas); recomendado para el resto.
- Secreto TOTP: 20 bytes aleatorios, guardado cifrado (AES-256-GCM), nunca en texto plano.
- Ventana de tolerancia: 1 ventana de 30 segundos por lado.
- 10 códigos de respaldo de un solo uso, hasheados (SHA-256) en el servidor, caducidad 30 días.
- Cambio de IP, userAgent o dispositivo no conocido: reautenticación completa (contraseña + TOTP).

## 4. Auditoría de sesiones

Se registran por sesión, únicamente con los mínimos necesarios:

- Identificador de sesión, usuario, fecha de creación y última actividad.
- IP de origen (anonimizada o truncada pasado un periodo de retención) y userAgent.
- Eventos: inicio, fallo, cierre manual, revocación, refresh emitido, anomalía detectada.
- Retención: 90 días. Después se anonimizan los identificadores de sesión.
- El usuario puede consultar y revocar sus sesiones activas.

## 5. Detección de anomalías

- Cambio abrupto de IP o userAgent: exigir MFA y marcar la sesión como verificada.
- Accesos simultáneos con geolocalizaciones incompatibles: alerta y bloqueo preventivo.
- Refresh token reutilizado: revocar toda la cadena de sesiones del usuario y notificar.
- Fuerza bruta en login: bloqueo progresivo por cuenta e IP (5 fallos -> 15 minutos; 10 -> 1 hora).

## 6. Rotación de secretos

- Los secretos de firma de JWT y de cifrado de datos caducan a los 90 días.
- Publicación en solapamiento: se firma con el secreto nuevo y se verifica aceptando el nuevo y el anterior (doble clave).
- La rotación no corta sesiones activas: los tokens ya firmados siguen verificándose hasta su caducidad.
- Cada rotación queda registrada en auditoría (quién, cuándo, qué clave).
- Los secretos se inyectan desde el gestor de secretos del entorno (nunca en el repositorio).

## 7. Zero trust y mínimo privilegio

- Toda petición se autentica y autoriza de forma independiente: nunca se confía en la red interna.
- Roles con los mínimos scopes: `usuario:leer`, `usuario:escribir`, `admin:gestion`.
- Cada servicio valida el token del emisor y rechaza peticiones sin scope adecuado (403).

## 8. Cumplimiento GDPR

- Consentimiento explícito y documentado para cada uso de datos personales.
- Exportación de datos personales del usuario disponible en formato abierto (JSON/CSV).
- Derecho al olvido: borrado o anonimización completa de la cuenta, datos personales y referencias cruzadas en el plazo legal.
- Retención mínima de logs: solo lo necesario, con anonimización tras la rotación.