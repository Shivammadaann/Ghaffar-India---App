
import React from 'react';
import { ChevronRight, Settings, Package, MapPin, Heart, LifeBuoy, LogOut, Bell, ShieldCheck, User as UserIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Profile: React.FC = () => {
  const LOGO_SRC = "https://cdn.shopify.com/s/files/1/0760/3444/1401/files/Black_icon_500_x_500_No_BG_060e5449-ac59-4999-bc13-01094c92edbf.png?v=1768440378";

  return (
    <div className="max-w-xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="mb-12 text-center">
        <div className="relative inline-block mb-6">
          <div className="w-28 h-28 accent-gradient rounded-[2.5rem] flex items-center justify-center shadow-2xl p-4 overflow-hidden">
            <img src={LOGO_SRC} alt="Logo" className="w-full h-auto object-contain invert brightness-0" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-black dark:bg-white text-white dark:text-black rounded-full flex items-center justify-center border-4 border-slate-50 dark:border-slate-900 shadow-xl">
             <UserIcon size={14} />
          </div>
        </div>
        <h1 className="text-3xl font-black tracking-tight dark:text-white">Aaryan Sharma</h1>
        <p className="text-xs font-bold text-slate-400 mt-2 uppercase tracking-widest">Ghaffar Gold Member ✨</p>
      </div>
      
      <div className="space-y-4">
        <AccountButton label="Orders History" sub="14 successful deliveries" icon={<Package size={18} />} to="/support" />
        <AccountButton label="Saved Addresses" sub="Home, Office & 1 more" icon={<MapPin size={18} />} to="/legal" />
        <AccountButton label="My Wishlist" sub="8 items currently saved" icon={<Heart size={18} />} to="/wishlist" />
        <AccountButton label="Notifications" sub="Order status & New drops" icon={<Bell size={18} />} to="/contact" />
        <AccountButton label="Security" sub="2FA & Password" icon={<ShieldCheck size={18} />} to="/legal" />
        <AccountButton label="Support Center" sub="Get help with your orders" icon={<LifeBuoy size={18} />} to="/support" />
        <AccountButton label="Settings" sub="Language, Dark Mode" icon={<Settings size={18} />} to="/contact" />
      </div>
      
      <button className="w-full mt-12 py-5 text-red-500 font-black text-sm liquid-glass rounded-[2rem] border-red-100 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all active:scale-95 shadow-sm flex items-center justify-center space-x-3">
        <LogOut size={18} />
        <span>Sign Out</span>
      </button>
      
      <div className="mt-12 text-center opacity-30">
        <p className="text-[10px] font-black uppercase tracking-[0.3em]">Version 2.5.0-Flash</p>
      </div>

      <div className="h-20 md:hidden" />
    </div>
  );
};

const AccountButton = ({ label, sub, icon, to }: { label: string, sub: string, icon: React.ReactNode, to: string }) => (
  <Link to={to} className="w-full block liquid-glass p-6 rounded-[2rem] flex items-center justify-between border-white/60 dark:border-slate-800 active:bg-white/60 transition-all shadow-sm group">
    <div className="flex items-center space-x-5">
      <div className="w-12 h-12 bg-slate-100 dark:bg-slate-900/50 rounded-2xl flex items-center justify-center text-slate-400 group-hover:text-black dark:group-hover:text-white transition-colors">
        {icon}
      </div>
      <div className="text-left">
        <span className="block font-black text-sm text-slate-900 dark:text-white">{label}</span>
        <span className="text-[11px] text-slate-500 font-bold uppercase tracking-tight">{sub}</span>
      </div>
    </div>
    <div className="w-10 h-10 bg-white/40 dark:bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-black group-hover:text-white dark:group-hover:bg-white dark:group-hover:text-black transition-all shadow-inner">
      <ChevronRight size={18} strokeWidth={3} />
    </div>
  </Link>
);

export default Profile;
