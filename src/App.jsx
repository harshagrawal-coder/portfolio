import React from "react";

import Hero from "@/Component/Section/Hero";
import About from "@/Component/Section/About";
import Projects from "@/Component/Section/Projects";
import Contact from "@/Component/Section/Contact";
import Testimonial from "@/Component/Section/Testimonial";
import Experience from "@/Component/Section/Experience";
import Navbar from "./Component/Layout/Navbar";
const App = () => {
  return (
    <>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />

        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonial />
          <Contact />
        </main>
      </div>
    </>
  );
};

export default App;
