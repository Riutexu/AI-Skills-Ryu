const NIVELES = { debug: 10, info: 20, warn: 30, error: 40 };

function nivelActivo(entorno = process.env.NODE_ENV ?? "development") {
  return entorno === "production" ? "info" : "debug";
}

function formato(nivel, mensaje, contexto = {}) {
  const entrada = {
    nivel,
    tiempo: new Date().toISOString(),
    mensaje,
    ...contexto,
  };
  return JSON.stringify(entrada);
}

function registrar(entorno) {
  const minimo = NIVELES[nivelActivo(entorno)];

  return {
    debug: (mensaje, contexto = {}) => this.emitir(NIVELES.debug, "debug", mensaje, contexto),
    info: (mensaje, contexto = {}) => this.emitir(NIVELES.info, "info", mensaje, contexto),
    warn: (mensaje, contexto = {}) => this.emitir(NIVELES.warn, "warn", mensaje, contexto),
    error: (mensaje, contexto = {}, err) => {
      this.emitir(NIVELES.error, "error", mensaje, { ...contexto, stack: err?.stack });
    },
    emitir(nivel, nombre, mensaje, contexto) {
      if (nivel < minimo) return;
      // eslint-disable-next-line no-console
      console[nombre === "debug" ? "log" : nombre](formato(nombre, mensaje, contexto));
    },
  };
}

export const logger = registrar(process.env.NODE_ENV);