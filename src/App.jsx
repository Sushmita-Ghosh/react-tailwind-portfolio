import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
function App() {
  return (
    <div className="flex justify-center flex-col items-center w-[100vw]">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
