import { useImmerReducer } from "use-immer";
import NoteForm from "./NoteForm.jsx";
import NoteList from "./NoteList.jsx";
import notesReducer, {
  NotesContext,
  NotesDispatchContext,
} from "./NoteContext";

let id = 0;

const initialNotes = [
  { id: id++, text: "Learn HTML", done: false },
  { id: id++, text: "Learn CSS", done: false },
  { id: id++, text: "Learn JavaScript", done: false },
  { id: id++, text: "Learn React", done: false },
];

export default function NoteApp() {
  const [notes, dispatch] = useImmerReducer(notesReducer, initialNotes);

  return (
    <NotesContext.Provider value={notes}>
      <NotesDispatchContext.Provider value={dispatch}>
        <div
          style={{
            maxWidth: "520px",
            margin: "40px auto",
            padding: "24px",
            borderRadius: "16px",
            background: "#ffffff",
            boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
            fontFamily: "Inter, system-ui, sans-serif",
          }}
        >
          <h1
            style={{
              fontSize: "28px",
              fontWeight: "800",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            Note App
          </h1>

          <NoteForm />
          <NoteList />
        </div>
      </NotesDispatchContext.Provider>
    </NotesContext.Provider>
  );
}
