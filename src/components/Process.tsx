import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    title: "Analog Source",
    desc: "We begin with tape-to-tape transfers or high-resolution digital masters processed through our custom tube-driven outboard gear.",
    image: "///IMG:vintage audio tape reel spinning close-up|square|warm///",
    tag: "PHASE 01"
  },
  {
    title: "Lathe Cutting",
    desc: "Precise mechanical etching onto lacquer using our restored 1970s Neumann lathe. The true physical manifestation of your audio wave.",
    image: "///IMG:vinyl record lathe cutting machine close-up|square|mechanical///",
    tag: "PHASE 02"
  },
  {
    title: "The Pressing",
    desc: "Molten vinyl meets heavy steel plates. 180g of premium composite, heat-fused under 100 tons of pressure for silent surfaces.",
    image: "///IMG:vinyl record pressing machine steam industrial|square|dark///",
    tag: "PHASE 03"
  }
];

const Process = () => {
  return (
    <section id="process" className="py-32 bg-[#1a1817] text-[#f5f3ef] relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="w-full h-full paper-texture" />
      </div>

      <div className="container mx-auto px-6">
        <div className="mb-24">
          <span className="font-mono-technical text-primary tracking-[0.3em]">THE JOURNEY</span>
          <h2 className="text-5xl md:text-7xl mt-4 max-w-2xl leading-tight">
            From the <span className="italic">Electrical</span> to the <span className="text-primary italic">Material.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden mb-8">
                <img 
                  src={step.image} 
                  alt={step.title}
                  className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
                <div className="absolute top-4 left-4 font-mono-technical bg-primary text-background px-3 py-1">
                  {step.tag}
                </div>
              </div>
              <h3 className="text-3xl mb-4 italic">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {step.desc}
              </p>
              <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-primary transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;