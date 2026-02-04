import Layout from "./components/Layout";
import Home from "./pages/Home";
import NoteApp from "./Note/NoteApp"


function App() {
  return (
    <Layout>
      <Home />
      <NoteApp />
    </Layout>
  );
}

export default App;
