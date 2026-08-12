# Mapeo de técnicas a MITRE ATT&CK

Completa la tabla por cada hallazgo para que el reporte hable el idioma de los equipos defensivos.

| Técnica usada | Táctica ATT&CK | Técnica ID | Herramienta | Hallazgo |
|---|---|---|---|---|
| Fuzzing de directorios | Discovery | T1046 (Network Service Discovery) | ffuf | H-01 |
| Credenciales por fuerza bruta | Credential Access | T1110 | — | H-02 |
| Explotación de servicio expuesto | Initial Access | T1190 | — | H-03 |
| Inyección SQL | Initial Access | T1190 | sqlmap | H-04 |
| XSS | Initial Access | T1189 (Drive-by Compromise) | manual | H-05 |
| Secuestro de sesión/JWT | Credential Access | T1528 (Steal Application Access Token) | Burp | H-06 |

## Referencias
- [MITRE ATT&CK Enterprise](https://attack.mitre.org/)
- [OWASP Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [CVSS Calculator](https://www.first.org/cvss/calculator/3.1)
