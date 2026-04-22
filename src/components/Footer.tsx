import { ChefHat, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-black py-16 border-t border-white/5" id="kontak">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <ChefHat className="text-brand-red w-8 h-8" />
              <span className="text-white font-display font-bold text-2xl tracking-tight uppercase">
                Kapten Sosis & Cumi
              </span>
            </div>
            <p className="text-gray-400 max-w-sm mb-8 leading-relaxed">
              Pelopor sosis bakar dan cumi premium di Indonesia. Kualitas terbaik, rasa authentic, harga terjangkau.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="bg-white/5 hover:bg-brand-red p-3 rounded-full transition-all text-white">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Navigasi</h4>
            <ul className="space-y-4">
              {['Home', 'Menu', 'Ulasan', 'Kontak'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-brand-red transition-colors text-sm">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-sm">Lokasi</h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              Jl. Kapten Rasa No. 123<br />
              Jakarta, Indonesia<br /><br />
              Senin - Minggu<br />
              16:00 - 23:00 WIB
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-xs text-center md:text-left">
            © {new Date().getFullYear()} Kapten Sosis & Cumi. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-white text-xs">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-xs">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
