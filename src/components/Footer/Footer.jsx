import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="footer-logo">Eduardos</h2>
          <p className="footer-slogan">Tradición hecha tortilla.</p>
        </div>
        
        <div className="footer-links">
          <h3>Conoce más</h3>
          <ul>
            <li><a href="#hero">Inicio</a></li>
            <li><a href="#about">Nuestra Historia</a></li>
            <li><a href="#products">Productos</a></li>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h3>Visítanos</h3>
          <p>Jose Trinidad Salgado 47<br/>Ciudad de México, CP 09100</p>
          <p>Tel: (56) 1659 2915</p>
          <p>Email: chiquilawis@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tortillería Eduardos. Todos los derechos reservados. 2026</p>
      </div>
    </footer>
  );
};

export default Footer;
