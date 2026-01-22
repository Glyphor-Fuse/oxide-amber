import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Texture & Light Leak */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(217,119,6,0.05),transparent_50%)]" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_80%_70%,rgba(146,64,14,0.08),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono-technical text-primary mb-6 block">Mastering • Lacquer • Pressing</span>
            <h1 className="text-7xl md:text-9xl mb-8 leading-[0.9] italic">
              The Physical <br />
              <span className="not-italic text-accent">Ritual</span> of Sound.
            </h1>
            <p className="max-w-md text-xl text-muted-foreground leading-relaxed mb-10">
              Heritage analog engineering for the modern ear. We translate digital clarity into the warmth of oxide and amber.
            </p>
            
            <div className="flex items-center gap-8">
              <button className="bg-foreground text-background px-8 py-4 font-mono-technical hover:bg-primary transition-colors duration-500">
                Book a Lathe Session
              </button>
              <button className="font-mono-technical border-b border-foreground/30 py-4 hover:border-primary transition-colors duration-500">
                View Lab Specs
              </button>
            </div>
          </motion.div>
        </div>

        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="relative w-full aspect-[4/5] overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000 group"
          >
            <img 
              src="///IMG:vintage recording studio analog equipment tape machine|portrait|high-contrast///" 
              alt="Studio"
              className="object-cover w-full h-full scale-110 group-hover:scale-100 transition-transform duration-[2s]"
            />
            <div className="absolute inset-0 border-[20px] border-background/10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 font-mono-technical text-background/80 bg-black/20 backdrop-blur-sm p-4">
              SESSION LOG: 04.22.74 <br />
              MASTERING CHAIN: REVOX PR99
            </div>
          </motion.div>
          
          {/* Mechanical Floating Element */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute -right-12 top-24 w-48 h-48 border border-accent/20 rounded-full flex items-center justify-center p-8 text-accent opacity-50 hidden lg:flex"
          >
            <div className="border border-accent/20 rounded-full w-full h-full animate-spin-slow flex items-center justify-center">
               <span className="font-mono-technical text-[8px] text-center">ANALOG MASTERING SINCE 1974</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;