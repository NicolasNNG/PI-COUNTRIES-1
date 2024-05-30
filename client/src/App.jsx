import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./Components/LandingPage/landigPage";
import HomePage from "./Components/HomePage/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing />} />
        <Route exact path="/countries" element={<HomePage />} />
        {/* <Route path="/activities" element={<Landing />} /> */}
      </Routes>
    </div>
  );
}

export default App;
