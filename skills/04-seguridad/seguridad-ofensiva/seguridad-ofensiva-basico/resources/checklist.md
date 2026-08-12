# Checklist — Seguridad ofensiva nivel básico

## Autorización
- [ ] Objetivo definido y documentado
- [ ] Permiso escrito del propietario (o lab propio)
- [ ] Alcance (hosts/redes) anotado y respetado

## Reconocimiento pasivo
- [ ] DNS (dig), whois, subdominios (crt.sh/subfinder)
- [ ] Notas organizadas por host

## Reconocimiento activo
- [ ] nmap -sV -sC sobre puertos relevantes
- [ ] Tecnologías detectadas (whatweb/httpx)
- [ ] Cabeceras HTTP, robots.txt, sitemap revisados

## Inspección web
- [ ] Formularios y entradas mapeadas
- [ ] Cookies revisadas (HttpOnly/Secure/SameSite)
- [ ] Páginas de error que filtran información

## Reporte
- [ ] Hallazgos con severidad y pasos de reproducción
- [ ] Remediación sugerida por hallazgo
- [ ] Sin credenciales ni datos reales en el reporte
