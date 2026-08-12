---
name: seguridad-ofensiva-avanzado
description: Ataques controlados sobre apps web y servicios en entornos autorizados: OWASP Top 10 explotables vs corregidos, mapeo a MITRE ATT&CK y técnicas con ffuf, sqlmap y Burp
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-ofensiva"
  nivel: avanzado
  stack: "Burp Suite, ffuf, sqlmap, nuclei, gobuster"
---

# Seguridad ofensiva — Nivel avanzado

## Qué hace este skill

Te lleva de "descubrir" a "demostrar con control": explotar vulnerabilidades OWASP Top 10 en laboratorios autorizados (DVWA, Juice Shop, CTFs, scope de bug bounty), mapear cada técnica a tácticas de MITRE ATT&CK y documentar prueba de concepto (PoC) reproducible.

## Cuándo usarlo

- Estás en un bug bounty o pentest autorizado y encontraste algo que parece explotable.
- Necesitas confirmar un hallazgo con una PoC mínima y no destructiva.
- Quieres aprender las técnicas ofensivas reales sobre laboratorios locales.

## Requisitos previos

- Nivel básico de este tema completado (reconocimiento y reporte).
- Laboratorio propio (DVWA, OWASP Juice Shop) o scope con reglas claras.
- Conocimiento de HTTP intermedio (sesiones, CSRF, JSON, multipart).

## Workflow paso a paso

1. **Confirma el alcance** una vez más; en bug bounty, respeta los límites de rate y datos prohibidos.
2. **Fuzzing de directorios y parámetros**: `ffuf` sobre rutas, `gobuster` sobre subdominios; detecta endpoints ocultos y parámetros que alteran el comportamiento.
3. **Inyección SQL**: detecta con payloads de error/boolean; confirma con `sqlmap --batch` solo sobre el parámetro vulnerable, sin `--dump` salvo autorización explícita.
4. **XSS y CSRF**: clasifica reflejado/almacenado/DOM; escribe PoC de XSS que pruebe el impacto (cookie HttpOnly, CSRF token) sin dañar usuarios reales.
5. **Fallas de autenticación y acceso**: pruebo de IDs/IDs de sesión débiles, JWT sin verificar firma, tokens predecibles; documenta con capturas de tráfico.
6. **Mapeo MITRE ATT&CK**: asocia cada técnica a su táctica (Initial Access, Credential Access, Impact...) para que el reporte hable el idioma de los equipos defensivos.
7. **PoC + remediación**: cada hallazgo lleva pasos reproducibles, severidad (CVSS) y la corrección concreta. El objetivo es que el dueño pueda validar y arreglar.

## Mapa rápido de técnicas

| OWASP | Técnica típica | Táctica MITRE ATT&CK |
|---|---|---|
| A01 Broken Access Control | IDs en secuencia, rutas sin auth | Initial Access / Defense Evasion |
| A03 Injection (SQL) | sqlmap sobre parámetros | Initial Access |
| A05 Misconfiguration | cabeceras, CORS abierto, debug expuesto | Discovery |
| A08 Integrity (JWT) | token sin verificar firma | Credential Access |
| A09 Logging | falta de logs de eventos de seguridad | (ausencia de Visibility) |

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `objetivo` | Host autorizado | texto | sí | "lab.local/juice-shop" |
| `scope_bugbounty` | Reglas del programa | texto | no | "prohibido dump de BD" |
| `categorias` | OWASP categorías a probar | lista | no | "A01, A03, A05" |
| `herramientas` | Disponibles | lista | no | "ffuf, sqlmap, Burp" |
| `limite_datos` | ¿Puedes leer datos? | booleano | sí | false |
| `mapping_attck` | ¿Generar mapeo ATT&CK? | booleano | no | true |

## Reglas y checklist

- [ ] Técnicas solo en scope autorizado; `--dump` y datos reales prohibidos sin permiso explícito
- [ ] Rate limit respetado en todo fuzzing
- [ ] XSS probado con PoC de impacto, no con scripts destructivos
- [ ] Cada hallazgo con severidad CVSS + pasos de reproducción
- [ ] Cada técnica mapeada a MITRE ATT&CK
- [ ] Remediación concreta por hallazgo, verificable
- [ ] Registro de sesión completo para el reporte (sin datos personales)

## Ejemplos de prompts

- "Encuentra endpoints ocultos en mi lab con ffuf y dime cuáles merecen atención"
- "Confirma si este parámetro es SQLi y arma una PoC mínima y segura"
- "Audita la autenticación de mi app de práctica: JWT, sesiones y control de acceso"
- "Mapea estos hallazgos a MITRE ATT&CK y genera el reporte para el equipo defensivo"

## Plantillas y recursos

- [templates/fuzzing.sh](templates/fuzzing.sh) — fuzzing de rutas y parámetros con ffuf/gobuster con rate limit
- [templates/po-c-xss.html](templates/po-c-xss.html) — PoC de XSS mínima y segura para demostrar impacto
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/mapeo-attack.md](resources/mapeo-attack.md) — tabla para mapear técnicas a MITRE ATT&CK
