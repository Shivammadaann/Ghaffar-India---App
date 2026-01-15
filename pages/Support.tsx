
import React from 'react';
import { MessageCircle, Phone, Mail, Package, ShieldCheck, Zap, ChevronRight, ExternalLink, MessageSquareText } from 'lucide-react';

const Support: React.FC = () => {
  const LOGO_SRC = "https://i.ibb.co/89vLMB2/phone-case-logo.png";

  const supportActions = [
    { title: "Track Order", sub: "Check delivery status", icon: <Package className="text-blue-500" />, color: "bg-blue-50" },
    { title: "Warranty Claim", sub: "Register your product", icon: <ShieldCheck className="text-emerald-500" />, color: "bg-emerald-50" },
    { title: "Business Query", sub: "Bulk & Corporate", icon: <Zap className="text-purple-500" />, color: "bg-purple-50" },
    { title: "Technical Help", sub: "Installation guides", icon: <MessageSquareText className="text-orange-500" />, color: "bg-orange-50" },
  ];

  return (
    <div className="max-w-2xl mx-auto px-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Support Header */}
      <div className="mb-10 text-center">
        <div className="relative inline-block mb-6">
          <div className="w-20 h-20 accent-gradient rounded-[2rem] flex items-center justify-center shadow-2xl p-4">
            <img src={LOGO_SRC} alt="Logo" className="w-full h-auto object-contain invert brightness-0" />
          </div>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-4 border-white rounded-full animate-pulse shadow-lg" />
        </div>
        <h1 className="text-3xl font-black tracking-tight">Support Center</h1>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Response time: ~15 mins</span>
        </div>
      </div>

      {/* Main Support Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {supportActions.map((action, idx) => (
          <button key={idx} className="liquid-glass p-5 rounded-[2.2rem] text-left border-white/60 hover:bg-white/60 transition-all active:scale-95 shadow-sm group">
            <div className={`w-12 h-12 ${action.color} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:rotate-6`}>
              {action.icon}
            </div>
            <h3 className="font-black text-xs text-slate-900 mb-1">{action.title}</h3>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tight">{action.sub}</p>
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
