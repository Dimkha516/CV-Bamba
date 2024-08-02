import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Competences from "./pages/Competences";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"

// PAGES: Accueil, Compétences, Portfolio, Contact, NotFound

const App = () => {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Accueil />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  )
};

export default App;