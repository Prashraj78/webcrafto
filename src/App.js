import About from './Components/About/About';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Herosection/Hero';
import Nav from './Components/Navbar/Nav';
import Slider from './Components/Slider/Slider';
import Exchanges from './Components/SupportedExchange/Exchanges';
import Testino from './Components/Testimonial/Testino';

function App() {
  return (
    <div >
      <Nav/>
      <Hero/>
      <Slider/>
      <About/>
      <Testino/>
      <Exchanges/>
      <Faq/>
      <Footer/>
    </div>
  );
}

export default App;
