import './index.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutParallax from './components/AboutParallax/AboutParallax';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="texture-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <AboutParallax />
        <Products />
      </main>
      <Footer />
    </div>
  );
}

export default App;
