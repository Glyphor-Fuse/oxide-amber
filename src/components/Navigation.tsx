import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Disc, Sliders } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Process', href: '#process' },
    { name: 'Mastering', href: '#mastering' },
    { name: 'The Press', href: '#press' },
    { name: 'Archive', href: '#archive' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-in-out ${
        scrolled 
          ? 'py-4 bg-background/90 backdrop-blur-xl border-b border-primary/5 shadow-2xl' 
          : 'py-8 bg-transparent'
      }`}
    >
      {/* Scanned Texture Overlay - subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between relative z-10">
        {/* Logo / Brand */}
        <a href="/" className="flex items-center gap-4 group">
          <div className="relative flex items-center justify-center">
            <Disc className={`w-10 h-10 transition-all duration-700 ${scrolled ? 'text-accent' : 'text-primary'} animate-[spin_8s_linear_infinite]`} />
            <div className="absolute inset-0 bg-accent/20 blur-xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 opacity-0 group-hover:opacity-40" />
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-serif font-black tracking-tighter text-primary uppercase leading-none">
              Oxide <span className="text-accent">&</span> Amber
            </span>
            <span className="text-[10px] uppercase tracking-[0.3em] font-mono text-primary/40 mt-1">
              Boutique Vinyl Pressing
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link, idx) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative text-[11px] font-bold uppercase tracking-[0.25em] text-primary/60 hover:text-primary transition-colors"
              >
                <span className="inline-block mr-2 text-accent/40 font-mono">0{idx + 1}</span>
                {link.name}
                <motion.span 
                  className="absolute -bottom-2 left-0 w-0 h-[1px] bg-accent"
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </a>
            ))}
          </div>

          <div className="h-8 w-px bg-primary/10 mx-4" />

          <button className="group relative flex items-center gap-3 px-6 py-3 bg-primary text-background overflow-hidden transition-all duration-500 hover:pr-8">
            <span className="relative z-10 text-[10px] font-bold uppercase tracking-[0.2em]">Book a Session</span>
            <Sliders className="relative z-10 w-4 h-4 transition-transform duration-500 group-hover:translate-x-1" />
            <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <motion.span 
            animate={isOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-primary block origin-center transition-all" 
          />
          <motion.span 
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-8 h-[2px] bg-primary block transition-all" 
          />
          <motion.span 
            animate={isOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            className="w-8 h-[2px] bg-primary block origin-center transition-all" 
          />
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-background z-40 flex flex-col justify-center px-10 md:px-24 lg:hidden"
          >
            {/* Background Texture for Menu */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/gplay.png')]" />
            
            <div className="space-y-12 relative z-10">
              {navLinks.map((link, idx) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-baseline gap-6"
                  >
                    <span className="text-sm font-mono text-accent">0{idx + 1}</span>
                    <span className="text-5xl md:text-7xl font-serif font-black uppercase text-primary/30 group-hover:text-primary transition-all duration-500">
                      {link.name}
                    </span>
                  </a>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="pt-12 border-t border-primary/10 flex flex-col gap-6"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-primary/40 font-mono">
                  General Inquiries
                </p>
                <a href="mailto:studio@oxideamber.com" className="text-xl md:text-2xl text-primary font-serif italic hover:text-accent transition-colors">
                  studio@oxideamber.com
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
