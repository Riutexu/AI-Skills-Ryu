import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planifica tu mes en 10 minutos",
  description:
    "Alimenta tu presupuesto una vez y deja que Finanzas Claras haga el resto: categorías, alertas y ahorro automático.",
};

/* Datos estructurados: ayudan a Google a mostrar la página como producto. */
const datosEstructurados = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Finanzas Claras",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    ratingCount: "1240",
  },
};

export default function PaginaInicio() {
  return (
    <main id="contenido">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(datosEstructurados) }}
      />

      {/* Hero: la imagen del LCP con priority y dimensiones explícitas */}
      <section className="bg-teal-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-2">
          <div>
            <p className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-semibold text-amber-800">
              Prueba de 30 días sin tarjeta
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Planifica tu mes en 10 minutos
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Conecta tus cuentas, define un presupuesto y recibe alertas antes
              de gastar de más. Tu ahorro deja de depender de tu memoria.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/registro"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent("track-conversion", {
                      detail: { evento: "click_cta_hero" },
                    })
                  )
                }
                className="rounded-lg bg-teal-700 px-6 py-3 font-semibold text-white transition hover:bg-teal-800"
              >
                Crear mi cuenta gratis
              </Link>
              <Link
                href="#planes"
                className="rounded-lg border-2 border-teal-700 px-6 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
              >
                Ver los planes
              </Link>
            </div>
          </div>
          <Image
            src="/panel-finanzas.png"
            alt="Panel de Finanzas Claras mostrando presupuesto mensual y objetivo de ahorro"
            width={900}
            height={600}
            priority
            fetchPriority="high"
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Beneficios con datos concretos */}
      <section aria-labelledby="titulo-beneficios" className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="titulo-beneficios"
            className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Olvídate de la hoja de cálculo
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Categorías automáticas
              </h3>
              <p className="mt-3 text-slate-600">
                El 92 % de tus gastos se clasifica solo. Revisas 5 minutos al
                día en lugar de cuadrar 200 líneas.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Alertas antes del descuadre
              </h3>
              <p className="mt-3 text-slate-600">
                Si un mes se va a salir de presupuesto, te avisamos antes de
                que pase, no después.
              </p>
            </article>
            <article className="rounded-2xl border border-slate-200 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-slate-900">
                Ahorro a tu ritmo
              </h3>
              <p className="mt-3 text-slate-600">
                Redondea compras, programa transferencias y mira tu objetivo
                crecer en tiempo real.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" aria-labelledby="titulo-planes" className="bg-slate-50 py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2
            id="titulo-planes"
            className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Un plan para cada etapa
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-slate-200 bg-white p-8">
              <h3 className="text-lg font-semibold text-slate-900">Básico</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                0 €<span className="text-base font-normal text-slate-500"> / mes</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>1 cuenta bancaria conectada</li>
                <li>Presupuestos mensuales</li>
                <li>Informe mensual en PDF</li>
              </ul>
              <Link
                href="/registro"
                className="mt-8 block rounded-lg border-2 border-teal-700 px-6 py-3 text-center font-semibold text-teal-700 transition hover:bg-teal-50"
              >
                Empezar gratis
              </Link>
            </article>
            <article className="rounded-2xl border-2 border-teal-700 bg-white p-8">
              <h3 className="text-lg font-semibold text-teal-700">Plus</h3>
              <p className="mt-2 text-3xl font-bold text-slate-900">
                6 €<span className="text-base font-normal text-slate-500"> / mes</span>
              </p>
              <ul className="mt-6 space-y-2 text-sm text-slate-600">
                <li>Cuentas ilimitadas y tarjetas</li>
                <li>Objetivos de ahorro automáticos</li>
                <li>Soporte prioritario por chat</li>
              </ul>
              <Link
                href="/registro?plan=plus"
                className="mt-8 block rounded-lg bg-teal-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-teal-800"
              >
                Probar Plus 30 días
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="titulo-faq" className="py-20">
        <div className="mx-auto max-w-3xl px-6">
          <h2
            id="titulo-faq"
            className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
          >
            Preguntas frecuentes
          </h2>
          <div className="mt-10 space-y-4">
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Es segura la conexión con mi banco?
              </summary>
              <p className="mt-3 text-slate-600">
                Usamos conexión de solo lectura cifrada de extremo a extremo.
                Nunca almacenamos tus credenciales bancarias.
              </p>
            </details>
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Puedo salir con mis datos?
              </summary>
              <p className="mt-3 text-slate-600">
                Sí, puedes exportar todo en CSV y borrar tu cuenta en un clic
                desde Ajustes.</p>
            </details>
            <details className="rounded-xl border border-slate-200 p-5">
              <summary className="cursor-pointer font-semibold text-slate-900">
                ¿Funciona bien en el móvil?
              </summary>
              <p className="mt-3 text-slate-600">
                La web es responsive y las aplicaciones nativas sincronizan al
                instante.</p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA final: repite el mismo destino de conversión que el hero */}
      <section className="bg-teal-900 py-20 text-center">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tu presupuesto te espera
          </h2>
          <p className="mt-4 text-lg text-teal-100">
            Crea la cuenta gratis. Tardarás menos en configurarla que en buscar
            la hoja de cálculo.
          </p>
          <Link
            href="/registro"
            onClick={() =>
              window.dispatchEvent(
                new CustomEvent("track-conversion", {
                  detail: { evento: "click_cta_cierre" },
                })
              )
            }
            className="mt-8 inline-block rounded-lg bg-amber-400 px-8 py-3 font-semibold text-teal-950 transition hover:bg-amber-300"
          >
            Empezar gratis
          </Link>
        </div>
      </section>

      {/* Formulario de captura para el plan de espera */}
      <section id="captura" className="py-20">
        <div className="mx-auto max-w-xl px-6">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            ¿Aún no lo tienes claro?
          </h2>
          <p className="mt-3 text-center text-slate-600">
            Déjanos tu email y te enviamos una demo de 3 minutos.
          </p>
          <form action="/api/leads" method="POST" className="mt-8">
            <label htmlFor="email" className="mb-1 block text-sm font-semibold text-slate-700">
              Correo electrónico
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="ana@ejemplo.com"
                className="w-full rounded-lg border border-slate-300 px-4 py-2.5 focus:border-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700/30"
              />
              <button
                type="submit"
                className="shrink-0 rounded-lg bg-teal-700 px-6 py-2.5 font-semibold text-white transition hover:bg-teal-800"
              >
                Recibir demo
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}