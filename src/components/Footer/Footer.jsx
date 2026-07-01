import React from "react";
import { profile } from "../../data/portfolioData";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span className="footer-logo">&lt;SS/&gt;</span>
        <p className="footer-text">
          © {year} {profile.name}.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
