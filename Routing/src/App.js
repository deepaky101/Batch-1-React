import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Router from "./Components/Router";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Router/>
      <Footer/>
    </BrowserRouter>
  );
}
