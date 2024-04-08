import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Auth/Signup";
import Login from "./component/Auth/Login";
import Home from "./component/Home/Home";
import CompanyInfo from "./component/Home/CompanyInfo";
import Validate from "./component/Home/Validate";

function App() {

  const isLogged = JSON.parse(sessionStorage.getItem("isLog"));
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          {isLogged === "true" ? <Route path="/company-info" element={<CompanyInfo />} /> : <Route path="/login" element={<Login />} />}
          {isLogged === "true" ? <Route path="/home" element={<Home />} /> : <Route path="/login" element={<Login />} />}
          <Route path="*" element={<Validate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
