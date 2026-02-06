import { useContext, useState } from "react";
import { NotesDispatchContext } from "./NoteContext";

export default function Note({ note }) {
  const dispatch = useContext(NotesDispatchContext);
  const [isEditing, setIsEditing] = useState(false);

  function handleTextChange(e) {
    dispatch({
      type: "CHANGE_TEXT",
      id: note.id,
      text: e.target.value,
    });
  }

  function handleDoneChange(e) {
    dispatch({
      type: "CHANGE_DONE",
      id: note.id,
      done: e.target.checked,
    });
  }

  function handleDelete() {
    dispatch({ type: "DELETE_NOTE", id: note.id });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "14px",
        borderRadius: "12px",
        background: "#f9fafb",
        border: "1px solid #e5e7eb",
      }}
    >
      <input type="checkbox" checked={note.done} onChange={handleDoneChange} />

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontSize: "12px",
            fontWeight: "700",
            color: "#4f46e5",
            marginBottom: "4px",
          }}
        >
          {note.name}
        </div>

        {isEditing ? (
          <input
            value={note.text}
            onChange={handleTextChange}
            style={{
              width: "100%",
              padding: "8px 10px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
            }}
          />
        ) : (
          <div
            style={{
              fontWeight: "600",
              color: note.done ? "#9ca3af" : "#111827",
              textDecoration: note.done ? "line-through" : "none",
            }}
          >
            {note.text}
          </div>
        )}
      </div>

      <button
        onClick={() => setIsEditing(!isEditing)}
        style={{
          border: "none",
          background: "#e0e7ff",
          color: "#3730a3",
          fontWeight: "600",
          padding: "6px 10px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        {isEditing ? "Save" : "Edit"}
      </button>

      <button
        onClick={handleDelete}
        style={{
          border: "none",
          background: "#fee2e2",
          color: "#991b1b",
          fontWeight: "600",
          padding: "6px 10px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}
