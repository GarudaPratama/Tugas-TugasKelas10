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
        text: text,
        text2: text2,
        text3: text3,
        done: false,
      });
    });
  }

  function handleChangeNote(note) {
    setNotes(draft => {
      const index = draft.findIndex(item =>
        item.id === note.id
      );
      draft[index] = note;
    });
  }

  function handleDeleteNote(note) {
    setNotes(draft => {
      const index = draft.findIndex(item =>
        item.id === note.id
      );
      draft.splice(index, 1);
    });
  }

  return (
    <div>
      <h1>Note App</h1>
      <NoteForm onAddNote={handleAddNote} />
      <NoteList
        notes={notes}
        onChange={handleChangeNote}
        onDelete={handleDeleteNote}
      />
    </div>
  );
}

// Alur Create Data

// 1. Membuat state notes
// 2. Membuat function handleAddNote
// 3. Membuat function handleChangeNote
// 4. Membuat function handleDeleteNote
// 5. Membuat function NoteApp
// 6. Membuat function NoteForm
// 7. Membuat function NoteList
// 8. Membuat function Note
