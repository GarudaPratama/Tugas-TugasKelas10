import Note from "./Note.jsx";

export default function NoteList({ notes, onChange, onDelete }) {
  return (
    <ul style={{ padding: 0 }}>
      {notes.map(note => (
        <li key={note.id} style={{ listStyle: "none", marginBottom: "10px" }}>
          <Note note={note} onChange={onChange} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}
