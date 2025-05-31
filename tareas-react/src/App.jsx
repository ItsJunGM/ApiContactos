import React, { useState, useEffect } from "react";
import TaskForm from "./TaskForm";
import TaskList from "./TaskList";
import "./App.css";
// URL de la API REST
// Asegúrate de que el servidor esté corriendo en http://localhost:3000
const API = "http://localhost:3000/api/tareas";
function App() {
  const [tareas, setTareas] = useState([]);
  const cargarTareas = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTareas(data);
  };
  const agregarTarea = async (titulo) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ titulo }),
    });
    cargarTareas();
  };
  const eliminarTarea = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    cargarTareas();
  };
  const cambiarEstado = async (id, completado) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completado }),
    });
    cargarTareas();
  };
  useEffect(() => {
    cargarTareas();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>          Gestor de Tareas</h1>
      <h2>Julián Garcia Murillo - 21111123</h2>
      <TaskForm onAdd={agregarTarea} />
      <TaskList
        tareas={tareas}
        onDelete={eliminarTarea}
        onToggle={cambiarEstado}
      />
    </div>
  );
}

export default App; 
