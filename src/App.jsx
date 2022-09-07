import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Recipes from "./components/Recipes";
import Favorites from "./components/Favorites";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      </Router>
  );
}

export default App;
