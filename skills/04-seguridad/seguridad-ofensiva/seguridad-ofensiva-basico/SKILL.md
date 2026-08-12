---
name: seguridad-ofensiva-basico
description: Introducción al hacking ético con tu agente de IA: reconocimiento, escaneo de puertos, análisis web manual y reporte de hallazgos en entornos propios o de práctica
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-ofensiva"
  nivel: basico
  stack: "bash, curl, nmap, httpx, navegador"
---

# Seguridad ofensiva — Nivel básico

## Qué hace este skill

Guía para realizar las primeras actividades ofensivas **éticas y legales**: reconocimiento pasivo y activo, escaneo de puertos y servicios, inspección manual de una aplicación web y documentación de hallazgos. Solo se practica sobre infraestructura propia o ambientes autorizados (CTF, lab, bug bounty con permiso).

## Cuándo usarlo

- Quieres aprender cómo funciona la fase de reconocimiento de un ataque real.
- Necesitas auditar tu propia web o servidor para conocer su superficie de exposición.
- Estás haciendo un CTF (TryHackMe, HackTheBox) o un lab local y quieres un flujo ordenado.

## Requisitos previos

- Entender HTTP (métodos, códigos de estado, cabeceras).
- Nociones de red (IP, puertos, DNS).
- Autorización escrita del propietario del objetivo (o ser tú el propietario).

## Workflow paso a paso

1. **Alcance y permiso**: documenta el objetivo, la autorización y las reglas (nunca fuera de alcance). Sin permiso no se escanea nada.
2. **Reconocimiento pasivo** (sin tocar el objetivo): búsqueda en motores, DNS (dig/host), `whois`, subdominios con `subfinder` o `crt.sh`. Guarda todo en notas.
3. **Reconocimiento activo**: `nmap -sV -sC -p- <ip>` con calma, `httpx` para descubrir webs y `whatweb` para detectar tecnologías.
4. **Inspección manual de la web**: cabeceras HTTP (`curl -I`), robots.txt, sitemap, formularios, IDs en URLs, cookies (HttpOnly/Secure), páginas de error que filtran información.
5. **Clasifica lo encontrado**: versión de servidor/software, puertos abiertos, tecnologías y comportamientos raros. Busca en Google/NVD si esas versiones tienen CVEs conocidos (solo lectura).
6. **Reporte ético**: documenta hallazgos con severidad (baja/media/alta), pasos para reproducir y recomendación de remediación. Entrega el reporte al propietario. NUNCA explotes ni extraigas datos: este nivel es de descubrimiento.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `objetivo` | Dominio/IP autorizado | texto | sí | "miproyecto.com" |
| `autorizacion` | ¿Tienes permiso escrito? | booleano | sí | true |
| `alcance` | Hosts y rangos permitidos | lista | sí | "www.miproyecto.com, 10.0.0.0/24" |
| `herramientas` | Herramientas disponibles | lista | no | "nmap, curl, subfinder" |
| `formato_reporte` | Formato de salida | texto | no | "markdown" |

## Reglas y checklist

- [ ] Permiso escrito del propietario (o laboratorio propio) antes de cualquier escaneo
- [ ] Reconocimiento pasivo completo antes del activo
- [ ] Escaneos con rate limit y fuera de horario punta si es ajeno
- [ ] Sin exploits, sin extracción de datos, sin brute force en este nivel
- [ ] Versiones encontradas contrastadas contra CVEs conocidos
- [ ] Reporte con severidad y remediación, no solo hallazgos
- [ ] Ninguna credencial ni dato real en el reporte

## Ejemplos de prompts

- "Hazme el reconocimiento pasivo de mi dominio personal y dime qué expone"
- "Escanea mi servidor de práctica local y clasifica los servicios encontrados"
- "Guíame en un CTF de principiantes: por dónde empiezo con esta IP"
- "Reporte de superficie de exposición de mi web, formato Markdown"

## Plantillas y recursos

- [templates/reconocimiento.sh](templates/reconocimiento.sh) — script de reconocimiento pasivo + activo ordenado
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/plantilla-reporte.md](resources/plantilla-reporte.md) — estructura de reporte ético de hallazgos
