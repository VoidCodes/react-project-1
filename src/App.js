import React, { useEffect } from "react";
import M from '../node_modules/materialize-css/dist/js/materialize.min.js';
import Courses from "./components/Courses";
import Main from "./components/Main";
import Footer from "./components/Footer";
import HeroSection from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    M.AutoInit();
    M.Sidenav.init();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Main />
      <Courses />
      <Footer />
    </div>
  );
}

export default App;