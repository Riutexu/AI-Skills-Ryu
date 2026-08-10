-- =============================================================
-- Dataset de ejemplo: empleados y departamentos
-- Usado por los tres niveles de sql-postgresql
-- PostgreSQL 16+
-- =============================================================

DROP TABLE IF EXISTS empleados CASCADE;
DROP TABLE IF EXISTS departamentos CASCADE;

CREATE TABLE departamentos (
    id      SERIAL PRIMARY KEY,
    nombre  VARCHAR(60) NOT NULL UNIQUE,
    ciudad  VARCHAR(60) NOT NULL
);

CREATE TABLE empleados (
    id              SERIAL PRIMARY KEY,
    nombre          VARCHAR(80) NOT NULL,
    apellido        VARCHAR(80) NOT NULL,
    email           VARCHAR(120) NOT NULL UNIQUE,
    salario         NUMERIC(10, 2) NOT NULL CHECK (salario >= 0),
    departamento_id INTEGER REFERENCES departamentos(id),
    fecha_ingreso   DATE NOT NULL
);

INSERT INTO departamentos (nombre, ciudad) VALUES
    ('Ventas',             'Madrid'),
    ('Ingeniería',         'Barcelona'),
    ('Soporte',            'Sevilla'),
    ('Recursos Humanos',   'Madrid');

INSERT INTO empleados (nombre, apellido, email, salario, departamento_id, fecha_ingreso) VALUES
    ('María', 'López',   'maria.lopez@example.com',   3200.00, 1, '2022-03-15'),
    ('Carlos', 'Ruiz',   'carlos.ruiz@example.com',   4100.00, 2, '2021-09-01'),
    ('Ana',   'Torres',  'ana.torres@example.com',    2800.00, 3, '2023-01-10'),
    ('Luis',  'Gómez',   'luis.gomez@example.com',    3550.00, 2, '2020-11-23'),
    ('Sofía', 'Navarro', 'sofia.navarro@example.com', 2450.00, 4, '2024-05-06');

-- Verificación rápida
SELECT d.nombre AS departamento, COUNT(e.id) AS empleados
FROM departamentos d
LEFT JOIN empleados e ON e.departamento_id = d.id
GROUP BY d.id, d.nombre
ORDER BY empleados DESC;