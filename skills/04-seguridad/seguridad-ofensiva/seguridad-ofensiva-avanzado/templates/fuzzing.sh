#!/bin/bash
# Fuzzing de rutas y parametros — SOLO en scope autorizado
# Uso: ./fuzzing.sh <url_base> <wordlist>

set -euo pipefail
BASE="${1:?Uso: $0 <url_base> <wordlist>}"
WORDLIST="${2:?Falta la wordlist}"
RATE=30

echo "[*] Directorios y archivos"
ffuf -u "$BASE/FUZZ" -w "$WORDLIST" -rate "$RATE" \
  -mc 200,201,301,401,403,500 -o fuzz-dirs.json -of json || true

echo "[*] Parámetros GET (vía reflect)"
ffuf -u "$BASE/page.php?FUZZ=1" -w "$WORDLIST" -rate "$RATE" \
  -mc all -fs 0 -o fuzz-params.json -of json || true

echo "[*] Subdominios (si aplica)"
gobuster dns -d "$(echo "$BASE" | sed 's|https\?://||')" \
  -w "$WORDLIST" -t 20 -q || true

echo "[*] Hecho: fuzz-dirs.json, fuzz-params.json"
