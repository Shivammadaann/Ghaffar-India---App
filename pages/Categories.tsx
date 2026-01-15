
import React from 'react';
import { CATEGORIES } from '../data';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

const Categories: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-slate-800 px-4 py-1.5 rounded-full mb-4">
          <Sparkles size={14} className="text-yellow-500" />
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">Discover Our World</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 dark:text-white mb-6">
          Premium Collections
        </h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium max-w-2xl mx-auto text-lg leading-relaxed">
          From military-grade protection to unique 3D printed art, find the perfect accessory that defines your style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/products?category=${cat.name}`}
            className="group relative h-[450px] rounded-[3.5rem] overflow-hidden shadow-2xl transition-all hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.3)]"
          >
            {/* Background Image */}
            <img 
              src={cat.image} 
              alt={cat.name} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

            {/* Content Card */}
            <div className="absolute bottom-8 left-8 right-8">
              <div className="liquid-glass dark:bg-slate-900/60 p-8 rounded-[2.5rem] border-white/20 dark:border-slate-800 backdrop-blur-3xl transition-all group-hover:bg-white/90 dark:group-hover:bg-slate-900">
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-500 dark:text-slate-400 uppercase tracking-[0.3em] mb-2 block">
                    Collection
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-3 leading-tight">
                    {cat.name}
                  </h3>
                  <p className="text-xs font-bold text-slate-500 dark:text-slate-400 leading-relaxed mb-6 opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                    {cat.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-xs font-black uppercase tracking-widest text-black dark:text-white group-hover:underline underline-offset-8">
                      View Collection
                    </span>
                    <div className="w-12 h-12 bg-black dark:bg-white text-white dark:text-black rounded-2xl flex items-center justify-center shadow-xl group-hover:rotate-12 transition-transform">
                      <ArrowRight size={20} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Trust Badges */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-slate-100 dark:border-slate-800">
        <div className="text-center">
          <h4 className="text-2xl font-black dark:text-white">100+</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Designs</p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-black dark:text-white">Premium</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Materials</p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-black dark:text-white">Fast</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Pan India Shipping</p>
        </div>
        <div className="text-center">
          <h4 className="text-2xl font-black dark:text-white">7 Days</h4>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Easy Return</p>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-20" />
    </div>
  );
};

export default Categories;
