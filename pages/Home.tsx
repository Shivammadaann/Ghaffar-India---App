
import React, { useState } from 'react';
import { ArrowRight, Star, ChevronRight, Plus, HelpCircle, Quote, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { CATEGORIES, PRODUCTS } from '../data';
import { Link } from 'react-router-dom';

interface HomeProps {
  onAddToCart: (p: any) => void;
}

const Home: React.FC<HomeProps> = ({ onAddToCart }) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const REVIEWS = [
    { name: "Arjun Mehta", rating: 5, comment: "The S24 Ultra case is absolutely stunning. The dual-tone finish feels so premium in hand.", location: "Mumbai" },
    { name: "Sarah Khan", rating: 5, comment: "I ordered the 3D printed dragon as a desk accessory. The detail is mind-blowing!", location: "Delhi" },
    { name: "Vikram Singh", rating: 4, comment: "Solid protection and the magnetic hold is very strong. Best iPhone case I've used so far.", location: "Bangalore" },
  ];

  const FAQS = [
    { q: "How long does shipping take?", a: "Most orders are processed within 24-48 hours and delivered within 3-5 business days across India." },
    { q: "Do the cases support MagSafe?", a: "Yes, our 'Premium' and 'Crystal' series for iPhone and Samsung S-series come with integrated N52 magnets for strong MagSafe support." },
    { q: "What is your return policy?", a: "We offer a 7-day easy return/exchange policy if the product is damaged or doesn't match the description." },
    { q: "Are the 3D printed items durable?", a: "Absolutely. We use high-quality PLA+ and PETG materials which are both durable and environmentally friendly." }
  ];

  return (
    <div className="animate-in fade-in duration-700 max-w-7xl mx-auto md:px-6 pb-20">
      
      {/* HERO SECTION */}
      <section className="px-2 pt-2 pb-6">
        <div className="relative h-[500px] md:h-[650px] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&w=2101&auto=format&fit=crop" 
            className="absolute inset-0 w-full h-full object-cover" 
            alt="Ghaffar Workshop" 
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px] flex flex-col items-center justify-center text-center px-6">
            <div className="space-y-6 max-w-2xl animate-in slide-in-from-bottom-8 duration-1000">
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-2">
                <Sparkles size={14} className="text-yellow-400" />
                <span className="text-[10px] font-black tracking-[0.3em] uppercase text-white">Official Store</span>
              </div>
              
              <h1 className="text-4xl md:text-7xl font-black text-white leading-tight drop-shadow-2xl">
                Welcome to <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Ghaffar India!</span>
              </h1>
              
              <p className="text-lg md:text-2xl font-medium text-white/90 drop-shadow-md">
                Premium Phone cases at Affordable Pricing
              </p>
              
              <div className="flex flex-col items-center space-y-8">
                <div className="liquid-glass border-white/30 px-6 py-2 rounded-2xl">
                   <span className="text-2xl font-black text-white italic">Starting at 599/-</span>
                </div>
                
                <Link 
                  to="/products" 
                  className="accent-gradient text-white px-10 py-5 rounded-[2rem] font-black text-lg shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 active:scale-95 transition-all flex items-center group"
                >
                  Shop Now!
                  <ArrowRight size={22} className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW ARRIVALS - CATEGORY CARDS SECTION */}
      <section className="px-6 py-8">
        <div className="flex flex-col mb-8">
          <h2 className="text-3xl font-black tracking-tight mb-1">New Arrivals</h2>
          <div className="h-1.5 w-24 accent-gradient rounded-full" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((cat, index) => (
            <Link 
              key={cat.id} 
              to="/products"
              className={`relative overflow-hidden rounded-[2.5rem] group shadow-xl transition-all hover:shadow-2xl hover:-translate-y-1 ${
                index === 0 ? 'md:col-span-2 lg:col-span-2 h-[450px]' : 'h-[300px] md:h-[450px]'
              }`}
            >
              <img 
                src={cat.image} 
                alt={cat.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="liquid-glass border-white/20 p-5 rounded-[2rem] backdrop-blur-2xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-black text-black leading-tight">{cat.name}</h3>
                      <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-1">Explore Collection</p>
                    </div>
                    <div className="w-10 h-10 accent-gradient text-white rounded-2xl flex items-center justify-center shadow-lg group-hover:rotate-12 transition-transform">
                      <ChevronRight size={20} strokeWidth={3} />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="px-6 py-12">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight">Featured Products</h2>
            <p className="text-slate-400 text-xs font-bold uppercase tracking-widest mt-1">Handpicked for you</p>
          </div>
          <Link to="/products" className="p-3 bg-white rounded-2xl shadow-sm border border-slate-100 hover:bg-black hover:text-white transition-all">
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PRODUCTS.slice(0, 4).map((product) => (
            <div key={product.id} className="group bg-white rounded-[2.5rem] p-4 border border-slate-100 shadow-xl flex flex-col hover:-translate-y-2 transition-all duration-500">
              <div className="relative aspect-square rounded-[2rem] overflow-hidden mb-5">
                <img src={product.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={product.name} />
                <div className="absolute top-3 left-3">
                  <span className="bg-black/80 backdrop-blur-md text-white text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">Featured</span>
                </div>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="absolute bottom-3 right-3 accent-gradient text-white p-3.5 rounded-2xl shadow-xl active:scale-90 transition-transform opacity-0 group-hover:opacity-100"
                >
                  <Plus size={20} strokeWidth={3} />
                </button>
              </div>
              <div className="px-2 pb-2">
                <h3 className="text-sm font-black text-slate-800 line-clamp-2 leading-snug mb-3 h-10">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-black text-black">₹{product.price}</span>
                  <div className="flex items-center text-yellow-500">
                    <Star size={12} className="fill-current" />
                    <span className="text-[11px] font-black ml-1 text-slate-600">4.9</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="px-6 py-12 bg-slate-900 rounded-[4rem] mx-2 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full -mr-20 -mt-20" />
        <div className="relative z-10">
          <div className="flex flex-col items-center text-center mb-12">
            <Quote size={40} className="text-white/20 mb-4" />
            <h2 className="text-3xl font-black tracking-tight">What Our Community Says</h2>
            <p className="text-white/50 text-sm font-bold uppercase tracking-[0.2em] mt-2">10,000+ Happy Customers</p>
          </div>

          <div className="flex space-x-6 overflow-x-auto no-scrollbar pb-6 px-4">
            {REVIEWS.map((review, i) => (
              <div key={i} className="w-80 flex-shrink-0 liquid-glass-dark border-white/10 p-8 rounded-[2.5rem]">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(review.rating)].map((_, j) => (
                    <Star key={j} size={14} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-lg font-medium leading-relaxed italic mb-8">"{review.comment}"</p>
                <div className="flex items-center justify-between pt-6 border-t border-white/10">
                  <div>
                    <h4 className="font-black text-sm">{review.name}</h4>
                    <p className="text-[10px] text-white/40 uppercase tracking-widest">{review.location}, IN</p>
                  </div>
                  <CheckCircle2 size={18} className="text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-slate-100 rounded-2xl mb-4">
            <HelpCircle size={28} className="text-slate-800" />
          </div>
          <h2 className="text-3xl font-black tracking-tight">Got Questions?</h2>
          <p className="text-slate-500 font-medium mt-2">Everything you need to know about Ghaffar India.</p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="liquid-glass border-slate-100 rounded-3xl overflow-hidden transition-all duration-300">
              <button 
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/50 transition-colors"
              >
                <span className="font-black text-slate-800 pr-8">{faq.q}</span>
                <div className={`transition-transform duration-300 ${activeFaq === i ? 'rotate-180' : ''}`}>
                  <ChevronDown size={20} strokeWidth={3} />
                </div>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === i ? 'max-h-40 pb-6' : 'max-h-0'}`}>
                <p className="text-slate-600 font-medium leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER SPOTLIGHT */}
      <section className="px-4 mb-12">
        <div className="accent-gradient rounded-[3rem] p-1 shadow-2xl">
          <div className="bg-white/10 backdrop-blur-3xl rounded-[2.9rem] p-8 md:p-16 relative overflow-hidden">
            <div className="relative z-10 w-full md:w-3/5 text-white">
              <span className="text-[10px] text-yellow-400 font-black uppercase tracking-[0.4em] mb-4 block">Ghaffar Original</span>
              <h3 className="text-4xl md:text-5xl font-black mb-6 leading-tight">3D Print <br/>Art Collection</h3>
              <p className="text-white/80 text-lg font-medium leading-relaxed mb-10 max-w-md">Revolutionary layers of precision. Each piece is unique, durable, and crafted specifically for the modern collector.</p>
              <Link to="/products" className="bg-white text-black px-10 py-4.5 rounded-[2rem] font-black text-sm inline-flex items-center hover:scale-105 active:scale-95 transition-all shadow-xl">
                Explore Art <ArrowRight size={18} className="ml-3" />
              </Link>
            </div>
            <img 
              src="https://images.unsplash.com/photo-1633533400589-93b58619106a?auto=format&fit=crop&q=80&w=600" 
              className="absolute -right-20 -bottom-20 w-96 h-96 object-contain rotate-12 opacity-30 md:opacity-60 pointer-events-none"
              alt="3D Art"
            />
          </div>
        </div>
      </section>

      {/* Bottom Padding for Mobile Nav */}
      <div className="h-10 md:hidden" />
    </div>
  );
};

const Sparkles = ({ size, className }: { size: number, className: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>
);

export default Home;
