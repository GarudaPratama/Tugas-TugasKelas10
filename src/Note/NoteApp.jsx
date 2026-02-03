import { useImmer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

export default function NoteApp() {
  const [notes, setNotes] = useImmer(initialNotes);

  function handleAddNote(text, text2, text3) {
    setNotes(draft => {
      draft.push({
        id: id++,
        text,
        text2,
        text3,
        done: false,
      });
    });
  }

  function handleChangeNote(note) {
    setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id);
      draft[index] = note;
    });
  }

  function handleDeleteNote(note) {
    setNotes(draft => {
      const index = draft.findIndex(item => item.id === note.id);
      draft.splice(index, 1);
    });
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6fb",
        padding: "40px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          background: "#fff",
          padding: "24px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "24px",
            color: "#333",
          }}
        >
          📝 Note App
        </h1>

        <NoteForm onAddNote={handleAddNote} />

        <NoteList
          notes={notes}
          onChange={handleChangeNote}
          onDelete={handleDeleteNote}
        />
      </div>
    </div>
  );
}
