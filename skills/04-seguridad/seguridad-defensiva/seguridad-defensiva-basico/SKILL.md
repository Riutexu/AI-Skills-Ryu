---
name: seguridad-defensiva-basico
description: Higiene de seguridad para tus sistemas y proyectos: hardening básico de servidores, backups, logs, gestión de secretos y respuesta inicial ante incidentes
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-defensiva"
  nivel: basico
  stack: "Linux, Windows, servicios web, backups"
---

# Seguridad defensiva — Nivel básico

## Qué hace este skill

Guía para poner en orden la defensa de tus propios sistemas sin ser experto: endurecer el servidor y las apps, mantener backups verificables, revisar logs, no filtrar secretos y saber qué hacer en los primeros minutos de un incidente.

## Cuándo usarlo

- Estás desplegando un servidor, una web o un bot y quieres arrancar defendido.
- Te da miedo "lo que pueda pasar" y necesitas un checklist concreto.
- Ocurrió algo raro (alerta del hosting, token filtrado) y no sabes por dónde empezar.

## Requisitos previos

- Acceso a un servidor (VPS, Raspberry Pi, PC) y nociones de terminal.
- Saber qué servicios expones al público.

## Workflow paso a paso

1. **Inventario**: lista qué servicios expones, en qué puertos y a quién deben ser visibles. Lo que no se necesita público, se cierra.
2. **Hardening básico del servidor**: actualizaciones al día (`apt update && apt upgrade` o equivalentes), SSH solo por llave (desactiva password login), firewall mínimo (`ufw allow <puertos_necesarios>`, denegar resto).
3. **Menos privilegios**: usuarios sin sudo salvo los necesarios; apps corriendo con su propio usuario, no root; permisos de archivos correctos.
4. **Backups 3-2-1**: 3 copias, 2 medios, 1 fuera del sitio. Prueba la restauración (un backup que no restaura no existe).
5. **Logs que lees**: activa logs del sistema y de la app; revisa a diario los eventos de autenticación (`journalctl`, `/var/log/auth.log`, o el panel del hosting).
6. **Secretos fuera del código**: variables de entorno o gestores de secretos; nunca claves en repositorios, ni en archivos de configuración versionados. Si un secreto se filtra, revócalo YA.
7. **Plan de incidente en 10 minutos**: (1) desconectar/aislar lo afectado, (2) documentar qué se vio, (3) cambiar credenciales, (4) avisar a quien corresponda, (5) restaurar desde backup verificado.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `sistema` | Servidor a endurecer | texto | sí | "Ubuntu 24.04 VPS" |
| `servicios_publicos` | Qué expones al mundo | lista | sí | "web 443, ssh 22" |
| `tipo_backup` | Estrategia actual | texto | no | "sin backups" |
| `incidente` | ¿Hay un incidente en curso? | booleano | no | false |
| `nivel_usuario` | Nivel del solicitante | texto | no | "básico" |

## Reglas y checklist

- [ ] Actualizaciones de seguridad aplicadas
- [ ] SSH con llaves, sin contraseña, puerto estándar o aleatorio
- [ ] Firewall: solo puertos necesarios
- [ ] Apps sin privilegios de root
- [ ] Backup 3-2-1 probado (restauración verificada)
- [ ] Logs revisados a diario (autenticación y errores)
- [ ] Cero secretos en repositorios; revocados los filtrados
- [ ] Plan de incidente escrito y entendido

## Ejemplos de prompts

- "Endurece mi VPS Ubuntu: firewall, SSH por llave y actualizaciones"
- "Arma mi estrategia de backups 3-2-1 y prueba de restauración"
- "Reviso mi repositorio: ¿hay secretos filtrados? ¿qué revoco?"
- "Acaba de pasar algo raro en mi servidor: guíame los primeros 10 minutos"

## Plantillas y recursos

- [templates/hardening.sh](templates/hardening.sh) — endurecimiento básico de servidor Linux
- [templates/plan-incidente.md](templates/plan-incidente.md) — plan de respuesta inicial en 10 minutos
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
