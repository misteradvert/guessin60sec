import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/HomePage";
import TeamChoosePage from "./components/pages/TeamChoosePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TeamChoose" element={<TeamChoosePage />} />
      </Routes>
    </Router>
  );
}

export default App;
