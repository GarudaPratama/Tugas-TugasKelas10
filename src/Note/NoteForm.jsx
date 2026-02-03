import { useState } from "react";

export default function NoteForm({ onAddNote }) {
  const [text, setText] = useState("");
  const [text2, setText2] = useState("");
  const [text3, setText3] = useState("");

  function handleClick() {
    onAddNote(text, text2, text3);
    setText("");
    setText2("");
    setText3("");
  }

  const inputStyle = {
    flex: 1,
    padding: "8px 10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  };

  return (
    <div style={{ display: "flex", gap: "8px", marginBottom: "20px" }}>
      <input
        placeholder="Note 1"
        value={text}
        onChange={e => setText(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Note 2"
        value={text2}
        onChange={e => setText2(e.target.value)}
        style={inputStyle}
      />

      <input
        placeholder="Note 3"
        value={text3}
        onChange={e => setText3(e.target.value)}
        style={inputStyle}
      />

      <button
        onClick={handleClick}
        style={{
          padding: "8px 14px",
          borderRadius: "6px",
          border: "none",
          background: "#4f46e5",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
}
