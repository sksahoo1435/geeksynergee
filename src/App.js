import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./component/Auth/Signup";
import Login from "./component/Auth/Login";
import Home from "./component/Home/Home";
import CompanyInfo from "./component/Home/CompanyInfo";
import Validate from "./component/Home/Validate";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/company-info" element={<CompanyInfo />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Validate />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
