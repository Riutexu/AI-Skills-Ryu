---
name: web-cybersecurity-profesional
description: Seguridad de producción: GDPR/LGPD, auditorías Semgrep/CodeQL, CI seguro con gitleaks y dependabot, threat modeling STRIDE, cifrado y zero trust
license: MIT
compatibility: opencode
metadata:
  familia: "04-seguridad"
  tema: "web-cybersecurity"
  nivel: profesional
  stack: "Semgrep, CodeQL, gitleaks, OWASP ZAP, CI/CD"
---

# Ciberseguridad web — Nivel profesional full stack

## Qué hace este skill

Guía para operar la seguridad como un equipo senior: cumplimiento de normativas de protección de datos (GDPR/LGPD), auditorías con análisis estático (Semgrep, CodeQL), seguridad integrada en CI/CD (gitleaks, dependabot, SBOM), threat modeling (STRIDE), cifrado en tránsito y reposo, y principios zero trust.

## Cuándo usarlo

- El producto maneja datos personales y requiere cumplimiento normativo.
- Quieres que la seguridad sea parte del pipeline, no un paso manual.
- Necesitas un modelo de amenazas para una arquitectura nueva o un cambio grande.

## Requisitos previos

- Niveles básico y avanzado de este tema.
- CI/CD con GitHub Actions y un repo con historial de despliegues.
- Deseable: alguien con acceso a producción para aplicar políticas.

## Workflow paso a paso

1. **Mapa de datos (GDPR/LGPD)**: inventaría qué datos personales se recogen, su base legal, retención y flujo; documenta el derecho al olvido/borrado y el consentimiento.
2. **Threat modeling**: usa STRIDE por flujo (autenticación, pagos, búsqueda) y registra riesgos con mitigación o aceptación explícita.
3. **Análisis estático en CI**: integra Semgrep (reglas OWASP, JS/TS) y/o CodeQL en el flujo: falla en findings críticas en PRs.
4. **Secretos en el pipeline**: `gitleaks` (hooks pre-commit y CI) + `dependabot` para dependencias + `npm audit`. Detecta secretos en el historial de git antes de migrar a público.
5. **AWS KMS/… cifrado en reposo** para BD y backups; cifra con claves rotadas (nunca claves embebidas). En tránsito ya TLS 1.2+ con HSTS.
6. **Zero trust**: no confiar en red interna: auth en cada servicio, segmentación, mínimo privilegio en IAM/roles de la BD, políticas de acceso basadas en identidad.
7. **Pentesting periódico**: OWASP ZAP en QA (DAST automatizado) y revisión manual anual; corrige findings y documenta.
8. **Incidentes**: procedimiento de respuesta: detección → contención → erradicación → notificación (72 h en GDPR si riesgo alto) → postmortem.
9. **Auditoría de dependencias**: SBOM (genera con `cyclonedx`/`syft`) y política de actualización estable.
10. **Riesgos aceptados**: lista explícita con firma del responsable y revisión trimestral.

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
|---|---|---|---|---|
| `normativa` | GDPR/LGPD/otras | lista | sí | "GDPR (UE), LGPD (BR)" |
| `ci_provider` | GitHub/GitLab | texto | no | "GitHub Actions" |
| `claves` | Gestor de secretos usado | texto | no | "Vault / SSM o platform" |
| `herramientas` | SAST/DAST a usar | lista | no | "Semgrep, ZAP" |
| `servicios` | Servicios con datos sensibles | lista | no | "api, db, worker" |
| `sla_notificacion` | Plazo de notificación legal | texto | no | "72h GDPR" |

## Reglas y checklist

- [ ] Inventario de datos personales con base legal y retención documentados
- [ ] STRIDE aplicado a los flujos críticos y registrado
- [ ] Semgrep/CodeQL en CI, con bloqueo en PRs
- [ ] gitleaks en pre-commit + CI; historial limpio de secretos
- [ ] Dependabot/npm audit activos y atendidos
- [ ] Cifrado en reposo (BD, backups) con rotación de claves
- [ ] Zero trust: auth por servicio, mínimo privilegio, segmentación
- [ ] ZAP/DAST en QA periódico y plan de respuesta a incidentes
- [ ] SBOM generado y política de vulnerabilidades

## Ejemplos de prompts

- "Audita mi repo con Semgrep OWASP y resume los findings críticos con fixes"
- "Monta un workflow CI: gitleaks, npm audit, dependabot y Semgrep"
- "Haz el threat modeling STRIDE de mi flujo de autenticación y checkout"
- "Crea el inventario de datos personales para cumplir GDPR, con retención"
- "Prepara el plan de respuesta a incidentes y la notificación de brecha"

## Plantillas y recursos

- [templates/seguridad-ci.yml](templates/seguridad-ci.yml) — workflow CI con gitleaks + Semgrep + npm audit
- [templates/.gitleaks.toml](templates/.gitleaks.toml) — configuración de detección de secretos
- [resources/checklist.md](resources/checklist.md) — lista de verificación del nivel