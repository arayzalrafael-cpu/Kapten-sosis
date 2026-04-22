import { motion } from 'motion/react';
import { Flame, Star } from 'lucide-react';

const MENU_DATA = [
  { id: 1, name: 'Sosis Bakar Mini', price: '5k', category: 'Sosis', image: 'https://picsum.photos/seed/sosis1/400/300' },
  { id: 2, name: 'Sosis Bakar Keju Mini', price: '5k', category: 'Sosis', image: 'https://picsum.photos/seed/sosis2/400/300' },
  { id: 3, name: 'Sosis Original Big', price: '10k', category: 'Sosis', image: 'https://picsum.photos/seed/sosis3/400/300' },
  { id: 4, name: 'Cumi Campur', price: '25k', category: 'Cumi', image: 'https://picsum.photos/seed/cumi1/400/300' },
  { id: 5, name: 'Cumi Daging', price: '30k', category: 'Cumi', image: 'https://picsum.photos/seed/cumi2/400/300' },
  { id: 6, name: 'Cumi Spesial', price: '35k', category: 'Cumi', image: 'https://picsum.photos/seed/cumi3/400/300' },
  { id: 7, name: 'Cumi Utuh', price: '35k', category: 'Cumi', image: 'https://picsum.photos/seed/cumi4/400/300' },
];

export default function Menu() {
  return (
    <section className="py-24 bg-brand-black relative" id="menu">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" id="menu-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              MENU <span className="text-brand-red font-normal italic">KAPTEN</span>
            </h2>
            <div className="w-24 h-1 bg-brand-red mx-auto mb-6" />
            <p className="text-gray-400 max-w-xl mx-auto">
              Pilih menu favoritmu dan nikmati dengan pilihan bumbu BBQ atau Pedas Manis yang menggugah selera.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16" id="sauce-options">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-brand-red to-red-900 rounded-3xl shadow-[0_0_30px_rgba(227,24,55,0.3)] border border-white/20 w-full max-w-[280px]"
          >
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Flame className="w-8 h-8 text-white fill-current" />
            </div>
            <h3 className="text-white font-bold text-2xl uppercase tracking-tighter">Bumbu BBQ</h3>
            <p className="text-white/70 text-xs mt-2 uppercase font-medium">Asap & Gurih</p>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center p-6 bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl shadow-[0_0_30px_rgba(234,88,12,0.3)] border border-white/20 w-full max-w-[280px]"
          >
            <div className="bg-white/20 p-4 rounded-full mb-4">
              <Flame className="w-8 h-8 text-white fill-current" />
            </div>
            <h3 className="text-white font-bold text-2xl uppercase tracking-tighter">Pedas Manis</h3>
            <p className="text-white/70 text-xs mt-2 uppercase font-medium">Extra Nendang</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8" id="menu-grid">
          {MENU_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-brand-red/50 transition-all cursor-pointer"
              id={`menu-item-${item.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 right-4 bg-brand-red text-white font-bold px-3 py-1 rounded-lg shadow-lg">
                  Rp {item.price}
                </div>
              </div>
              <div className="p-6">
                <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">{item.category}</p>
                <h3 className="text-white font-bold text-lg mb-4 group-hover:text-brand-red transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                  </div>
                  <button className="text-brand-red font-bold text-sm hover:underline">
                    Tambah
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
