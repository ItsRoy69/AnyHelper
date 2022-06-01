
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import ElectricalShops from "./pages/ElectricalShops";
import MechanicShops from "./pages/MechanicShops";
import PlumberShop from "./pages/PlumberShops";
import Workers from "./pages/Workers";
import Items from "./pages/Items";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import ShopJoin from "./pages/ShopJoin";
import ShopSignIn from "./pages/ShopSignIn";
import WorkerJoin from "./pages/WorkerJoin";
import WorkerSignIn from "./pages/WorkerSignIn";
import Messages from './pages/Messages';

function App() {
  return (
    <div className="App"> 
      <Router> 
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/electricalshops" exact element={<ElectricalShops />} />
            <Route path="/mechanicshops" exact element={<MechanicShops />} />
            <Route path="/plumbershops" exact element={<PlumberShop />}  />
            <Route path="/workers" exact element={<Workers />} />
            <Route path="/items" exact element={<Items />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/signin" exact element={<SignIn />} />
            <Route path="/shopjoin" exact element={<ShopJoin />} />
            <Route path="/shopsignin" exact element={<ShopSignIn />} />
            <Route path="/workerjoin" exact element={<WorkerJoin />} />
            <Route path="/workersignin" exact element={<WorkerSignIn />} />
            <Route path="/messages" exact element={<Messages />} />
        </Routes> 
      </Router>     
    </div>
  );
}

export default App;
