# Checklist avanzado: Ciberseguridad web

- [ ] OWASP Top 10 revisado; cada vulnerabilidad resuelta o documentada con riesgo aceptado
- [ ] XSS: salidas escapadas, DOMPurify si hay HTML dinámico
- [ ] CSP estricta (default-src 'self', object-src none, nonce/hash) con report-only primero
- [ ] CORS con allowlist y credentials; sin `*`
- [ ] SQL 100% parametrizado (o ORM); sin interpolación
- [ ] IDOR/SSRF: autorización por sesión y validación de URLs
- [ ] Rate limiting en login/registro y endpoints sensibles
- [ ] JWT con exp, aud/iss, sin datos sensibles, RFC 8725
- [ ] Secretos en env, rotación documentada, `npm audit` en CI
- [ ] Cabeceras finales verificadas (securityheaders.com)