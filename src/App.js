import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import NotFound from "./Pages/Shared/NotFound";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/home" element={<Home></Home>}></Route>
          <Route path="sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
