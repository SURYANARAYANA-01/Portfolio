import React, { useEffect, useState } from "react";
import { navItems } from "../../data/portfolioData";
import { useScrollSpy } from "../../hooks/useScrollSpy";
import "./Navbar.css";

const sectionIds = navItems.map((item) => item.id);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  // Add a subtle elevated background once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick} aria-label="Suryanarayana S — home">
          <span className="navbar-logo-bracket">&lt;</span>SS
          <span className="navbar-logo-bracket">/&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar-links" aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`navbar-link ${activeId === item.id ? "navbar-link-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className={`navbar-toggle ${isOpen ? "navbar-toggle-open" : ""}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile nav panel */}
      <nav className={`navbar-mobile ${isOpen ? "navbar-mobile-open" : ""}`} aria-label="Mobile">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`navbar-mobile-link ${activeId === item.id ? "navbar-link-active" : ""}`}
            onClick={handleLinkClick}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
