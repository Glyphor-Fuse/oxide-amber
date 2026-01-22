import React from 'react';
import { Mail, Instagram, Twitter, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1817] text-[#f5f3ef] py-24 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5">
            <h2 className="text-6xl md:text-8xl italic mb-12">End of <br /><span className="text-primary">Side B.</span></h2>
            <p className="text-muted-foreground max-w-sm mb-12 leading-relaxed">
              Based in the historic garment district of Lyon, Oxide & Amber operates as a fully climate-controlled mastering and pressing facility.
            </p>
            <div className="flex gap-6">
              <a href="#" className="p-4 border border-white/10 hover:border-primary transition-colors group">
                <Instagram size={20} className="group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-4 border border-white/10 hover:border-primary transition-colors group">
                <Twitter size={20} className="group-hover:text-primary transition-colors" />
              </a>
              <a href="#" className="p-4 border border-white/10 hover:border-primary transition-colors group">
                <Mail size={20} className="group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <span className="font-mono-technical text-primary mb-8 block">LABORATORY</span>
              <ul className="space-y-6">
                {['Direct Metal Mastering', 'Lacquer Originals', 'Test Pressings', 'Artwork Pre-press'].map((item) => (
                  <li key={item} className="group flex items-center justify-between border-b border-white/5 pb-4 cursor-pointer">
                    <span className="text-xl italic group-hover:text-primary transition-colors">{item}</span>
                    <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <span className="font-mono-technical text-primary mb-8 block">OFFICE</span>
              <p className="text-xl italic leading-relaxed">
                42 Rue de la Vanne<br />
                69002 Lyon, France<br />
                studio@oxideamber.com
              </p>
              <div className="mt-12 p-6 border border-white/5 bg-white/[0.02]">
                <span className="font-mono-technical text-[10px] block mb-2">OPERATIONAL STATUS</span>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs uppercase tracking-tighter">Lathe Warm / Ready for session</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 font-mono-technical text-[10px] text-muted-foreground">
          <p>© 2024 OXIDE & AMBER STUDIO. NO DIGITAL ARTIFACTS INCLUDED.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">PRIVACY POLICY</a>
            <a href="#">SITEMAP</a>
          </div>
        </div>
      </div>
      
      {/* Absolute Decorative Elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] pointer-events-none" />
    </footer>
  );
};

export default Footer;