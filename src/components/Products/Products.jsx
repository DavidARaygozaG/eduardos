import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import './Products.css';
import TES_4 from '../../assets/TES-4.png';
import TES_6 from '../../assets/TES-6.png';
import TES_5 from '../../assets/TES-5.png';

const productsData = [
  {
    id: 1,
    name: 'Nuestros Sabores',
    desc: 'Nuestro estandarte. Suavidad excepcional y resistencia sin igual. La compañía perfecta para la alta cocina mexicana.',
    img: TES_4,
    tag: 'Clásica',
  },
  {
    id: 2,
    name: 'Nuestros Aromas',
    desc: 'Un perfil de sabor sutilmente dulce y un color radiante. Ideal para resaltar enchiladas y platillos artesanales.',
    img: TES_6,
    tag: 'Especialidad',
  },
  {
    id: 3,
    name: 'Nuestras Tradiciones',
    desc: 'Directa del molino de piedra, humectada a la perfección. La base ideal para tus preparaciones de autor.',
    img: TES_5,
    tag: 'Artesanal',
  },
];

const Products = () => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id='products' className='products-section section-padding'>
      <div className='container'>
        <div className='text-center mb-5'>
          <h3 className='section-subtitle'>Alta Calidad</h3>
          <h2 className='section-title'>Nuestros Productos</h2>
        </div>

        <div className='products-grid' ref={ref}>
          {productsData.map((prod, index) => (
            <div key={prod.id} className={`product-card fade-in delay-${(index + 1) * 2}00 ${isVisible ? 'visible' : ''}`}>
              <div className='product-img-wrapper'>
                <img src={prod.img} alt={prod.name} className='product-img' />
                <span className='product-tag'>{prod.tag}</span>
              </div>
              <div className='product-info'>
                <h3 className='product-name'>{prod.name}</h3>
                <p className='product-desc'>{prod.desc}</p>
                <button className='btn btn-secondary product-btn'>Solicitar</button>
              </div>
            </div>
          ))}
        </div>

        <div className='contact-banner mt-5 fade-in delay-500 visible'>
          <div className='banner-content'>
            <h3>¿Fiestas o Eventos Especiales?</h3>
            <p>Atención personalizada de Gustavo Bautista.</p>
            <a href='https://wa.link/137mtm' className='btn btn-primary mt-3'>
              Contactar a Ventas
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
