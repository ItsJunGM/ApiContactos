const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

let contactos = [
    { id: 1, nombre: "Juan Pérez", telefono: "1234567890", correo: "juan@example.com" },
    { id: 2, nombre: "Ana Gómez", telefono: "0987654321", correo: "ana@example.com" }
];

app.get("/api/contactos", (req, res) => res.json(contactos));

app.post("/api/contactos", (req, res) => {
    const nuevo = { id: Date.now(), ...req.body };
    contactos.push(nuevo);
    res.status(201).json(nuevo);
});

app.put("/api/contactos/:id", (req, res) => {
    const idx = contactos.findIndex(c => c.id == req.params.id);
    if (idx >= 0) {
        contactos[idx] = { ...contactos[idx], ...req.body };
        res.json(contactos[idx]);
    } else {
        res.status(404).send("Contacto no encontrado");
    }
});

app.delete("/api/contactos/:id", (req, res) => {
    contactos = contactos.filter(c => c.id != req.params.id);
    res.status(204).send();
});

app.listen(PORT, () => console.log(`API corriendo en http://localhost:${PORT}`));
