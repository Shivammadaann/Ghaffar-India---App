
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import AIAssistant from './pages/AIAssistant';
import Support from './pages/Support';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const LOGO_SRC = "https://cdn.shopify.com/s/files/1/0760/3444/1401/files/Black_icon_500_x_500_No_BG_060e5449-ac59-4999-bc13-01094c92edbf.png?v=1768440378";

  const handleAddToCart = (product: Product) => {
    setCart(current => {
      const existing = current.find(item => item.id === product.id);
      if (existing) {
        return current.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(current => current.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(current => current.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Router>
      <Layout cartCount={cartCount}>
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cart" element={<Cart cart={cart} onUpdateQty={updateQuantity} onRemove={removeFromCart} />} />
          <Route path="/contact" element={
            <div className="max-w-xl mx-auto px-6 py-12">
              <div className="mb-12 text-center">
                <div className="w-24 h-24 accent-gradient rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 shadow-2xl p-4">
                  <img src={LOGO_SRC} alt="Logo" className="w-full h-auto object-contain invert brightness-0" />
                </div>
                <h1 className="text-3xl font-black tracking-tight">Profile</h1>
                <p className="text-sm font-bold text-slate-400 mt-2">Ghaffar Gold Member ✨</p>
              </div>
              
              <div className="space-y-4">
                <AccountButton label="Orders History" sub="14 successful deliveries" to="/support" />
                <AccountButton label="Saved Addresses" sub="Home, Office" to="/contact" />
                <AccountButton label="Wallet Balance" sub="₹450 Credits Available" to="/contact" />
                <AccountButton label="Support Center" sub="Get help with your orders" to="/support" />
                <AccountButton label="App Settings" sub="Notifications, Dark Mode" to="/contact" />
              </div>
              
              <button className="w-full mt-12 py-5 text-red-500 font-black text-sm liquid-glass rounded-[2rem] border-red-100 hover:bg-red-50 transition-all active:scale-95 shadow-sm">
                Sign Out
              </button>
            </div>
          } />
        </Routes>
      </Layout>
    </Router>
  );
};

const AccountButton = ({ label, sub, to }: { label: string, sub: string, to: string }) => (
  <RouterLink to={to} className="w-full block liquid-glass p-6 rounded-[2rem] flex items-center justify-between border-white/60 active:bg-white/60 transition-all shadow-sm group">
    <div className="text-left">
      <span className="block font-black text-sm text-slate-900">{label}</span>
      <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">{sub}</span>
    </div>
    <div className="w-10 h-10 bg-white/40 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-inner">
      <ChevronRight size={18} strokeWidth={3} />
    </div>
  </RouterLink>
);

const ChevronRight = ({ size, className }: any) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"></path></svg>
);

export default App;
