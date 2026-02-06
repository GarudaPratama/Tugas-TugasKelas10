import { useContext } from "react";
import Note from "./Note.jsx";
import { NotesContext } from "./NoteContext";

export default function NoteList() {
  const notes = useContext(NotesContext);

  return (
    <ul style={{ padding: 0, margin: 0 }}>
      {notes.map(note => (
        <li
          key={note.id}
          style={{
            listStyle: "none",
            marginBottom: "12px",
          }}
        >
          <Note note={note} />
        </li>
      ))}
    </ul>
  );
}
