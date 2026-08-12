#!/bin/bash
# Reconocimiento ético ordenado — SOLO sobre hosts autorizados
# Uso: ./reconocimiento.sh <dominio>

set -euo pipefail
DOMAIN="${1:?Uso: $0 <dominio>}"
OUT="recon-$DOMAIN-$(date +%Y%m%d)"
mkdir -p "$OUT"

echo "[*] Pasivo: DNS"
dig +short "$DOMAIN" A >> "$OUT/dns.txt"
dig +short "$DOMAIN" MX >> "$OUT/dns.txt"

echo "[*] Pasivo: subdominios (crt.sh)"
curl -s "https://crt.sh/?q=%25.$DOMAIN&output=json" \
  | grep -oE '"(name_value|common_name)":"[^"]+"' \
  | sed 's/.*"//;s/".*//' | sort -u > "$OUT/subdominios.txt"

echo "[*] Activo: puertos y servicios (top 100, sin agresividad)"
nmap -sV -T3 --top-ports 100 "$DOMAIN" -oN "$OUT/nmap-top100.txt"

echo "[*] Web: cabeceras y tecnologias"
curl -sI "https://$DOMAIN" -o "$OUT/headers.txt" || true
whatweb -q "$DOMAIN" > "$OUT/whatweb.txt" 2>/dev/null || true

echo "[*] Listo. Resultados en $OUT/"
ls -1 "$OUT"
