import { useContext } from "react";
import { StudentContext } from "./StudentContext";

const tableStyle = {
  width: "100%",
  borderCollapse: "collapse"
};

const thStyle = {
  border: "2px solid black",
  padding: "12px",
  background: "black",
  color: "white",
  textTransform: "uppercase"
};

const tdStyle = {
  border: "2px solid black",
  padding: "12px",
  fontWeight: "600"
};

const actionBtn = {
  marginRight: "8px",
  padding: "6px 12px",
  border: "2px solid black",
  background: "white",
  fontWeight: "700",
  cursor: "pointer"
};

export default function StudentList() {
  const { students, dispatch } = useContext(StudentContext);

  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={thStyle}>Nama</th>
          <th style={thStyle}>Umur</th>
          <th style={thStyle}>Kelas</th>
          <th style={thStyle}>Aksi</th>
        </tr>
      </thead>
      <tbody>
        {students.map(s => (
          <tr key={s.id}>
            <td style={tdStyle}>{s.nama}</td>
            <td style={tdStyle}>{s.umur}</td>
            <td style={tdStyle}>{s.kelas}</td>
            <td style={tdStyle}>
              <button
                style={actionBtn}
                onClick={() => {
                  const nama = prompt("Nama:", s.nama);
                  const umur = prompt("Umur:", s.umur);
                  const kelas = prompt("Kelas:", s.kelas);

                  if (nama && umur && kelas) {
                    dispatch({
                      type: "UPDATE_STUDENT",
                      payload: { ...s, nama, umur, kelas }
                    });
                  }
                }}
              >
                Edit
              </button>

              <button
                style={{ ...actionBtn, background: "black", color: "white" }}
                onClick={() =>
                  dispatch({ type: "DELETE_STUDENT", payload: s.id })
                }
              >
                Hapus
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
