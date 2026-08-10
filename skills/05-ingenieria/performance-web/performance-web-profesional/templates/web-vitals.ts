import { onCLS, onINP, onLCP } from "web-vitals";

function enviarMetrica(nombre: string, valor: number, rating: "good" | "needs-improvement" | "poor") {
  const body = {
    nombre,
    valor: Math.round(valor),
    rating,
    ruta: location.pathname,
    navegador: navigator.userAgentData?.brands?.[0]?.brand ?? "unknown",
    vista: document.visibilityState,
  };

  if (navigator.sendBeacon) {
    navigator.sendBeacon("/api/v1/vitals", JSON.stringify(body));
  } else {
    fetch("/api/v1/vitals", { method: "POST", body: JSON.stringify(body), keepalive: true });
  }
}

onLCP((m) => enviarMetrica("LCP", m.value, m.rating));
onCLS((m) => enviarMetrica("CLS", m.value, m.rating));
onINP((m) => enviarMetrica("INP", m.value, m.rating));