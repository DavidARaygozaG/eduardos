import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="overlay-dark overlay-gradient"></div>
      
      <div className="hero-content container fade-in delay-200 visible">
        <div className="hero-text-box">
          <span className="hero-badge fade-in delay-300 visible">Familia & Tradición</span>
          <h1 className="hero-title fade-in delay-400 visible">
            El Arte del<br />
            <span className="text-highlight">Nixtamal</span>
          </h1>
          <p className="hero-subtitle fade-in delay-500 visible">
            Disfruta de la textura y del sabor calido de hogar.
          </p>
          
          <div className="hero-cta fade-in delay-600 visible">
            <a href="#products" className="btn btn-primary">Descubrir Menú</a>
            <a href="#about" className="btn btn-secondary">La Historia</a>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <a href="#about" className="mouse-icon">
          <div className="wheel"></div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
