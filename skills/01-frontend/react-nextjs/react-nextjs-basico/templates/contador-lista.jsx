import { useState } from "react";

function Header({ titulo }) {
  return <header><h1>{titulo}</h1></header>;
}

function TaskForm({ onAdd }) {
  const [valor, setValor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const texto = valor.trim();
    if (!texto) return;
    onAdd(texto);
    setValor("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={valor}
        onChange={(e) => setValor(e.target.value)}
        placeholder="Nueva tarea"
        aria-label="Nueva tarea"
      />
      <button type="submit">Añadir</button>
    </form>
  );
}

function TaskList({ tasks, onDelete }) {
  if (tasks.length === 0) {
    return <p>Sin tareas por ahora</p>;
  }
  return (
    <ul>
      {tasks.map((tarea) => (
        <li key={tarea.id}>
          {tarea.texto}
          <button onClick={() => onDelete(tarea.id)} aria-label={`Borrar ${tarea.texto}`}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

function Contador({ inicial = 0 }) {
  const [valor, setValor] = useState(inicial);
  return (
    <div>
      <p>Valor: {valor}</p>
      <button onClick={() => setValor((v) => v + 1)}>+1</button>
      <button onClick={() => setValor((v) => v - 1)}>-1</button>
      <button onClick={() => setValor(inicial)}>Reset</button>
    </div>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [siguienteId, setSiguienteId] = useState(1);

  function addTask(texto) {
    setTasks((prev) => [...prev, { id: siguienteId, texto }]);
    setSiguienteId((id) => id + 1);
  }

  function deleteTask(id) {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }

  return (
    <main>
      <Header titulo="Mis tareas" />
      <Contador />
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} />
    </main>
  );
}