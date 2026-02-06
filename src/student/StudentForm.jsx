import { useContext, useState } from "react";
import { StudentContext } from "./StudentContext";

const formStyle = {
  display: "flex",
  gap: "12px",
  marginBottom: "24px"
};

const inputStyle = {
  padding: "10px",
  border: "2px solid black",
  fontWeight: "600"
};

const buttonStyle = {
  padding: "10px 16px",
  border: "2px solid black",
  background: "black",
  color: "white",
  fontWeight: "700",
  cursor: "pointer"
};

export default function StudentForm() {
  const { dispatch } = useContext(StudentContext);
  const [nama, setNama] = useState("");
  const [umur, setUmur] = useState("");
  const [kelas, setKelas] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    dispatch({
      type: "ADD_STUDENT",
      payload: {
        id: Date.now(),
        nama,
        umur,
        kelas
      }
    });

    setNama("");
    setUmur("");
    setKelas("");
  }

  return (
    <form style={formStyle} onSubmit={handleSubmit}>
      <input style={inputStyle} placeholder="Nama" value={nama} onChange={e => setNama(e.target.value)} />
      <input style={inputStyle} placeholder="Umur" value={umur} onChange={e => setUmur(e.target.value)} />
      <input style={inputStyle} placeholder="Kelas" value={kelas} onChange={e => setKelas(e.target.value)} />
      <button style={buttonStyle}>Tambah</button>
    </form>
  );
}
