import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import Footer from "./Pages/Shared/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SignIn from "./Pages/Auth/SignIn";
import SignUp from "./Pages/Auth/SignUp";
import NotFound from "./Pages/Shared/NotFound";
import ForgetPassWord from "./Pages/Auth/ForgetPassWord";
import RequireAuth from "./Pages/Auth/RequireAuth";

function App() {
  return (
    <div className="">
      <Navbar>
        <Routes>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }
          ></Route>
          <Route
            path="/home"
            element={
              <RequireAuth>
                <Home></Home>
              </RequireAuth>
            }
          ></Route>
          <Route path="sign-in" element={<SignIn></SignIn>}></Route>
          <Route path="sign-up" element={<SignUp></SignUp>}></Route>
          <Route path="forget-password" element={<ForgetPassWord />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </Navbar>
      <Footer />
    </div>
  );
}

export default App;
