import { describe, it, expect } from "vitest";
import { formatearMoneda, truncarTexto } from "./utilidades";

describe("formatearMoneda", () => {
  it("formatea un numero entero como moneda con dos decimales", () => {
    expect(formatearMoneda(1000)).toBe("1.000,00");
  });

  it("formatea un numero con decimales redondeando a 2 posiciones", () => {
    expect(formatearMoneda(1234.567)).toBe("1.234,57");
  });

  it("maneja el cero sin signo negativo", () => {
    expect(formatearMoneda(0)).toBe("0,00");
  });

  it("formatea valores negativos", () => {
    expect(formatearMoneda(-42)).toBe("-42,00");
  });

  it("lanza error si la entrada no es un numero finito", () => {
    expect(() => formatearMoneda(Number.NaN)).toThrow("Entrada invalida");
    expect(() => formatearMoneda(Number.POSITIVE_INFINITY)).toThrow(
      "Entrada invalida"
    );
  });
});

describe("truncarTexto", () => {
  const base = "Lorem ipsum dolor sit amet consectetur";

  it("devuelve el texto completo si es mas corto que el limite", () => {
    expect(truncarTexto(base, 100)).toBe(base);
  });

  it("recorta al limite y agrega puntos suspensivos", () => {
    expect(truncarTexto(base, 10)).toBe(base.slice(0, 10) + "...");
  });

  it("respeta el limite minimo de 3 caracteres", () => {
    expect(truncarTexto(base, 2)).toHaveLength(3 + 3);
  });

  it("devuelve cadena vacia si el texto esta vacio", () => {
    expect(truncarTexto("", 10)).toBe("");
  });

  it("lanza error si el limite no es positivo", () => {
    expect(() => truncarTexto(base, 0)).toThrow("Limite invalido");
  });
});