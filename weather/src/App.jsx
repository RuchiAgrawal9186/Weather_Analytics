import { Outlet } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </>
  );
}

export default App;
