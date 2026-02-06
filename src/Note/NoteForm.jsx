import { useState, useContext } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function NoteForm() {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const dispatch = useContext(NotesDispatchContext);

  function handleAdd() {
    if (!text.trim() || !name.trim()) return;

    dispatch({
      type: "ADD_NOTE",
      note: {
        id: Date.now(),
        name,
        text,
        done: false,
      },
    });

    setName("");
    setText("");
  }

  return (
    <div style={{ display: "flex", gap: "10px", marginBottom: "24px" }}>
      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        style={{
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          fontSize: "14px",
          outline: "none",
          width: "120px",
        }}
      />

      <input
        placeholder="Write a note..."
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          flex: 1,
          padding: "12px 14px",
          borderRadius: "10px",
          border: "1px solid #e5e7eb",
          fontSize: "14px",
          outline: "none",
        }}
      />

      <button
        onClick={handleAdd}
        style={{
          padding: "12px 18px",
          borderRadius: "10px",
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}
