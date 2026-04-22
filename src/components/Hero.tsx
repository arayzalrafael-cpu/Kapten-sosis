import { motion } from 'motion/react';
import { Utensils, Star, Flame } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-20 pb-20" id="hero">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-black to-brand-red opacity-40 z-0" />
      
      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          id="hero-text"
        >
          <div className="flex items-center gap-2 mb-6" id="hero-badge">
            <span className="bg-brand-red/20 text-brand-red border border-brand-red px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Flame className="w-4 h-4" /> Best Grilled in Town
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white leading-none mb-6">
            RASA <span className="text-brand-red">PREMIUM</span> <br />
            HARGA <span className="italic">MERAKYAT</span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-md mb-10 leading-relaxed">
            Rasakan kelezatan sosis bakar dan cumi segar dengan bumbu rahasia BBQ & Pedas Manis ala Kapten.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4" id="hero-cta">
            <button className="bg-brand-red hover:bg-brand-red/90 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-xl flex items-center justify-center gap-2">
              Pesan Sekarang <Utensils className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm px-6 py-4 rounded-lg border border-white/10 text-white">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-medium text-sm">2,500+ Ulasan Puas</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
          id="hero-image"
        >
          <div className="absolute -inset-4 bg-brand-red/20 rounded-full blur-3xl" />
          <img 
            src="https://picsum.photos/seed/grill/800/800" 
            alt="Grilled Feast" 
            className="rounded-3xl shadow-2xl relative z-10 border border-white/10"
            referrerPolicy="no-referrer"
          />
          
          {/* Floating Element */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 bg-brand-black/80 backdrop-blur-md p-6 rounded-2xl border border-brand-red/30 shadow-2xl z-20"
          >
            <p className="text-brand-red font-bold text-2xl">Rp 5.000</p>
            <p className="text-gray-400 text-xs uppercase tracking-tighter">Harga Mulai Dari</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
