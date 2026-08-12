# Mapeo de controles a técnicas D3FEND

Usa el vocabulario de D3FEND (MITRE) para nombrar y comparar tus controles de detección.

| Control propio | Técnica D3FEND | Qué detecta | Ejemplo de evento |
|---|---|---|---|
| Logs de auth centralizados | D3-LAA: Log Analysis | logins fallidos, cambios de cuentas | Failed password x10 |
| FIM (Wazuh syscheck) | D3-FIA: File Integrity Analysis | modificación de binarios/archivos críticos | /etc/passwd modified |
| Análisis de tráfico (proxy/DNS logs) | D3-NTA: Network Traffic Analysis | exfiltración, C2, DNS raro | DNS a dominio nuevo |
| Análisis de procesos (Velociraptor) | D3-PEA: Process Execution Analysis | procesos inusuales, inyección | powershell desde descargas |
| Baselines de comportamiento | D3-BAA: Behavioral Analytics | desviaciones del normal | acceso a las 3am |

## Reglas de oro
1. Cada control debe responder: ¿qué técnica ATT&CK detectaría? Si ninguna, es cosmético.
2. Prioriza los controles por tu threat model (¿qué te van a atacar?).
3. Prueba cada control con una simulación (el red team es tu mejor aliado).

## Referencias
- [MITRE D3FEND](https://d3fend.mitre.org/)
- [MITRE ATT&CK](https://attack.mitre.org/)
- [NIST CSF 2.0](https://www.nist.gov/cyberframework)
