import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <Header />
      <div className="flex items-top gap-[150px] mt-24 ms-12 max-w-4xl">
        <Sidebar />
        <Routes>
          <Route element={<Mainbar />}>
            <Route index element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
