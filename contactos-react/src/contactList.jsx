export default function ContactList({ contactos, onDelete, onUpdate }) {
    return (
        <ul>
            {contactos.map((c) => (
                <li key={c.id}>
                    {c.nombre} - {c.telefono} - {c.correo}
                    <button onClick={() => onDelete(c.id)}>❌</button>
                </li>
            ))}
        </ul>
    );
}
