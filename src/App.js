import React from "react";
import Home from "./pages/Home"
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Route from "./context/Route";
import Navbar from "./pages/Navbar";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {

 return(
  <div>
    <Navbar />
    <div>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/skills">
        <Skills />
      </Route>
      <Route path="/education">
        <Education />
      </Route>
      <Route path="/experience">
        <Experience />
      </Route>
      <Route path="/projects">
        <Projects />
      </Route>
    </div>
    <Footer />
  </div>
 )
 
}

export default App
