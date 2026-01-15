
import React, { useState } from 'react';
import { ShieldCheck, FileText, RotateCcw, Truck, ChevronRight, Scale } from 'lucide-react';

const Legal: React.FC = () => {
  const [activeSection, setActiveSection] = useState<'privacy' | 'terms' | 'refund' | 'shipping'>('privacy');

  const sections = [
    { id: 'privacy', label: 'Privacy Policy', icon: <ShieldCheck size={20} /> },
    { id: 'terms', label: 'Terms of Use', icon: <FileText size={20} /> },
    { id: 'refund', label: 'Refund Policy', icon: <RotateCcw size={20} /> },
    { id: 'shipping', label: 'Shipping Policy', icon: <Truck size={20} /> },
  ] as const;

  const renderContent = () => {
    switch (activeSection) {
      case 'privacy':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Privacy Policy</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              At Ghaffar India, we take your privacy seriously. This policy describes how we collect, use, and handle your personal information when you use our website and services.
            </p>
            <div className="space-y-4">
              <h3 className="font-black text-slate-800 dark:text-slate-200">1. Data Collection</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                We collect information you provide directly to us, such as when you create an account, make a purchase, or contact support. This includes your name, email address, shipping address, and payment information.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">2. Usage of Data</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Your data is used to process orders, improve our products, and communicate with you about your account or promotional offers.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">3. Third-Party Sharing</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                We do not sell your personal data. We only share information with trusted partners necessary for fulfilling your orders (e.g., shipping carriers and payment processors).
              </p>
            </div>
          </div>
        );
      case 'terms':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Terms of Use</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              By accessing Ghaffar India, you agree to comply with these terms. Please read them carefully.
            </p>
            <div className="space-y-4">
              <h3 className="font-black text-slate-800 dark:text-slate-200">1. Acceptance of Terms</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Use of this site constitutes your acceptance of these terms and conditions. If you do not agree, please do not use the site.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">2. Intellectual Property</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                All content, designs, and logos on this site are the property of Ghaffar India and are protected by copyright laws. Unauthorized use is strictly prohibited.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">3. Limitation of Liability</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Ghaffar India is not liable for any direct or indirect damages resulting from the use or inability to use the products purchased from this site.
              </p>
            </div>
          </div>
        );
      case 'refund':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Refund Policy</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              We want you to be 100% satisfied. If something isn't right, we're here to help.
            </p>
            <div className="space-y-4">
              <h3 className="font-black text-slate-800 dark:text-slate-200">1. Return Eligibility</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Items must be returned within 7 days of delivery in their original packaging and unused condition. 3D printed custom items are non-refundable unless defective.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">2. Refund Process</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Once we receive your return, we will inspect it and notify you. If approved, your refund will be processed to the original payment method within 5-7 business days.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">3. Non-Refundable Items</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Sale items and gift cards are generally non-refundable. Please check product descriptions for specific exclusions.
              </p>
            </div>
          </div>
        );
      case 'shipping':
        return (
          <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">Shipping Policy</h2>
            <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
              Premium products deserve premium handling. Here's how we get your Ghaffar gear to you.
            </p>
            <div className="space-y-4">
              <h3 className="font-black text-slate-800 dark:text-slate-200">1. Delivery Times</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                Standard shipping takes 3-5 business days across major cities in India. Remote locations may take up to 7-10 days.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">2. Shipping Costs</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                We offer free shipping on all orders above ₹1500. For orders below this amount, a flat shipping fee of ₹99 applies.
              </p>
              <h3 className="font-black text-slate-800 dark:text-slate-200">3. Tracking Your Order</h3>
              <p className="text-sm text-slate-500 dark:text-slate-500 leading-relaxed">
                You will receive a tracking ID via SMS and email once your order is dispatched. You can track it directly on our Support Hub.
              </p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 dark:text-white">Legal Center</h1>
          <p className="text-slate-500 font-bold uppercase tracking-widest text-xs mt-2">Compliance & Security</p>
        </div>
        <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-3xl flex items-center space-x-4 border border-slate-200 dark:border-slate-700">
          <Scale size={24} className="text-slate-400" />
          <p className="text-[10px] font-black uppercase text-slate-500 leading-tight">Last Updated<br/><span className="text-slate-900 dark:text-white text-xs">January 2024</span></p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Navigation Tabs */}
        <div className="md:col-span-4 space-y-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => setActiveSection(section.id as any)}
              className={`w-full p-5 rounded-[2rem] flex items-center justify-between transition-all group ${
                activeSection === section.id 
                  ? 'bg-black dark:bg-white text-white dark:text-black shadow-xl scale-[1.02]' 
                  : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-700 border border-slate-100 dark:border-slate-700'
              }`}
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2.5 rounded-xl ${activeSection === section.id ? 'bg-white/20 dark:bg-black/10' : 'bg-slate-100 dark:bg-slate-900/50'}`}>
                  {section.icon}
                </div>
                <span className="font-black text-sm">{section.label}</span>
              </div>
              <ChevronRight size={16} className={`transition-transform group-hover:translate-x-1 ${activeSection === section.id ? 'opacity-100' : 'opacity-0'}`} />
            </button>
          ))}
          
          <div className="mt-8 p-8 liquid-glass dark:bg-slate-800/50 rounded-[2.5rem] border-white/60 dark:border-slate-700 text-center">
            <h4 className="font-black text-slate-900 dark:text-white mb-2">Need Clarity?</h4>
            <p className="text-xs text-slate-500 font-medium mb-6 leading-relaxed">Our support team is here to answer any specific legal or policy questions you might have.</p>
            <a href="mailto:legal@ghaffarindia.com" className="inline-block bg-slate-100 dark:bg-slate-900 px-6 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all">Contact Legal</a>
          </div>
        </div>

        {/* Content Area */}
        <div className="md:col-span-8">
          <div className="liquid-glass dark:bg-slate-800/30 p-8 md:p-12 rounded-[3.5rem] border-white/60 dark:border-slate-800 shadow-sm min-h-[500px]">
            {renderContent()}
          </div>
        </div>
      </div>

      {/* Bottom Padding for Mobile Nav */}
      <div className="h-20" />
    </div>
  );
};

export default Legal;
