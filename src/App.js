import "./App.css";
import { Button, Breadcrumb } from "antd";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Routes,
  Link,
  BrowserRouter,
} from "react-router-dom";
import { Nav } from "./Components/Nav";
import { Register } from "./Components/Register";
import { Login } from "./Components/Login";

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Login/>}></Route>
      <Route path="register" element={<Register/>}></Route>
    </Routes>
  
    </>
  )
}

export default App;
