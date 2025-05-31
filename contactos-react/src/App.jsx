import { useEffect, useState } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import "./App.css";

const API = "https://apicontactos.onrender.com/api/contactos";

function App() {
  const [contactos, setContactos] = useState([]);

  const cargarContactos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setContactos(data);
  };

  const agregarContacto = async (nuevo) => {
    await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(nuevo),
    });
    cargarContactos();
  };

  const eliminarContacto = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    cargarContactos();
  };

  const actualizarContacto = async (id, datos) => {
    await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });
    cargarContactos();
  };

  useEffect(() => {
    cargarContactos();
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Agenda de Contactos</h1>
      <h2>Julián Garcia Murillo - 21111123</h2>
      <ContactForm onAdd={agregarContacto} />
      <ContactList
        contactos={contactos}
        onDelete={eliminarContacto}
        onUpdate={actualizarContacto}
      />
    </div>
  );
}

export default App;
