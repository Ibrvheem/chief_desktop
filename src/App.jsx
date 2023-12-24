import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";

function App() {
  const location = useLocation();
  return (
    <div>
      <AnimatePresence initial={true} mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" exact element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>{" "}
      </AnimatePresence>
    </div>
  );
}

export default App;
