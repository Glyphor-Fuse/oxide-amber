import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Footer from './components/Footer';
import GrainOverlay from './components/GrainOverlay';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-serif selection:bg-primary/30 selection:text-foreground overflow-x-hidden">
      <GrainOverlay />
      <Nav />
      <main>
        <Hero />
        <Process />
        <Showcase />
      </main>
      <Footer />
    </div>
  );
}

export default App;