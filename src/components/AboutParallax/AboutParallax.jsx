import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './AboutParallax.css';

const AboutParallax = () => {
  const [ref1, isVisible1] = useScrollAnimation({ threshold: 0.2 });
  const [ref2, isVisible2] = useScrollAnimation({ threshold: 0.2 });

  return (
    <section id="about" className="about-section">
      <div className="parallax-bg parallax-1">
        <div className="parallax-content">
          <h2 className={`font-heading ${isVisible1 ? 'fade-in visible' : 'fade-in'}`} ref={ref1}>
            Herencia que se Degusta
          </h2>
          <p className={isVisible1 ? 'fade-in delay-200 visible' : 'fade-in delay-200'}>
            Nuestro compromiso es preservar la receta ancestral del nixtamal. 
            Utilizamos los granos más finos para ofrecerte una experiencia culinaria incomparable.
          </p>
        </div>
      </div>

      <div className="about-text-block container section-padding">
        <div className="text-center">
          <h3 className="section-subtitle">Nuestra Promesa</h3>
          <h2 className="section-title">Perfección en el Proceso</h2>
        </div>
        
        <div className="features-grid" ref={ref2}>
          <div className={`feature-card ${isVisible2 ? 'fade-in visible' : 'fade-in'}`}>
            <div className="feature-number">01</div>
            <h4>Maíz Selecto</h4>
            <p>Elegimos granos de cosechas exclusivas para garantizar un sabor auténtico y textura inigualable.</p>
          </div>
          
          <div className={`feature-card ${isVisible2 ? 'fade-in delay-300 visible' : 'fade-in delay-300'}`}>
            <div className="feature-number">02</div>
            <h4>Fuego Ancestral</h4>
            <p>Nuestra técnica respeta los tiempos de cocción, logrando tortillas suaves y resistentes.</p>
          </div>
          
          <div className={`feature-card ${isVisible2 ? 'fade-in delay-500 visible' : 'fade-in delay-500'}`}>
            <div className="feature-number">03</div>
            <h4>Calidez Humana</h4>
            <p>Servicio excepcional, invitando a cada comensal a formar parte de nuestra historia.</p>
          </div>
        </div>
      </div>

      <div className="parallax-bg parallax-2">
        <div className="parallax-overlay"></div>
        <div className="parallax-content">
          <h2 className="font-heading">Del Comal a su Mesa</h2>
          <a href="#products" className="btn btn-primary mt-4">Descubrir Menú</a>
        </div>
      </div>
    </section>
  );
};

export default AboutParallax;
