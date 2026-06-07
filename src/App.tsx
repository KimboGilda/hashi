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
    <div className="min-h-screen overflow-x-hidden flex flex-col">
      <MapComponent />
      <Header />

      <main className="flex flex-1 min-h-0 w-full max-w-6xl flex-col gap-10 px-4 pt-24 pb-8 sm:px-8 lg:flex-row lg:items-start lg:gap-[150px] lg:mx-auto">
        <Sidebar />
        <Routes>
          <Route element={<Mainbar />}>
            <Route index element={<About />} />
            <Route path="experience" element={<Experience />} />
            <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </main>
      <div className="mx-auto flex w-full max-w-6xl gap-4 px-4 pb-2 text-xs font-light sm:px-8">
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
