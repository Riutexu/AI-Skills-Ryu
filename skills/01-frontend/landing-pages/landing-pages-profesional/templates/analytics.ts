"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    plausible?: (...args: unknown[]) => void;
  }
}

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

/*
 * trackEvent envía el mismo evento a GA4 y a Plausible con un solo nombre.
 * Las propiedades viajan como "props" en Plausible y como parámetros
 * personalizados en GA4. Es la pieza que usan CTA, formularios y pagos.
 */
export function trackEvent(nombre: string, parametros?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  if (GA4_ID && typeof window.gtag === "function") {
    window.gtag("event", nombre, parametros ?? {});
  }
  if (PLAUSIBLE_DOMAIN && typeof window.plausible === "function") {
    window.plausible(nombre, { props: parametros ?? {} });
  }
}

/* Evento canónico de conversión: querer medir la conversión principal
   significa llamar SIEMPRE a esta función en el momento del éxito. */
export function trackConversion(origen: string) {
  trackEvent("conversion", { origen });
}

/*
 * Analytics carga GA4 y Plausible sin bloquear el render (afterInteractive)
 * y emite un pageview al cambiar de ruta en la SPA con permisos CE.
 */
export function Analytics() {
  const ruta = usePathname();

  useEffect(() => {
    trackEvent("pageview", { ruta });
  }, [ruta]);

  useEffect(() => {
    function capturarEvento(evento: Event) {
      const detalle = (evento as CustomEvent).detail as
        | { evento?: string; origen?: string }
        | undefined;
      if (detalle?.evento) {
        trackEvent(detalle.evento);
      }
      if (detalle?.origen) {
        trackConversion(detalle.origen);
      }
    }
    window.addEventListener("track-conversion", capturarEvento);
    return () => window.removeEventListener("track-conversion", capturarEvento);
  }, []);

  return (
    <>
      {GA4_ID && (
        <>
          <Script
            id="gtag-base"
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
            onLoad={() => {
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(...args: unknown[]) {
                window.dataLayer!.push(args);
              };
              window.gtag("js", new Date());
              window.gtag("config", GA4_ID);
            }}
          />
        </>
      )}
      {PLAUSIBLE_DOMAIN && (
        <Script
          id="plausible"
          data-domain={PLAUSIBLE_DOMAIN}
          src="https://plausible.io/js/script.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}