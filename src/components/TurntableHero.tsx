import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Disc } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/Reveal';

const TurntableHero = () => {
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  return (
    <section className="relative min-h-[120vh] bg-background overflow-hidden flex flex-col items-center justify-center py-20 px-6">
      {/* Background Texture Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-multiply grayscale" 
        style={{ 
          backgroundImage: `url('///IMG:scanned paper texture|landscape|high-contrast///')`, 
          backgroundSize: 'cover' 
        }} 
      />

      <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
        <div className="space-y-10 order-2 lg:order-1">
          <Reveal>
            <div className="inline-flex items-center gap-4">
              <span className="px-3 py-1 text-[10px] tracking-[0.3em] uppercase border border-primary/20 text-primary/60 font-mono">
                Analog Master 742-OA
              </span>
              <div className="h-px w-12 bg-accent/30" />
            </div>
          </Reveal>
          
          <Reveal delay={0.2}>
            <h1 className="text-7xl md:text-9xl font-serif leading-[0.9] tracking-tighter text-primary">
              Oxford <br />
              <span className="italic font-light text-accent/80">& Amber</span>
            </h1>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="max-w-md text-lg md:text-xl text-primary/70 font-light leading-relaxed font-serif">
              A boutique vinyl studio dedicated to the tactile ritual of music. We capture the soul between the grooves through heritage craftsmanship.
            </p>
          </Reveal>

          <Reveal delay={0.6}>
            <div className="flex flex-wrap gap-6 pt-4">
              <Button size="lg" className="rounded-none h-16 px-10 text-base uppercase tracking-widest bg-primary text-background hover:bg-accent transition-all duration-700">
                Start Pressing
              </Button>
              <Button variant="ghost" size="lg" className="rounded-none h-16 px-8 text-base uppercase tracking-widest border border-transparent hover:border-primary/10 transition-colors">
                <Play className="mr-3 h-4 w-4 fill-primary" /> The Process
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="relative flex justify-center lg:justify-end order-1 lg:order-2">
          {/* Turntable Assembly */}
          <div className="relative w-full max-w-[450px] aspect-square md:max-w-[550px]">
            {/* Record Sleeve Underneath */}
            <motion.div 
              initial={{ x: 40, y: 40, rotate: 5 }}
              animate={{ x: 20, y: 20, rotate: -2 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute inset-0 bg-neutral-200 shadow-2xl border border-black/5"
            >
              <img 
                src="///IMG:vintage jazz album cover|square|muted///" 
                alt="Sleeve" 
                className="w-full h-full object-cover opacity-80 mix-blend-multiply"
              />
            </motion.div>

            {/* The Record */}
            <motion.div 
              style={{ rotate }}
              className="absolute inset-4 rounded-full shadow-[0_0_120px_rgba(0,0,0,0.5)] overflow-hidden bg-[#111] ring-1 ring-white/10"
            >
              {/* Grooves Effect */}
              <div 
                className="absolute inset-0 opacity-40 mix-blend-soft-light" 
                style={{ 
                  background: 'repeating-radial-gradient(circle at center, transparent 0, transparent 1px, rgba(255,255,255,0.05) 1.5px, transparent 2px)' 
                }} 
              />
              
              {/* Record Center Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-1/3 h-1/3 rounded-full bg-accent relative flex items-center justify-center border-[6px] border-black/20 shadow-inner overflow-hidden">
                   <img 
                    src="///IMG:minimalist record label|square|warm///" 
                    alt="Label"
                    className="w-full h-full object-cover"
                   />
                   <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
                   <div className="w-3 h-3 rounded-full bg-black/40 z-10" />
                </div>
              </div>
            </motion.div>

            {/* Micro details */}
            <div className="absolute -bottom-16 left-0 right-0 flex justify-between font-mono text-[9px] uppercase tracking-widest text-primary/40">
              <div className="flex items-center gap-2">
                <Disc className="w-3 h-3" /> Lathe Cut Precision
              </div>
              <div className="hidden sm:block">Series: OX-AM-001 — Reference Batch</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Visual Elements */}
      <div className="absolute bottom-12 left-12 h-32 w-px bg-gradient-to-t from-primary/20 to-transparent" />
      <div className="absolute top-12 right-12 text-[10px] font-mono uppercase tracking-[0.5em] text-primary/20 [writing-mode:vertical-rl] select-none">
        Oxide & Amber Collective
      </div>
      
      {/* Decorative Light Leak */}
      <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
};

export default TurntableHero;