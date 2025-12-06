import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/pages/HomePage";
import TeamChoosePage from "./components/pages/TeamChoosePage";
import CardPlayPage from './components/pages/CardPlayPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/TeamChoose" element={<TeamChoosePage />} />
        <Route path="/CardPlay" element={<CardPlayPage />} />
      </Routes>
    </Router>
  );
}

export default App;
