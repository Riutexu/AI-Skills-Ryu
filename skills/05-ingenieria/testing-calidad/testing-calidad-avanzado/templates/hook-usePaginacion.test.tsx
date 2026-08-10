import { describe, it, expect } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";
import { usePaginacion } from "./usePaginacion";

const datos = Array.from({ length: 25 }, (_, i) => ({ id: i, nombre: `Item ${i}` }));
const pagina = (offset: number, limite: number) =>
  Promise.resolve({
    items: datos.slice(offset, offset + limite),
    total: datos.length
  });

const cargadorMock = (offset: number, limite: number) => pagina(offset, limite);

describe("usePaginacion", () => {
  it("carga la primera pagina al montar", async () => {
    const { result } = renderHook(() =>
      usePaginacion({ cargador: cargadorMock, limite: 10 })
    );

    expect(result.current.cargando).toBe(true);

    await waitFor(() => expect(result.current.cargando).toBe(false));
    expect(result.current.items).toHaveLength(10);
    expect(result.current.totalPaginas).toBe(3);
    expect(result.current.paginaActual).toBe(1);
  });

  it("cambia de pagina respetando los limites", async () => {
    const { result } = renderHook(() =>
      usePaginacion({ cargador: cargadorMock, limite: 10 })
    );
    await waitFor(() => expect(result.current.cargando).toBe(false));

    act(() => {
      result.current.irAPagina(3);
    });

    await waitFor(() => expect(result.current.paginaActual).toBe(3));
    expect(result.current.items).toHaveLength(5);
    expect(result.current.items[0].nombre).toBe("Item 20");
  });

  it("no permite ir mas alla de la ultima pagina", async () => {
    const { result } = renderHook(() =>
      usePaginacion({ cargador: cargadorMock, limite: 10 })
    );
    await waitFor(() => expect(result.current.cargando).toBe(false));

    act(() => {
      result.current.irAPagina(99);
    });

    await waitFor(() => expect(result.current.paginaActual).toBe(3));
  });

  it("resetea la pagina al recargar con otro filtro", async () => {
    const { result, rerender } = renderHook(({ filtro }) =>
      usePaginacion({ cargador: cargadorMock, limite: 10, filtro })
    );

    await waitFor(() => expect(result.current.cargando).toBe(false));

    act(() => {
      result.current.irAPagina(2);
    });
    await waitFor(() => expect(result.current.paginaActual).toBe(2));

    rerender({ filtro: "buscado" });

    await waitFor(() => expect(result.current.paginaActual).toBe(1));
  });

  it("limpia el estado al desmontar sin errores", async () => {
    const { unmount } = renderHook(() =>
      usePaginacion({ cargador: cargadorMock, limite: 10 })
    );

    expect(() => unmount()).not.toThrow();
  });
});