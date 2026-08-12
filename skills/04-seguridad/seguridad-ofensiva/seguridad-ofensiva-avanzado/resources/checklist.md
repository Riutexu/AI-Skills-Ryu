# Checklist — Seguridad ofensiva nivel avanzado

## Antes
- [ ] Scope de bug bounty / contrato revisado
- [ ] Reglas de rate y datos prohibidos anotadas
- [ ] Laboratorio o entorno listo

## Fuzzing
- [ ] Directorios (ffuf/gobuster) con rate limit
- [ ] Parámetros descubiertos documentados
- [ ] Endpoints ocultos evaluados por riesgo

## Técnicas
- [ ] SQLi: detección + confirmación controlada (sin --dump sin permiso)
- [ ] XSS: clasificada (reflejado/almacenado/DOM) con PoC segura
- [ ] CSRF: formularios mutantes identificados
- [ ] AuthZ: IDs secuenciales, JWT, sesiones débiles
- [ ] Misconfig: CORS, cabeceras, debug expuestos

## Mapeo y reporte
- [ ] Cada técnica mapeada a MITRE ATT&CK
- [ ] Severidad CVSS por hallazgo
- [ ] PoC reproducible y no destructiva
- [ ] Remediación verificable por hallazgo
