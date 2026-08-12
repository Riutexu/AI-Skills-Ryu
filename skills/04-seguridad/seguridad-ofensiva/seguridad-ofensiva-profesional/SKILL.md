---
name: seguridad-ofensiva-profesional
description: Operación de red team completa en entornos autorizados: planificación, movimiento lateral, escalada de privilegios, evasión documentada, zero-day-like y reporte ejecutivo + técnico
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "seguridad-ofensiva"
  nivel: profesional
  stack: "Metasploit, C2, BloodHound, Ligolo, Semgrep"
---

# Seguridad ofensiva — Nivel profesional

## Qué hace este skill

Ejecuta engagement de **red team** con la disciplina de un servicio profesional: definir objetivos de seguridad (no solo vulnerabilidades), planificar fases, moverse lateralmente y escalar privilegios con herramientas estándar de la industria, documentar cada paso y entregar un reporte ejecutivo + técnico que permita priorizar la remediación.

## Cuándo usarlo

- Te contrataron (o te dieron permiso explícito) para probar la postura de seguridad de una organización.
- Eres responsable de seguridad y quieres simular un atacante realista contra tus propios sistemas.
- Necesitas evaluar la cadena completa de ataque, no fallos aislados.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- Experiencia real con Linux/Windows, redes y al menos un framework de post-explotación.
- Contrato/alcance firmado con objetivos de seguridad explícitos.

## Workflow paso a paso

1. **Planificación**: define los objetivos de seguridad (ej. "acceder al panel de pagos"), los criterios de éxito, el equipo de contacto y las reglas de no-interrupción (no romper producción).
2. **Fase 1 — Externo**: recon + fuzzing + validación de vulnerabilidades explotables; prioriza por cadena (phishing simulado si está en alcance, explotación de servicios expuestos).
3. **Fase 2 — Interno**: pivotar desde el punto de entrada, descubrir la red interna, robar credenciales locales (SAM, mimikatz en lab), escalar privilegios (exploits del kernel en lab, misconfiguraciones reales).
4. **Movimiento lateral**: BloodHound para Active Directory (rutas de escalada), sesiones/credenciales reutilizadas, WMI/PSRemoting/SMB con autorización total del lab.
5. **Impacto y persistencia (controlados)**: demo de persistencia documentada y revertida al final; nunca dejar puertas traseras reales en sistemas de producción.
6. **Evasión documentada**: si el objetivo es medir detección, documenta qué alertas se dispararon; el objetivo no es "pasar desapercibido" sino mejorar la defensa.
7. **Reporte doble**: informe ejecutivo (riesgos en lenguaje de negocio, prioridades) + informe técnico (hallazgos, MITRE ATT&CK, IoCs, timeline, remediación verificable). Presentar y hacer seguimiento de la remediación.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `objetivos_seguridad` | Qué debe lograr el engagement | lista | sí | "acceder al panel de pagos" |
| `alcance_red` | Redes autorizadas | lista | sí | "10.0.0.0/16 (no producción)" |
| `reglas_impacto` | Qué no se puede romper | lista | sí | "sin DDoS, sin borrar datos" |
| `objetivo_deteccion` | ¿Medir capacidad de detección? | booleano | no | true |
| `contacto_emergencia` | Canal de aborto | texto | sí | "SOC +XX xxxxx" |
| `formato_reportes` | Ejecutivo + técnico | lista | no | "markdown, pdf" |

## Reglas y checklist

- [ ] Alcance y reglas de impacto firmados; canal de emergencia definido
- [ ] Cero interrupción de servicios críticos; pruebas destructivas solo en lab
- [ ] Persistencia solo para demostración, siempre revertida
- [ ] C2 y tráfico de ataque separados del tráfico de producción real
- [ ] Timeline completo de acciones para el informe
- [ ] Reporte ejecutivo + técnico con MITRE ATT&CK y CVSS
- [ ] Sesión de presentación de hallazgos y plan de remediación
- [ ] Destrucción/borrado de datos capturados al terminar

## Ejemplos de prompts

- "Planifica un engagement de red team para validar el objetivo: acceder al panel de pagos"
- "Arma la fase de escalada de privilegios en Windows de mi lab y documéntala para el informe"
- "Crea el reporte ejecutivo y técnico a partir de mi timeline de acciones"
- "Revisa mi cadena de ataque: ¿qué detecciones debería haber generado?"

## Plantillas y recursos

- [templates/plan-engagement.md](templates/plan-engagement.md) — plantilla de planificación y alcance
- [templates/timeline.md](templates/timeline.md) — timeline de acciones para el informe
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel
- [resources/reporte-red-team.md](resources/reporte-red-team.md) — estructura del informe ejecutivo + técnico
