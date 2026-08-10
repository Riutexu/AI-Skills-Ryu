import { useCallback, useEffect, useState } from "react";

interface UsePaginacionOptions {
  totalItems: number;
  itemsPorPagina?: number;
  paginaInicial?: number;
}

export function usePaginacion({ totalItems, itemsPorPagina = 10, paginaInicial = 0 }: UsePaginacionOptions) {
  const [pagina, setPagina] = useState(paginaInicial);
  const totalPaginas = Math.max(1, Math.ceil(totalItems / itemsPorPagina));
  const paginaActual = Math.min(pagina, totalPaginas - 1);

  const irAPagina = useCallback((p: number) => {
    setPagina(p);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [paginaActual]);

  return {
    paginaActual,
    totalPaginas,
    itemsPorPagina,
    irAPagina,
    siguiente: () => setPagina((p) => Math.min(p + 1, totalPaginas - 1)),
    anterior: () => setPagina((p) => Math.max(p - 1, 0)),
  };
}