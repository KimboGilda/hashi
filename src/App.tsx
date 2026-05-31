import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import MapComponent from "./components/MapComponent";
import { FaGithub, FaEnvelope } from "react-icons/fa";

function App() {
  return (
    <div className="h-screen overflow-hidden flex flex-col">
      <MapComponent />
      <Header />

      <div className="flex items-top gap-[150px] mt-24 ms-12 max-w-6xl flex-1 min-h-0">
        <Sidebar />
        <Routes>
          <Route element={<Mainbar />}>
            <Route index element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
      <div className="flex gap-4 mt-auto text-xs font-light mb-2 ms-2">
        <p>© 2026 Nikos Bakogiannis. All rights reserved.</p>
        <span className="text-gray-400">|</span>
        <a
          href="https://github.com/KimboGilda"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-4 h-4" />
        </a>

        <a href="mailto:n.bakogiannis@outlook.com">
          <FaEnvelope className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

export default App;
