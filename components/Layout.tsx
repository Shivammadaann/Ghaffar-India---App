
import React, { useState, useEffect } from 'react';
import { Home as HomeIcon, Search, ShoppingBag, User, Sparkles, Bell, Menu, X, ChevronRight, Star, ShieldCheck, Truck, RotateCcw, FileText, MessageSquare, HelpCircle, LifeBuoy, Moon, Sun, Heart, LayoutGrid } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CATEGORIES } from '../data';

interface LayoutProps {
  children: React.ReactNode;
  cartCount: number;
  wishlistCount: number;
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
  onSearch: (query: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, cartCount, wishlistCount, isDarkMode, onToggleDarkMode, onSearch }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const isActive = (path: string) => location.pathname === path;

  const LOGO_SRC = "https://cdn.shopify.com/s/files/1/0760/3444/1401/files/Black_icon_500_x_500_No_BG_060e5449-ac59-4999-bc13-01094c92edbf.png?v=1768440378"; 

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery);
    if (location.pathname !== '/products') {
      navigate('/products');
    }
  };

  const menuItems = [
    { label: "Best Sellers", icon: <Star size={18} />, path: "/" },
    { label: "Wishlist", icon: <Heart size={18} />, path: "/wishlist" },
    { label: "Track Order", icon: <Truck size={18} />, path: "/support" },
    { label: "Divider", type: "divider" },
    { label: "CATEGORIES", type: "header" },
    ...CATEGORIES.map(cat => ({ label: cat.name, icon: <LayoutGrid size={18} />, path: `/products?category=${cat.id}` })),
    { label: "Divider", type: "divider" },
    { label: "Support Center", icon: <LifeBuoy size={18} />, path: "/support" },
    { label: "Legal", icon: <ShieldCheck size={18} />, path: "/support" },
  ];

  return (
    <div className={`flex flex-col min-h-screen pb-24 md:pb-0 md:pl-24 transition-colors duration-300 ${isDarkMode ? 'dark' : ''}`}>
      {/* Backdrop for Drawer */}
      {isDrawerOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-300"
          onClick={() => setIsDrawerOpen(false)}
        />
      )}

      {/* Side Navigation Drawer */}
      <aside className={`fixed top-0 bottom-0 left-0 w-80 bg-white dark:bg-slate-900 z-[110] shadow-2xl border-r border-slate-100 dark:border-slate-800 transition-transform duration-500 ease-in-out transform ${isDrawerOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex items-center justify-between mb-8 px-2">
            <Link to="/" onClick={() => setIsDrawerOpen(false)} className="flex items-center">
              <img src={LOGO_SRC} alt="Ghaffar India" className={`h-10 w-auto object-contain ${isDarkMode ? 'invert brightness-0' : 'brightness-0'}`} />
            </Link>
            <button 
              onClick={() => setIsDrawerOpen(false)}
              className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full transition-all"
            >
              <X size={20} strokeWidth={2.5} />
            </button>
          </div>

          <nav className="flex-grow overflow-y-auto no-scrollbar space-y-1">
            {menuItems.map((item, idx) => {
              if (item.type === 'divider') {
                return <div key={idx} className="h-px bg-slate-100 dark:bg-slate-800 my-4 mx-2" />;
              }
              if (item.type === 'header') {
                return <p key={idx} className="text-[10px] font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em] px-4 py-2">{item.label}</p>;
              }
              return (
                <Link
                  key={idx}
                  to={item.path || '/'}
                  onClick={() => setIsDrawerOpen(false)}
                  className="flex items-center justify-between w-full p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-all group"
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-slate-500 dark:text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors">
                      {item.icon}
                    </div>
                    <span className="font-bold text-sm text-slate-700 dark:text-slate-200 group-hover:text-black dark:group-hover:text-white transition-colors">{item.label}</span>
                  </div>
                  <ChevronRight size={14} className="text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-6 p-4 bg-slate-50 dark:bg-slate-800 rounded-3xl">
            <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-1">Ghaffar India</p>
            <p className="text-xs font-bold text-slate-700 dark:text-slate-200 italic">Premium Lifestyle Accessories</p>
          </div>
        </div>
      </aside>

      {/* Header */}
      <header className="sticky top-0 z-[60] px-4 py-3 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-b border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <button 
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-all"
            >
              <Menu size={22} strokeWidth={2.5} />
            </button>
            <Link to="/" className="flex items-center hidden sm:flex">
              <img src={LOGO_SRC} alt="Ghaffar India" className={`h-8 w-auto object-contain ${isDarkMode ? 'invert brightness-0' : 'brightness-0'}`} />
            </Link>
          </div>

          {/* Search Bar on Top */}
          <form onSubmit={handleSearchSubmit} className="flex-grow max-w-xl relative group">
             <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-black dark:group-focus-within:text-white transition-colors" size={18} />
             <input 
              type="text"
              placeholder="Search premium cases, lighters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-100 dark:bg-slate-800/50 border-none rounded-2xl h-11 pl-12 pr-4 text-sm font-medium focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all"
             />
          </form>

          <div className="flex items-center space-x-1 sm:space-x-2">
            <button 
              onClick={onToggleDarkMode}
              className="p-2.5 text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-full transition-all hover:scale-105 active:scale-95"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <Link to="/wishlist" className="p-2.5 text-slate-800 dark:text-white bg-slate-100 dark:bg-slate-800 rounded-full transition-all relative">
              <Heart size={20} className={wishlistCount > 0 ? "fill-red-500 text-red-500" : ""} />
              {wishlistCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[8px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center border-2 border-white dark:border-slate-900">
                  {wishlistCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-grow z-10 transition-colors duration-300">
        {children}
      </main>

      {/* Desktop Navigation (Left Rail) */}
      <nav className="hidden md:flex fixed left-4 top-4 bottom-4 w-20 flex-col items-center py-8 space-y-10 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2.5rem] z-50 shadow-xl">
        <NavIcon to="/" icon={<HomeIcon size={24} />} active={isActive('/')} label="Home" isDarkMode={isDarkMode} />
        <NavIcon to="/products" icon={<LayoutGrid size={24} />} active={isActive('/products')} label="Shop" isDarkMode={isDarkMode} />
        <div className="relative">
           <Link to="/ai" className={`flex flex-col items-center justify-center w-14 h-14 rounded-2xl shadow-xl transition-all active:scale-90 ${isActive('/ai') ? 'accent-gradient text-white scale-110' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300'}`}>
            <Sparkles size={26} strokeWidth={2.5} />
          </Link>
          <span className="text-[10px] font-bold text-slate-400 absolute -bottom-5 left-1/2 -translate-x-1/2">AI</span>
        </div>
        <NavIcon to="/cart" icon={<ShoppingBag size={24} />} active={isActive('/cart')} count={cartCount} label="Cart" isDarkMode={isDarkMode} />
        <NavIcon to="/contact" icon={<User size={24} />} active={isActive('/contact') || isActive('/support')} label="Account" isDarkMode={isDarkMode} />
      </nav>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-6 left-4 right-4 h-16 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-[2rem] flex items-center justify-between px-6 z-[60] pb-safe shadow-2xl">
        <MobileTab to="/" icon={<HomeIcon size={22} />} active={isActive('/')} />
        <MobileTab to="/products" icon={<LayoutGrid size={22} />} active={isActive('/products')} />
        
        <div className="relative -mt-12">
           <Link to="/ai" className={`flex flex-col items-center justify-center w-16 h-16 rounded-3xl shadow-2xl transition-all active:scale-95 ${isActive('/ai') ? 'accent-gradient text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-100 border border-white/50 dark:border-slate-700'}`}>
            <Sparkles size={28} strokeWidth={2.5} />
          </Link>
        </div>

        <MobileTab to="/cart" icon={<ShoppingBag size={22} />} active={isActive('/cart')} count={cartCount} />
        <MobileTab to="/contact" icon={<User size={22} />} active={isActive('/contact') || isActive('/support')} />
      </nav>
    </div>
  );
};

const NavIcon = ({ to, icon, active, count, label, isDarkMode }: any) => (
  <Link to={to} className={`flex flex-col items-center space-y-1 group transition-all ${active ? 'text-black dark:text-white scale-110 font-black' : 'text-slate-400 dark:text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'}`}>
    <div className="relative">
      {icon}
      {count > 0 && (
        <span className="absolute -top-1.5 -right-1.5 bg-black dark:bg-white text-white dark:text-black text-[9px] font-black w-4.5 h-4.5 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
          {count}
        </span>
      )}
    </div>
    <span className="text-[10px] font-bold uppercase tracking-tight">{label}</span>
  </Link>
);

const MobileTab = ({ to, icon, active, count }: any) => (
  <Link to={to} className={`flex flex-col items-center transition-all relative ${active ? 'text-black dark:text-white scale-125' : 'text-slate-400 dark:text-slate-500'}`}>
    {icon}
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-black dark:bg-white text-white dark:text-black text-[8px] font-black w-4 h-4 rounded-full flex items-center justify-center ring-2 ring-white dark:ring-slate-900">
        {count}
      </span>
    )}
  </Link>
);

export default Layout;
