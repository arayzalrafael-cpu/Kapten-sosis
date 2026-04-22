import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const REVIEWS = [
  { id: 1, name: 'Andi Pratama', text: 'Sosis bakarnya juara! Bumbu BBQ-nya meresap banget. Anak-anak suka sekali.', rating: 5 },
  { id: 2, name: 'Santi Wijaya', text: 'Cumi utuhnya gede banget dan gak alot. Pedas manisnya pas di lidah.', rating: 5 },
  { id: 3, name: 'Budi Santoso', text: 'Harga kaki lima rasa bintang lima. Paling suka cumi campurnya, komplit!', rating: 5 },
];

export default function Reviews() {
  return (
    <section className="py-24 bg-gradient-to-t from-brand-red/10 to-brand-black" id="ulasan">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            APA KATA <span className="text-brand-red font-normal italic">MEREKA?</span>
          </h2>
          <p className="text-gray-400">Ribuan pelanggan telah merasakan kelezatan menu Kapten.</p>
        </div>

        <div className="flex flex-row-reverse flex-wrap justify-start gap-8" id="reviews-container">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10 relative w-full md:w-[calc(33.333%-1.5rem)] min-w-[300px] flex-grow shadow-2xl"
              id={`review-${review.id}`}
            >
              <Quote className="absolute top-6 right-8 text-brand-red/20 w-12 h-12" />
              <div className="relative z-10 text-right">
                <div className="flex justify-end text-yellow-500 mb-4">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-gray-300 italic mb-6">"{review.text}"</p>
                <div className="flex items-center justify-end gap-3">
                  <span className="text-white font-bold">{review.name}</span>
                  <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center font-bold text-white order-last">
                    {review.name.charAt(0)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
