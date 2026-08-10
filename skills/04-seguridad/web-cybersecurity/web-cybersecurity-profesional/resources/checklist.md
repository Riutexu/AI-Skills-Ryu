# Checklist profesional: Ciberseguridad web

- [ ] Inventario de datos personales (base legal, retención, flujo) documentado
- [ ] Derecho al olvido/borrado y consentimiento implementados
- [ ] STRIDE aplicado a flujos críticos; riesgos registrados con mitigación/aceptación
- [ ] Semgrep/CodeQL integrados en CI con bloqueo en PRs
- [ ] gitleaks en pre-commit + CI; sin secretos en el historial
- [ ] Dependabot y npm audit activos; SBOM generado
- [ ] Cifrado en reposo con rotación de claves (BD, backups)
- [ ] Zero trust: auth por servicio, mínimo privilegio, segmentación
- [ ] ZAP (DAST) en QA periódico y pentest manual anual
- [ ] Plan de respuesta a incidentes con notificación en plazo legal