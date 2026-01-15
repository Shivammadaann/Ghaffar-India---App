
import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data';
import { Filter, Star, ShoppingBag, Search, X, Eye, Heart, ArrowUpDown, ChevronDown } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface ProductsProps {
  onAddToCart: (p: any) => void;
  onAddToWishlist: (p: any) => void;
  searchQuery?: string;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart, onAddToWishlist, searchQuery = '' }) => {
  const location = useLocation();
  const [filter, setFilter] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [localSearch, setLocalSearch] = useState('');
  const [quickViewProduct, setQuickViewProduct] = useState<any>(null);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('category');
    if (cat) {
      const found = PRODUCTS.find(p => p.id === cat || p.category.toLowerCase() === cat.toLowerCase());
      if (found) setFilter(found.category);
    }
  }, [location]);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const finalSearch = localSearch || searchQuery;
    const matchesSearch = p.name.toLowerCase().includes(finalSearch.toLowerCase()) || 
                          p.category.toLowerCase().includes(finalSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === 'Price: Low to High') return a.price - b.price;
    if (sortBy === 'Price: High to Low') return b.price - a.price;
    return 0;
  });

  const categories = ['All', 'Samsung', 'Apple', 'Lighters', '3D Printed'];
  const sortOptions = ['Featured', 'Price: Low to High', 'Price: High to Low'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-black mb-1">Explore Collection</h1>
          <p className="text-slate-500 text-sm font-medium">Showing {filteredProducts.length} results</p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center space-x-2 overflow-x-auto no-scrollbar py-1">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                  filter === cat 
                    ? 'bg-black text-white shadow-lg' 
                    : 'bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 border border-slate-100 dark:border-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative inline-block text-left group">
            <button className="flex items-center space-x-2 px-5 py-2.5 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-2xl text-xs font-black uppercase tracking-widest text-slate-700 dark:text-slate-300">
              <ArrowUpDown size={14} />
              <span>{sortBy}</span>
              <ChevronDown size={14} />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
              {sortOptions.map(opt => (
                <button
                  key={opt}
                  onClick={() => setSortBy(opt)}
                  className="w-full text-left px-4 py-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="group bg-white dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700 p-3 hover:shadow-2xl transition-all flex flex-col">
              <div className="aspect-square rounded-2xl overflow-hidden mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Overlay Controls */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                  <button 
                    onClick={() => setQuickViewProduct(product)}
                    className="p-3 bg-white text-black rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
                    title="Quick View"
                  >
                    <Eye size={20} />
                  </button>
                  <button 
                    onClick={() => onAddToWishlist(product)}
                    className="p-3 bg-white text-black rounded-2xl shadow-xl hover:scale-110 active:scale-95 transition-all"
                    title="Wishlist"
                  >
                    <Heart size={20} />
                  </button>
                </div>

                {product.isNewArrival && (
                  <span className="absolute top-3 left-3 bg-black dark:bg-white text-white dark:text-black text-[9px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest">New</span>
                )}
              </div>
              
              <div className="px-1 flex-grow">
                <div className="flex items-center space-x-1 mb-2">
                   <Star size={10} className="fill-yellow-400 text-yellow-400" />
                   <span className="text-[10px] font-black text-slate-400">4.9 (124)</span>
                </div>
                <h3 className="font-black text-sm mb-1 line-clamp-2 text-slate-800 dark:text-slate-100 leading-tight h-10">{product.name}</h3>
                <p className="text-[10px] text-slate-400 dark:text-slate-500 mb-3 uppercase tracking-widest font-black">{product.category}</p>
              </div>

              <div className="flex items-center justify-between pt-2 border-t border-slate-50 dark:border-slate-700 mt-auto">
                <div className="flex flex-col">
                  <span className="font-black text-lg text-slate-900 dark:text-white">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-[10px] text-slate-400 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="bg-black dark:bg-white text-white dark:text-black p-3 rounded-2xl hover:opacity-80 transition-all shadow-md active:scale-90"
                >
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-32 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full mb-6">
              <Search className="text-slate-400" size={32} />
            </div>
            <h3 className="text-2xl font-black mb-2">No matching products</h3>
            <p className="text-slate-500 font-medium max-w-xs mx-auto">Try refining your search or filter by another category.</p>
            <button onClick={() => {setFilter('All'); setLocalSearch('');}} className="mt-8 px-8 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full font-black text-xs uppercase tracking-widest">Reset Filters</button>
          </div>
        )}
      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-md" onClick={() => setQuickViewProduct(null)} />
          <div className="relative bg-white dark:bg-slate-900 w-full max-w-4xl rounded-[3rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in zoom-in-95 duration-300">
            <button 
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-6 right-6 z-10 p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white md:text-black dark:md:text-white transition-all"
            >
              <X size={24} />
            </button>
            
            <div className="w-full md:w-1/2 aspect-square">
              <img src={quickViewProduct.image} alt={quickViewProduct.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="w-full md:w-1/2 p-10 flex flex-col">
              <div className="mb-auto">
                <span className="inline-block bg-slate-100 dark:bg-slate-800 text-slate-500 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                  {quickViewProduct.category} Collection
                </span>
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4 leading-tight">{quickViewProduct.name}</h2>
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />)}
                  <span className="text-sm font-bold text-slate-400 ml-2">4.9 Customer Rating</span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed font-medium mb-8">
                  {quickViewProduct.description || "Premium quality accessory crafted with precision and durability in mind. Perfect for the modern lifestyle."}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between p-6 bg-slate-50 dark:bg-slate-800/50 rounded-3xl border border-slate-100 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Price</span>
                    <span className="text-3xl font-black text-slate-900 dark:text-white">₹{quickViewProduct.price}</span>
                  </div>
                  <div className="flex flex-col text-right">
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Availability</span>
                    <span className="text-sm font-black text-green-500">In Stock</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button 
                    onClick={() => { onAddToCart(quickViewProduct); setQuickViewProduct(null); }}
                    className="flex-grow accent-gradient text-white py-5 rounded-[2rem] font-black text-lg shadow-xl hover:scale-[1.02] active:scale-95 transition-all"
                  >
                    Add to Cart
                  </button>
                  <button 
                    onClick={() => { onAddToWishlist(quickViewProduct); setQuickViewProduct(null); }}
                    className="p-5 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-[2rem] hover:bg-slate-200 dark:hover:bg-slate-700 transition-all"
                  >
                    <Heart size={24} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
