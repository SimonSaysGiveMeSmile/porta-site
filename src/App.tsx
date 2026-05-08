import Nav from './components/Nav';
import Hero from './components/Hero';
import Features from './components/Features';
import UserFlow from './components/UserFlow';
import Waitlist from './components/Waitlist';
import Footer from './components/Footer';
import LiquidGlassDefs from './components/LiquidGlassDefs';

export default function App() {
  return (
    <>
      <LiquidGlassDefs />
      <div className="aurora" aria-hidden />
      <Nav />
      <main>
        <Hero />
        <Features />
        <UserFlow />
        <Waitlist />
      </main>
      <Footer />
    </>
  );
}
