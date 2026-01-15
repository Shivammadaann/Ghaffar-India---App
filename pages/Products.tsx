
import React, { useState } from 'react';
import { PRODUCTS } from '../data';
import { Filter, Star, ShoppingBag, Search } from 'lucide-react';

interface ProductsProps {
  onAddToCart: (p: any) => void;
}

const Products: React.FC<ProductsProps> = ({ onAddToCart }) => {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesFilter = filter === 'All' || p.category === filter;
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const categories = ['All', 'Samsung', 'Apple', 'Lighters', '3D Printed'];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
        <div>
          <h1 className="text-4xl font-bold mb-2">Our Collection</h1>
          <p className="text-slate-500">Discover premium accessories for your lifestyle.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input 
              type="text" 
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-black/5 w-full sm:w-64 outline-none"
            />
          </div>
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar">
            {categories.map(cat => (
              <button 
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === cat 
                    ? 'bg-black text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="group bg-white rounded-xl border border-slate-100 p-4 hover:shadow-lg transition-all flex flex-col">
              <div className="aspect-square rounded-lg overflow-hidden mb-4 relative">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNewArrival && (
                  <span className="absolute top-2 left-2 bg-black text-white text-[10px] font-bold px-2 py-1 rounded">NEW</span>
                )}
              </div>
              <div className="flex-grow">
                <div className="flex items-center space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-yellow-400 text-yellow-400" />)}
                </div>
                <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
                <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">{product.category}</p>
              </div>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col">
                  <span className="font-bold text-lg">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xs text-slate-400 line-through">₹{product.originalPrice}</span>
                  )}
                </div>
                <button 
                  onClick={() => onAddToCart(product)}
                  className="bg-black text-white p-2.5 rounded-lg hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full py-20 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-slate-100 rounded-full mb-4">
              <Filter className="text-slate-400" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">No products found</h3>
            <p className="text-slate-500">Try adjusting your filters or search keywords.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
