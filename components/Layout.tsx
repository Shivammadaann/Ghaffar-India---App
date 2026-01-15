
import React, { useState } from 'react';
import { Home as HomeIcon, Search, ShoppingBag, User, Sparkles, Bell, Menu, X, ChevronRight, Star, ShieldCheck, Truck, RotateCcw, FileText, MessageSquare, HelpCircle, LifeBuoy } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount }) => {
  const location = useLocation();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isActive = (path: string) => location.pathname === path;

  const LOGO_SRC = "https://i.ibb.co/89vLMB2/phone-case-logo.png"; 

  const menuItems = [
    { label: "Best Sellers", icon: <Star size={18} />, path: "/" },
    { label: "All Products", icon: <ShoppingBag size={18} />, path: "/products" },
    { label: "New Arrivals", icon: <Sparkles size={18} />, path: "/products" },
    { label: "Featured Products", icon: <ChevronRight size={18} />, path: "/" },
    { label: "Divider", type: "divider" },
    { label: "Privacy Policy", icon: <ShieldCheck size={18} />, path: "/support" },
    { label: "Return & Refund Policy", icon: <RotateCcw size={18} />, path: "/support" },
    { label: "Terms & Conditions", icon: <FileText size={18} />, path: "/support" },
    { label: "Shipping Policy", icon: <Truck size={18} />, path: "/support" },
    { label: "Divider", type: "divider" },
    { label: "Support Center", icon: <LifeBuoy size={18} />, path: "/support" },
    { label: "Contact Us", icon: <User size={18} />, path: "/support" },
    { label: "FAQ", icon: <HelpCircle size={18} />, path: "/" },
  ];

  return (
    <div className="flex flex-col min-h-screen pb-24 md:pb-0 md:pl-24">
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[70] transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      <aside className={`fixed top-4 bottom-4 left-4 w-72 liquid-glass rounded-[2.5rem] z-[80] shadow-2xl border-white/60 transition-transform duration-500 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-[120%]'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8 px-2">
            <Link to="/" onClick={() => setIsDrawerOpen(false)} className="flex items-center">
              <img src={LOGO_SRC} alt="Ghaffar India" className="h-10 w-auto object-contain brightness-0" />
            </Link>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 bg-white/40 hover:bg-white/60 rounded-full transition-all"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto no-scrollbar space-y-1">
            {menuItems.map((item, idx) => {
              if (item.type === 'divider') {
                return <div key={idx} className="h-px bg-white/30 my-4 mx-2" />;
              }
              return (
                <Link
                  key={idx}
                  to={item.path || '/'}
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between w-full p-4 rounded-2xl hover:bg-white/40 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-slate-600 group-hover:text-black transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm text-slate-800 group-hover:text-black transition-colors">{item.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-black transition-colors" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 p-4 liquid-glass-dark rounded-3xl text-white">
            <img src={LOGO_SRC} alt="Ghaffar India" className="h-8 w-auto object-contain mb-2 invert brightness-0" />
            <p className="text-[10px] font-black uppercase tracking-widest opacity-60 mb-1">Ghaffar India</p>
            <p className="text-xs font-bold italic">Premium Lifestyle Accessories</p>
          </div>
        </div>
      </aside>

      <header className="sticky top-0 z-[60] px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between liquid-glass rounded-2xl h-14 px-4 border-white/60">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-slate-800 hover:bg-white/40 rounded-full transition-all"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
            <Link to="/" className="flex items-center">
              <img src={LOGO_SRC} alt="Ghaffar India" className="h-10 md:h-12 w-auto object-contain brightness-0" />
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-slate-800 hover:bg-white/40 rounded-full transition-all">
              <Bell size={20} strokeWidth={2.5} />
            </button>
            <Link to="/products" className="p-2 text-slate-800 hover:bg-white/40 rounded-full transition-all md:hidden">
              <Search size={20} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-grow z-10">
        {children}
      </main>

      <nav className="hidden md:flex fixed left-4 top-4 bottom-4 w-20 flex-col items-center py-8 space-y-10 liquid-glass rounded-[2.5rem] z-50">
        <NavIcon to="/" icon={<HomeIcon size={24} />} active={isActive('/')} label="Home" />
        <NavIcon to="/products" icon={<Search size={24} />} active={isActive('/products')} label="Shop" />
        <div className="relative">
           <Link to="/ai" className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl shadow-xl transition-all active:scale-90 ${isActive('/ai') ? 'accent-gradient text-white scale-110' : 'bg-white text-black hover:bg-slate-50'}`}>
            <Sparkles size={26} strokeWidth={2.5} />
          </Link>
          <span className="text-[10px] font-bold text-slate-400 absolute -bottom-5 left-1/2 -translate-x-1/2">AI</span>
        </div>
        <NavIcon to="/cart" icon={<ShoppingBag size={24} />} active={isActive('/cart')} count={cartCount} label="Cart" />
        <NavIcon to="/contact" icon={<User size={24} />} active={isActive('/contact') || isActive('/support')} label="Account" />
      </nav>

      <nav className="md:hidden fixed bottom-6 left-4 right-4 h-16 liquid-glass rounded-[2rem] flex items-center justify-between px-6 z-[60] pb-safe shadow-2xl border-white/40">
        <MobileTab to="/" icon={<HomeIcon size={22} />} active={isActive('/')} />
        <MobileTab to="/products" icon={<Search size={22} />} active={isActive('/products')} />
        
        <div className="relative -mt-12">
           <Link to="/ai" className={`flex flex-col items-center justify-center w-16 h-16 rounded-3xl shadow-2xl transition-all active:scale-95 ${isActive('/ai') ? 'accent-gradient text-white' : 'bg-white text-black border border-white/50'}`}>
            <Sparkles size={28} strokeWidth={2.5} />
          </Link>
        </div>

        <MobileTab to="/cart" icon={<ShoppingBag size={22} />} active={isActive('/cart')} count={cartCount} />
        <MobileTab to="/contact" icon={<User size={22} />} active={isActive('/contact') || isActive('/support')} />
      </nav>
    </div>
  );
};

const NavIcon = ({ to, icon, active, count, label }: any) => (
  <Link to={to} className={`flex flex-col items-center space-y-1 group transition-all ${active ? 'text-black scale-110' : 'text-slate-400 hover:text-slate-800'}`}>
    <div className="relative">
      {icon}
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-red-500 text-white text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center ring-2 ring-white">
          {count}
        </span>
      )}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
  </Link>
);

const MobileTab = ({ to, icon, active, count }: any) => (
  <Link to={to} className={`flex flex-col items-center transition-all relative ${active ? 'text-black scale-125' : 'text-slate-400'}`}>
    {icon}
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white">
        {count}
      </span>
    )}
    {active && <div className="absolute -bottom-2 w-1 h-1 bg-black rounded-full" />}
  </Link>
);

export default Layout;
