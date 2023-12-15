import { HashRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Watch" element={<Watch />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </HashRouter>

      {/* <Home /> */}
      {/* <Watch /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </>
  );
};

export default App;

// cd PROJECTS/react-projects/netflix
