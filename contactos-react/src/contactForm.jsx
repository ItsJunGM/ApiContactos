import { useState } from "react";

export default function ContactForm({ onAdd }) {
    const [nombre, setNombre] = useState("");
    const [telefono, setTelefono] = useState("");
    const [correo, setCorreo] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim() || !telefono.trim() || !correo.trim()) return;
        onAdd({ nombre, telefono, correo });
        setNombre(""); setTelefono(""); setCorreo("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="Nombre" value={nombre} onChange={e => setNombre(e.target.value)} />
            <input placeholder="Teléfono" value={telefono} onChange={e => setTelefono(e.target.value)} />
            <input placeholder="Correo" value={correo} onChange={e => setCorreo(e.target.value)} />
            <button type="submit">Agregar</button>
        </form>
    );
}
