import React from 'react';
import { motion } from 'framer-motion';

const records = [
  { artist: "Echo & The Weaver", title: "Linen Skies", color: "Amber Swirl", img: "///IMG:abstract amber vinyl record texture|square|editorial///" },
  { artist: "Rust Belt Trio", title: "Heavy Metal Heat", color: "Oxide Black", img: "///IMG:black vinyl record close-up texture|square|dark///" },
  { artist: "Serafina", title: "The Silent Room", color: "Milky White", img: "///IMG:white vinyl record minimalist|square|clean///" },
];

const Showcase = () => {
  return (
    <section id="catalog" className="py-32 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-xl">
            <span className="font-mono-technical text-accent">LATEST RELEASES</span>
            <h2 className="text-5xl md:text-7xl mt-4">The Deep Cut.</h2>
          </div>
          <div className="font-mono-technical flex gap-8 pb-4">
            <button className="hover:text-primary transition-colors">7-INCH</button>
            <button className="text-primary underline underline-offset-8">12-INCH LP</button>
            <button className="hover:text-primary transition-colors">GATEFOLD</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
          {records.map((record, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square mb-8 bg-zinc-200 overflow-hidden">
                {/* The Vinyl Sleeve */}
                <img 
                  src={record.img} 
                  alt={record.title}
                  className="object-cover w-full h-full z-10 relative group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* The Record Peeking Out */}
                <motion.div 
                  initial={{ x: 0 }}
                  whileHover={{ x: '40%' }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="absolute inset-0 z-0 flex items-center justify-center translate-x-10"
                >
                  <div className="w-[90%] aspect-square rounded-full bg-[#111] border-4 border-[#222] flex items-center justify-center shadow-xl">
                    <div className="w-1/3 aspect-square rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-1/4 h-1/4 rounded-full bg-primary/20" />
                    </div>
                  </div>
                </motion.div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <h4 className="text-2xl italic">{record.title}</h4>
                  <p className="text-muted-foreground uppercase tracking-widest text-sm mt-1">{record.artist}</p>
                </div>
                <span className="font-mono-technical text-[10px] border border-foreground/20 px-2 py-1">
                  {record.color}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;