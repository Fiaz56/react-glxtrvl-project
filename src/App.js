import React from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Pricing/Pricing";
import Training from "./Pages/Training/Training";
import Contact from "./Pages/Contact/Contact";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/training" exact element={<Training />} />
            <Route path="/pricing" exact element={<Pricing />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </div>
  );
}

export default App;
