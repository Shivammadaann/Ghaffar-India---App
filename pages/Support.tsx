
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, Package, ShieldCheck, Zap, ChevronRight, ExternalLink, MessageSquareText, Search, Truck, CheckCircle2 } from 'lucide-react';

const Support: React.FC = () => {
  const LOGO_SRC = "https://cdn.shopify.com/s/files/1/0760/3444/1401/files/Black_icon_500_x_500_No_BG_060e5449-ac59-4999-bc13-01094c92edbf.png?v=1768440378";
  const [orderId, setOrderId] = useState('');
  const [trackingStatus, setTrackingStatus] = useState<'idle' | 'loading' | 'result'>('idle');

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderId.trim()) return;
    setTrackingStatus('loading');
    setTimeout(() => setTrackingStatus('result'), 1500);
  };

  const supportActions = [
    { title: "Warranty Claim", sub: "Register your product", icon: <ShieldCheck className="text-emerald-500" />, color: "bg-emerald-50 dark:bg-emerald-900/20" },
    { title: "Business Query", sub: "Bulk & Corporate", icon: <Zap className="text-purple-500" />, color: "bg-purple-50 dark:bg-purple-900/20" },
    { title: "Technical Help", sub: "Installation guides", icon: <MessageSquareText className="text-orange-500" />, color: "bg-orange-50 dark:bg-orange-900/20" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Support Header */}
      <div className="mb-10 text-center">
        <div className="relative inline-block mb-6">
          <div className="w-20 h-20 accent-gradient rounded-[2rem] flex items-center justify-center shadow-2xl p-4">
            <img src={LOGO_SRC} alt="Logo" className="w-full h-auto object-contain invert brightness-0" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white dark:border-slate-900 rounded-full animate-pulse shadow-lg" />
        </div>
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Support Hub</h1>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Response time: ~15 mins</span>
        </div>
      </div>

      {/* Track Order Section */}
      <div className="liquid-glass dark:bg-slate-800/50 p-8 rounded-[2.5rem] mb-8 border-white/60 dark:border-slate-700 shadow-xl">
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500">
            <Package size={24} />
          </div>
          <div>
            <h3 className="font-black text-lg text-slate-900 dark:text-white">Track Your Order</h3>
            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Real-time delivery updates</p>
          </div>
        </div>

        <form onSubmit={handleTrack} className="space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Enter Order ID (e.g., GHA-12345)" 
              value={orderId}
              onChange={(e) => setOrderId(e.target.value)}
              className="w-full bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all"
            />
            <button 
              type="submit"
              className="absolute right-2 top-2 bottom-2 bg-black dark:bg-white text-white dark:text-black px-6 rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-80 transition-all active:scale-95"
            >
              Track
            </button>
          </div>
        </form>

        {trackingStatus === 'loading' && (
          <div className="mt-8 flex flex-col items-center py-6">
            <div className="w-10 h-10 border-4 border-slate-200 border-t-black dark:border-slate-700 dark:border-t-white rounded-full animate-spin mb-4" />
            <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Searching courier network...</p>
          </div>
        )}

        {trackingStatus === 'result' && (
          <div className="mt-10 animate-in slide-in-from-top-4 duration-500">
            <div className="bg-slate-50 dark:bg-slate-900/50 rounded-3xl p-6 border border-slate-100 dark:border-slate-800">
               <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle2 className="text-green-500" size={20} />
                    <span className="font-black text-sm text-slate-900 dark:text-white">Order Processed</span>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase">Oct 24, 2023</span>
               </div>
               
               <div className="relative pl-8 space-y-10">
                  <div className="absolute left-3.5 top-2 bottom-2 w-0.5 bg-slate-200 dark:bg-slate-800" />
                  
                  <div className="relative">
                    <div className="absolute -left-6 w-3 h-3 bg-green-500 rounded-full ring-4 ring-white dark:ring-slate-900" />
                    <h4 className="font-black text-sm text-slate-900 dark:text-white">In Transit</h4>
                    <p className="text-xs text-slate-500 font-medium">Shipment has left Ghaffar Warehouse, Mumbai</p>
                  </div>
                  
                  <div className="relative opacity-50">
                    <div className="absolute -left-6 w-3 h-3 bg-slate-300 dark:bg-slate-700 rounded-full ring-4 ring-white dark:ring-slate-900" />
                    <h4 className="font-black text-sm">Out for Delivery</h4>
                    <p className="text-xs font-medium">Expected Tomorrow by 8 PM</p>
                  </div>
               </div>
            </div>
          </div>
        )}
      </div>

      {/* Main Support Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
        {supportActions.map((action, idx) => (
          <button key={idx} className="liquid-glass dark:bg-slate-800/50 p-5 rounded-[2.2rem] text-left border-white/60 dark:border-slate-700 hover:bg-white/60 transition-all active:scale-95 shadow-sm group">
            <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
              {action.icon}
            </div>
            <h3 className="font-black text-xs text-slate-900 dark:text-white mb-1">{action.title}</h3>
            <p className="text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-tight leading-tight">{action.sub}</p>
          </button>
        ))}
      </div>

      {/* Direct Contact Buttons */}
      <div className="space-y-4 mb-10">
        <button className="w-full bg-[#25D366] text-white p-5 rounded-[2rem] flex items-center justify-between shadow-xl hover:opacity-90 active:scale-[0.98] transition-all">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-xl">
              <MessageCircle size={22} fill="white" />
            </div>
            <div className="text-left">
              <span className="block font-black text-sm">WhatsApp Chat</span>
              <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">Connect Instantly</span>
            </div>
          </div>
          <ExternalLink size={18} className="opacity-60" />
        </button>

        <button className="w-full accent-gradient text-white p-5 rounded-[2rem] flex items-center justify-between shadow-xl hover:opacity-90 active:scale-[0.98] transition-all">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-2.5 rounded-xl">
              <Phone size={22} fill="white" />
            </div>
            <div className="text-left">
              <span className="block font-black text-sm">Call Our Hotline</span>
              <span className="text-[10px] font-bold opacity-80 uppercase tracking-widest">+91 98765 43210</span>
            </div>
          </div>
          <ChevronRight size={18} className="opacity-60" />
        </button>
      </div>

      {/* Quick Links Footer */}
      <div className="liquid-glass-dark rounded-[2.5rem] p-8 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-3xl rounded-full" />
        <h3 className="font-black text-lg mb-6 flex items-center">
          <Mail size={20} className="mr-3 text-white/60" />
          Email Support
        </h3>
        <p className="text-sm text-white/60 mb-8 leading-relaxed font-medium">
          Have a more detailed inquiry? Drop us a line and our dedicated team will get back to you within 24 hours.
        </p>
        <a 
          href="mailto:support@ghaffarindia.com" 
          className="inline-flex items-center text-xs font-black uppercase tracking-widest bg-white text-black px-6 py-3 rounded-xl hover:bg-slate-100 transition-colors"
        >
          support@ghaffarindia.com
        </a>
      </div>

      {/* Bottom Padding for Mobile Nav */}
      <div className="h-20" />
    </div>
  );
};

export default Support;
