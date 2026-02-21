import { useState, useEffect } from 'react';
import logo from '../../assets/TES-3.png';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <img src={logo} alt="Eduardops Logo" className="logo-img" />
        </a>

        {/* Mobile menu button */}
        <button 
          className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          <span className="hamburger"></span>
        </button>

        {/* Navigation links */}
        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>Inicio</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>Nosotros</a></li>
          <li><a href="#products" onClick={() => setIsMenuOpen(false)}>Productos</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
