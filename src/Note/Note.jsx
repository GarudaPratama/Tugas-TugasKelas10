import { useState } from "react";

export default function Note({ note, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleChangeText(e) {
    onChange({ ...note, text: e.target.value });
  }

  function handleChangeDone(e) {
    onChange({ ...note, done: e.target.checked });
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px",
        borderRadius: "8px",
        background: "#fafafa",
        border: "1px solid #e5e7eb",
      }}
    >
      <input
        type="checkbox"
        checked={note.done}
        onChange={handleChangeDone}
      />

      <div style={{ flex: 1 }}>
        {isEditing ? (
          <>
            <input
              value={note.text}
              onChange={handleChangeText}
              style={{
                padding: "6px",
                borderRadius: "6px",
                border: "1px solid #ccc",
              }}
            />
            <button
              onClick={() => setIsEditing(false)}
              style={{ marginLeft: "6px" }}
            >
              Save
            </button>
          </>
        ) : (
          <span
            style={{
              textDecoration: note.done ? "line-through" : "none",
              color: note.done ? "#9ca3af" : "#111",
            }}
          >
            {note.text} {note.text2} {note.text3}
          </span>
        )}
      </div>

      <button
        onClick={() => setIsEditing(true)}
        style={{
          border: "none",
          background: "#e0e7ff",
          padding: "4px 8px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Edit
      </button>

      <button
        onClick={() => onDelete(note)}
        style={{
          border: "none",
          background: "#fee2e2",
          padding: "4px 8px",
          borderRadius: "6px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </div>
  );
}
