import './index.css';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import BentoFeatures from './components/sections/BentoFeatures';
import Pricing from './components/sections/Pricing';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/Faq';
import Footer from './components/sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-oceanic-noir">
        <Navbar />

      <main>
        <Hero />
        <Stats />
        <BentoFeatures />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Footer />
      </main>
    </div>
  );
}

export default App;