# Plan de engagement — Red team

## Información general
- **Cliente / organización:**
- **Fecha del engagement:**
- **Equipo de contacto y canal de emergencia:**

## Objetivos de seguridad (qué debe lograrse)
1. Ej.: "Acceder al panel de pagos sin credenciales válidas"
2. Ej.: "Demostrar escalada a administrador de dominio"

## Alcance
- **Hosts/redes autorizados:**
- **Fuera de alcance (prohibido):**
- **Horarios permitidos:**

## Reglas de impacto (no negociables)
- [ ] Sin DDoS ni saturación de servicios
- [ ] Sin borrado/alteración de datos de producción
- [ ] Sin persistencia real; demos revertidas al final
- [ ] Detener todo si se detecta impacto imprevisto

## Fases
| Fase | Actividad | Herramientas | Duración | Salida |
|---|---|---|---|---|
| 1 | Externo: recon + validación | nmap, ffuf, Burp | D1-D2 | Lista de vectores |
| 2 | Interno: pivot + credenciales | C2, mimikatz (lab) | D3-D4 | Ruta de acceso |
| 3 | Movimiento lateral + escalada | BloodHound, PSRemoting | D5-D6 | Objetivo alcanzado |
| 4 | Informe y presentación | — | D7 | Reportes |

## Criterios de éxito
- [ ] Objetivos 1 y 2 alcanzados (o justificación de imposibilidad)
- [ ] Timeline completo documentado
- [ ] Reporte ejecutivo + técnico entregados
