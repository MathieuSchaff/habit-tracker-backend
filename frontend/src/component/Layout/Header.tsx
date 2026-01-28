import { Link } from "@tanstack/react-router";
import "./Header.css";
import { useState, useEffect } from "react";

export const Header = () => {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // Ferme le menu si on passe en desktop
  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleChange = (e: MediaQueryListEvent) => {
      if (e.matches) setOpen(false);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <header role="banner">
      <h1>Habit tracker</h1>

      <button
        className={`hamburger ${open ? "open" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav
        id="main-nav"
        aria-label="Navigation principale"
        className={open ? "open" : ""}
      >
        <ul role="list">
          <li>
            <Link to="/" onClick={closeMenu}>
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/habits" onClick={closeMenu}>
              Habitudes
            </Link>
          </li>
          <li>
            <Link to="/profile" onClick={closeMenu}>
              Profil
            </Link>
          </li>
          <li>
            <Link to="/login" onClick={closeMenu}>
              Connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
