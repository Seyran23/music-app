import { Route, Routes } from "react-router-dom";
import "./App.scss";

import About from "./pages/About";
import Pricing from "./pages/Pricing";
import LogIn from "./pages/LogIn";


function App() {
  return (
    <div className="app-container">
      <div className="bg-cycle blue-cycle"></div>
      <div className="bg-cycle blue-cycle"></div>
      <Routes>
        <Route path="/"  element={<About />} />
        <Route path="/pricing"  element={<Pricing />} />
        <Route path="/login"  element={<LogIn />} />
      </Routes>
      
    </div>
  );
}

export default App;
