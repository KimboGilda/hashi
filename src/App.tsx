import Header from "./components/Header"
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";

function App() {
  return (
    <>
      <Header />
      <div className="flex items-top gap-[155px] mt-24 ms-12 max-w-4xl">
        <Sidebar />
        <Mainbar />
      </div>
    </>
  )
}


export default App;