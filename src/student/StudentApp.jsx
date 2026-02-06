import { useImmerReducer } from "use-immer";
import { StudentContext } from "./StudentContext";
import { studentReducer } from "./StudentReducer";
import StudentForm from "./StudentForm";
import StudentList from "./StudentList";

export default function StudentApp() {
  const [students, dispatch] = useImmerReducer(studentReducer, []);

  return (
    <StudentContext.Provider value={{ students, dispatch }}>
      <h2>Manajemen Data Siswa</h2>
      <StudentForm />
      <StudentList />
    </StudentContext.Provider>
  );
}
