import Layout from "./components/Layout";
import Home from "./pages/Home";
import NoteApp from "./Note/NoteApp"
import StudentApp from "./student/StudentApp";

function App() {
  return (
    <Layout>
      <Home />
      <NoteApp />
      <StudentApp />
    </Layout>
  );
}

export default App;
