import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import WorkerRegistration from "./pages/WorkerRegistration"
import WorkerLogin from './pages/WorkerLogin';
import Blogs from './pages/Blogs';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/workerregistration" exact element={<WorkerRegistration />} />
            <Route path="/workerlogin" exact element={<WorkerLogin />} />
            <Route path="/blogs" exact element={<Blogs />} />
          </Routes>
        </div>
      </Router> 
  );
}

export default App;
