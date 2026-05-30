import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import MapComponent from "./components/MapComponent";

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
      <p className="mt-auto text-sm font-light">
        © 2026 Nikos Bakogiannis. All rights reserved.
      </p>
    </div>
  );
}

export default App;
