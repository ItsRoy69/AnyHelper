
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ElectricalShops from "./components/ElectricalShops/ElectricalShops";
import Workers from "./components/Workers/Workers";

function App() {
  return (
    <div className="App"> 
      <Router> 
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/electricalshops" exact element={<ElectricalShops />} />
            <Route path="/workers" element={<Workers />} />
        </Routes> 
      </Router>     
    </div>
  );
}

export default App;
