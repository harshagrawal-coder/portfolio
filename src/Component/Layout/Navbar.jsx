import React from "react";
import { Button } from "../Button";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#intro", label: "Intro" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

const Navbar = () => {
  const [ismobilemenuopen, setismobilemenuopen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between gap-1.5">
        <a className="text-xl font-bold tracking-tight hover:text-primary">
          <span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-4 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground rounded-full hover:bg-surface"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
        {/* contact me button */}
        <div className="hidden md:block">
          <Button>Contact Me</Button>
        </div>
        {/* Mobile menu  button */}
        <Button
          className="md:hidden p-2 text-foreground "
          onClick={() => setismobilemenuopen((prev) => !prev)}
        >
          {ismobilemenuopen ? <X size={24} /> : <Menu size={24} className="" />}
        </Button>
      </nav>
      {/* mobile menu */}
      {ismobilemenuopen && (
        <div className="md:hidden my-2 w-full glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4 ">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={() => setismobilemenuopen(false)}
                className="text-lg text-muted-foreground hover:text-foreground py-2"
              >
                {link.label}
              </a>
            ))}
            <Button onClick={() => setismobilemenuopen(false)}>
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
