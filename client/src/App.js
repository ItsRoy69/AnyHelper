
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import ElectricalShops from "./components/ElectricalShops/ElectricalShops";
import MechanicShops from "./components/MechanicShops/MechanicShops";
import PlumberShop from "./components/PlumberShop/PlumberShops";
import Workers from "./components/Workers/Workers";
import Items from "./components/Items/Items";
import SignUp from "./components/SignUp/SignUp";
import SignIn from "./components/SignUp/SignIn";
import ShopJoin from "./components/ShopJoin/ShopJoin";
import ShopSignIn from "./components/ShopSignIn/ShopSignIn";
import WorkerJoin from "./components/WorkerJoin/WorkerJoin";
import WorkerSignIn from "./components/WorkerSignIn/WorkerSignIn";

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
        </Routes> 
      </Router>     
    </div>
  );
}

export default App;
