module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      [
        "feat",
        "fix",
        "docs",
        "style",
        "refactor",
        "perf",
        "test",
        "build",
        "ci",
        "chore",
        "revert"
      ]
    ],
    "type-case": [2, "always", "lower-case"],
    "subject-case": [0, "never"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 72],
    "scope-case": [2, "always", "lower-case"],
    "body-leading-blank": [1, "always"],
    "footer-leading-blank": [1, "always"]
  },
  prompt: {
    messages: {
      type: "Selecciona el tipo de cambio"
    },
    types: {
      feat: { description: "Nueva funcionalidad", title: "Features" },
      fix: { description: "Correccion de un bug", title: "Bug Fixes" },
      docs: { description: "Cambios solo en documentacion", title: "Documentation" },
      style: { description: "Formato; no cambia logica", title: "Styles" },
      refactor: { description: "Refactor sin cambiar comportamiento", title: "Code Refactoring" },
      perf: { description: "Mejora de rendimiento", title: "Performance" },
      test: { description: "Agregar o corregir tests", title: "Tests" },
      build: { description: "Cambios en build o dependencias", title: "Builds" },
      ci: { description: "Cambios en CI/configuracion", title: "Continuous Integration" },
      chore: { description: "Tareas de mantenimiento", title: "Chores" },
      revert: { description: "Revertir un commit", title: "Reverts" }
    }
  }
};