import { useImmerReducer } from "use-immer";
import { StudentContext } from "./StudentContext";
import { studentReducer } from "./StudentReducer";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

const containerStyle = {
  maxWidth: "900px",
  margin: "40px auto",
  padding: "32px",
  border: "3px solid black",
  fontFamily: "Arial, sans-serif"
};

const titleStyle = {
  fontWeight: "800",
  marginBottom: "24px",
  textTransform: "uppercase"
};

export default function StudentApp() {
  const [students, dispatch] = useImmerReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      <div style={containerStyle}>
        <h2 style={titleStyle}>Manajemen Data Siswa</h2>
        <StudentForm />
        <StudentList />
      </div>
    </StudentContext.Provider>
  );
}
