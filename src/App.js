import { useState } from "react";
import "./App.css";
import {
  Routes,
  Route,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import Hello from "./screen/Hello";
import Collab from "./screen/collab";
import Shop from "./screen/Shop";
import Navbar from "./common/Navbar";
import Connect from "./screen/Connect";

function App() {
  return (
    <div className="bg-[#000000] relative">

      <Router>
      <Navbar />

        <Routes>
          <Route index element={<Hello />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/connect" element={<Connect />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
