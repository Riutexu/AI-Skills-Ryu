---
name: landing-pages-profesional
description: Landing pages de producción con Next.js y React: Core Web Vitals, analytics (GA4/Plausible), A/B testing, componentes de conversión y deploy en Vercel o Netlify.
license: MIT
compatibility: opencode
metadata:
  familia: "01-frontend"
  tema: "landing-pages"
  nivel: profesional
  stack: "Next.js, React, TypeScript, Analytics"
---

# Landing page de producción con Next.js (nivel profesional)

## Qué hace este skill

Construye landing pages de producción con Next.js (App Router) y React: components de conversión (hero, prueba social, precios, formulario), SEO con Metadata API y JSON-LD, imágenes optimizadas para Core Web Vitals, analytics con GA4 o Plausible, eventos de conversión, planificación de A/B testing y despliegue en Vercel o Netlify con variables de entorno.

## Cuándo usarlo

- Cuando la landing recibe tráfico real de campañas y la conversión es un objetivo de negocio medible.
- Cuando el equipo exige métricas: Core Web Vitals en campo, eventos de conversión y experimentos.
- Cuando la página debe ser indexada y bien compartida (SEO + Open Graph + JSON-LD).
- Cuando el rendimiento se trata como requisito, no como mejora posterior.
- Cuando el stack del equipo ya es React/Next.js y la landing vive dentro de un ecosistema mayor.

## Requisitos previos

- Nivel avanzado de este tema dominado (o equivalente): Tailwind, SEO on-page, animaciones accesibles.
- Node.js 18 o superior, Next.js 14/15 con App Router y TypeScript.
- Cuentas en Vercel o Netlify y propiedades de analytics (GA4 o Plausible).
- Nociones de pruebas A/B (hipótesis, variantes, significancia) y de Lighthouse/DevTools.

## Workflow paso a paso

1. Define el objetivo de negocio y su KPI: conversion rate, leads, demos solicitadas; redáctalo como métrica única.
2. Escribe el copy final y la jerarquía de contenido: propuesta de valor, beneficios con datos, prueba social y CTA repetido.
3. Crea el proyecto: `npx create-next-app@latest` con TypeScript y App Router; estructura `app/`, `components/` y `lib/`.
4. Configura el layout base: fuentes con `next/font` (sin bloqueo de render), idioma `es` y enlace de salto al contenido.
5. Implementa la Metadata API: `metadataBase`, title con template, description, canonical, Open Graph, Twitter y robots.
6. Añade datos estructurados JSON-LD (Organization, SoftwareApplication o Service) en la página principal.
7. Construye los componentes de conversión: hero con imagen `priority`, beneficios, precios, FAQ con `details/summary` y CTA final.
8. Optimiza imágenes con `next/image`: `sizes`, `quality`, dimensiones explícitas y LCP controlado; evita librerías de imágenes pesadas.
9. Implementa el formulario de captura contra una API Route o Server Action con validación y rate limit básico.
10. Instala los helpers de analytics (`analytics.ts`): eventos pageview, click en CTA y conversión, con GA4 y Plausible desacoplados por variable de entorno.
11. Mide Core Web Vitals: verifica LCP < 2.5 s, CLS < 0.1 e INP < 200 ms con DevTools y web-vitals en campo; corrige el recurso crítico del LCP.
12. Documenta el plan de A/B testing: hipótesis, variante a cambiar (titular, color CTA, orden), métrica y tamaño muestral estimado.
13. Despliega en Vercel o Netlify: variables de entorno (NEXT_PUBLIC_GA4_ID, NEXT_PUBLIC_PLAUSIBLE_DOMAIN) y preview por branch.
14. Verifica tras el deploy: audita con Lighthouse en el dominio final, confirma eventos en el panel de analytics y corre un par de pruebas de humo (envío del formulario, redirección 404, favicon, OG en un validador).

## Parámetros del skill

| Parámetro | Descripción | Tipo | Requerido | Ejemplo |
| --- | --- | --- | --- | --- |
| objetivo | Conversión principal del negocio | string | Sí | "Lograr 100 demos agendadas al mes" |
| kpi_principal | Métrica con la que se evalúa el éxito | string | Sí | "Tasa de conversión del formulario" |
| framework | Framework y versión del proyecto | string | Sí | "Next.js 15 con App Router" |
| stack | Stack técnico completo | string | Sí | "React, TypeScript, Tailwind" |
| endpoint_analytics | Proveedor de analytics | string | No | "GA4" o "Plausible" |
| prueba_ab | Hipótesis y variantes planeadas | string | No | "A/B del titular del hero: promesa vs. dato" |
| url_referencia | Landing o sistema de referencia | url | No | "https://stripe.com/es/payments" |
| criterios_aceptacion | Umbrales de calidad y métricas aceptadas | string | No | "CWV en campo verdes y conversión trazada" |

## Reglas y checklist

- [ ] LCP < 2.5 s, CLS < 0.1 e INP < 200 ms verificados con datos de campo (CrUX o RUM).
- [ ] Lighthouse rendimiento ≥ 90 y accesibilidad ≥ 90 en el dominio final.
- [ ] La imagen del LCP usa `next/image` con `priority` y dimensiones definidas.
- [ ] Fuentes servidas con `next/font`; ninguna fuente bloquea el primer render.
- [ ] Todos los componentes interactivos emiten eventos de analytics con nombres y propiedades consistentes.
- [ ] La conversión (submit del formulario, compra, CTA) emite un evento propio `conversion` trazable en el panel.
- [ ] Secretos solo en variables de entorno; nunca en el repositorio.
- [ ] Deploy con preview por branch y dominio de producción estable.
- [ ] JSON-LD válido según el validador de schema.org.
- [ ] Plan A/B documentado con hipótesis, métrica y criterio de terminación antes de activar experimentos.

## Ejemplos de prompts

- "Crea una landing de producción en Next.js para un SaaS de facturación: hero con LCP optimizado, beneficios, precios, FAQ y formulario de demo con evento de conversión."
- "Configura analytics en la landing: carga GA4 y Plausible sin bloquear el render, y emite evento al hacer click en el CTA y al enviar el formulario."
- "Audita esta página: mide Core Web Vitals, identifica qué recurso marca el LCP y propón los cambios de código para bajarlo de 2.5 s."
- "Diseña un experimento A/B para el hero (titular y color del botón): hipótesis, variantes, métrica de éxito y criterio de terminación de la prueba."
- "Prepara el deploy en Vercel con variables de entorno para analytics y verifica SEO, OG y JSON-LD después del despliegue."

## Plantillas y recursos

- [templates/layout.tsx](./templates/layout.tsx) — Layout raíz con Metadata API, fuentes con next/font, viewport y analytics.
- [templates/page.tsx](./templates/page.tsx) — Página de ejemplo con componentes de conversión, imágenes optimizadas y JSON-LD.
- [templates/analytics.ts](./templates/analytics.ts) — Componente y helpers de analytics (GA4 y Plausible) con eventos de conversión.
- [resources/checklist.md](./resources/checklist.md) — Lista de verificación de calidad del nivel profesional.