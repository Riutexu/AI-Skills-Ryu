"""Filtro de salidas del LLM — referencia mínima para apps con IA.

Uso: pasa la salida del modelo por validate_salida() antes de renderizar/ejecutar.
"""
import re
from html import escape
from urllib.parse import urlparse

URLS_PELIGROSAS = (".onion",)

def validar_url(url: str) -> bool:
    try:
        esquema = urlparse(url).scheme.lower()
        dominio = urlparse(url).netloc.lower()
    except Exception:
        return False
    if esquema not in ("http", "https"):
        return False
    if any(dominio.endswith(d) for d in URLS_PELIGROSAS):
        return False
    return True

def validate_salida(texto: str, contexto="html") -> dict:
    """Devuelve {ok, motivo, texto_limpio}. Adapta reglas a tu caso."""
    reglas = {
        "urls_inseguras": re.findall(r"https?://[^\s\"'<>]+", texto),
        "comandos": re.findall(r"(rm\s+-rf|curl\s+-o|wget\s+-O|base64\s+-d)", texto),
        "pii_evidente": re.findall(r"\b[\w.+-]+@[\w-]+\.[\w.]+\b", texto),
    }
    problemas = []
    for u in reglas["urls_inseguras"]:
        if not validar_url(u):
            problemas.append(f"URL insegura: {u}")
    if reglas["comandos"]:
        problemas.append(f"Comando peligroso detectado: {reglas['comandos']}")
    if reglas["pii_evidente"]:
        problemas.append("Posible PII en la salida (revisar/redactar)")

    limpio = texto
    if contexto == "html":
        limpio = escape(limpio)

    return {
        "ok": not problemas,
        "motivo": "; ".join(problemas) or "ok",
        "texto_limpio": limpio if not problemas else "",
    }

if __name__ == "__main__":
    ejemplo = 'Interesante: visita http://malo.onion/datos y ejecuta rm -rf ~ doc@fine.com'
    print(validate_salida(ejemplo))