import React from 'react';
import { motion } from 'framer-motion';
import { Disc, Menu, Settings2 } from 'lucide-react';

const Nav = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center mix-blend-difference text-background"
    >
      <div className="flex items-center gap-3 group cursor-pointer">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          <Disc size={24} strokeWidth={1.5} />
        </motion.div>
        <span className="font-mono-technical tracking-widest text-lg">Oxide & Amber</span>
      </div>

      <div className="hidden md:flex gap-12 font-mono-technical">
        {['The Studio', 'Process', 'Catalog', 'Connect'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} className="group relative overflow-hidden">
            <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
              {item}
            </span>
            <span className="absolute top-full left-0 inline-block transition-transform duration-300 group-hover:-translate-y-full text-primary">
              {item}
            </span>
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        <button className="flex items-center gap-2 font-mono-technical border border-background/20 px-4 py-2 hover:bg-background hover:text-foreground transition-colors duration-300">
          <Settings2 size={14} />
          <span>Start Session</span>
        </button>
        <Menu size={24} className="md:hidden cursor-pointer" />
      </div>
    </motion.nav>
  );
};

export default Nav;