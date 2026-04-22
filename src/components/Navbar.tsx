import { motion } from 'motion/react';
import { ChefHat, ShoppingCart } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-brand-red py-4 px-6 md:px-12 flex justify-between items-center shadow-xl"
      id="main-nav"
    >
      <div className="flex items-center gap-2" id="nav-logo">
        <ChefHat className="text-white w-8 h-8" />
        <span className="text-white font-display font-bold text-xl tracking-tight uppercase">
          Kapten Sosis & Cumi
        </span>
      </div>
      
      <div className="hidden md:flex gap-8 items-center" id="nav-links">
        {['Menu', 'Kumpulan Resep', 'Ulasan', 'Kontak'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="text-white/80 hover:text-white font-medium text-sm tracking-wide uppercase transition-colors"
          >
            {item}
          </a>
        ))}
      </div>

      <button 
        className="bg-white text-brand-red p-2 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
        aria-label="Keranjang"
        id="cart-button"
      >
        <ShoppingCart className="w-5 h-5" />
      </button>
    </motion.nav>
  );
}
