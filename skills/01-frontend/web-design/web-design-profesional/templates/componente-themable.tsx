import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

/*
 * Componente themable: lee sus colores de tokens semánticos
 * (bg-primary, text-primary-foreground...) que el dark mode resuelve
 * cambiando solo las variables CSS del tema. No usa colores sueltos.
 */

type VariantesBoton = "primario" | "secundario" | "fantasma" | "peligro";
type TamanyosBoton = "sm" | "md" | "lg";

interface BotonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variante?: VariantesBoton;
  tamanyo?: TamanyosBoton;
}

const estilosBase = [
  "inline-flex items-center justify-center gap-2 rounded-md font-medium",
  "transition-colors duration-200",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  "disabled:pointer-events-none disabled:opacity-50",
  "select-none",
].join(" ");

const variantes: Record<VariantesBoton, string> = {
  primario: "bg-primary text-primary-foreground hover:bg-primary/90",
  secundario: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  fantasma: "bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground",
  peligro: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
};

const tamanyos: Record<TamanyosBoton, string> = {
  sm: "h-9 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-12 px-6 text-base",
};

export const Boton = forwardRef<HTMLButtonElement, BotonProps>(
  function Boton({ className, variante = "primario", tamanyo = "md", ...props }, ref) {
    return (
      <button
        ref={ref}
        className={cn(estilosBase, variantes[variante], tamanyos[tamanyo], className)}
        {...props}
      />
    );
  }
);

/*
 * Tarjeta themable: superficies y bordes vienen de tokens.
 * Usa "claro"/"oscuro" como sufijos de los tokens candentes:
 * en un design system los colores de tema viven en CSS variables.
 */
export const Tarjeta = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  function Tarjeta({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border border-border bg-card text-card-foreground shadow-sm",
          className
        )}
        {...props}
      />
    );
  }
);

/* Cambio de tema desde el componente sin parpadeo: aplica el atributo
   antes del primer render de la app. Usa sistema cuando proceda. */
export function aplicarTema(tema: "claro" | "oscuro" | "sistema") {
  const raiz = document.documentElement;
  raiz.classList.remove("dark");
  raiz.removeAttribute("data-tema");

  if (tema === "oscuro") {
    raiz.classList.add("dark");
    return;
  }
  if (tema === "sistema") {
    const conSistema = () =>
      window.matchMedia("(prefers-color-scheme: dark)").matches
        ? raiz.classList.add("dark")
        : raiz.classList.remove("dark");
    conSistema();
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", conSistema);
    return;
  }
  raiz.classList.remove("dark");
}

/*
 * Estados de la UI sobre tokens semánticos: los avisos usan
 * bg-success/warning/destructive; nunca el color de marca.
 */
export const Aviso = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement> & { nivel: "exito" | "aviso" | "error" | "info" }
>(function Aviso({ nivel, className, ...props }, ref) {
  const niveles = {
    exito: "bg-success/10 text-success",
    aviso: "bg-warning/10 text-warning",
    error: "bg-destructive/10 text-destructive",
    info: "bg-info/10 text-info",
  } as const;
  return (
    <p
      ref={ref}
      role={nivel === "error" ? "alert" : "status"}
      className={cn("rounded-md px-3 py-2 text-sm font-medium", niveles[nivel], className)}
      {...props}
    />
  );
});