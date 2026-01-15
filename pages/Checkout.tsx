
import React, { useState } from 'react';
import { ChevronLeft, Truck, CreditCard, ShieldCheck, MapPin, CheckCircle2, ArrowRight, Wallet, Banknote, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { CartItem } from '../types';

interface CheckoutProps {
  cart: CartItem[];
  onClearCart: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, onClearCart }) => {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 99;
  const total = subtotal + shipping;

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate high-end payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      onClearCart();
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="max-w-2xl mx-auto px-6 py-24 text-center animate-in zoom-in-95 duration-700">
        <div className="w-24 h-24 bg-green-500 rounded-[2.5rem] flex items-center justify-center mx-auto mb-8 shadow-2xl shadow-green-200 dark:shadow-none">
          <CheckCircle2 size={48} className="text-white" />
        </div>
        <h1 className="text-4xl font-black mb-4 dark:text-white">Order Confirmed!</h1>
        <p className="text-slate-500 dark:text-slate-400 font-medium mb-12 max-w-md mx-auto leading-relaxed">
          Your Ghaffar premium gear is being prepared for shipment. We've sent the confirmation details to your email.
        </p>
        <div className="liquid-glass dark:bg-slate-800 p-8 rounded-[2.5rem] border-white/60 dark:border-slate-700 mb-12">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-white dark:border-slate-700">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Order ID</span>
            <span className="text-sm font-black dark:text-white">#GHA-882910</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Est. Delivery</span>
            <span className="text-sm font-black text-green-500">3-5 Business Days</span>
          </div>
        </div>
        <button 
          onClick={() => navigate('/')}
          className="accent-gradient text-white px-12 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 animate-in fade-in duration-700">
      <div className="flex items-center space-x-4 mb-10">
        <Link to="/cart" className="p-3 bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:bg-black hover:text-white transition-all">
          <ChevronLeft size={20} />
        </Link>
        <h1 className="text-3xl font-black dark:text-white">Checkout</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <form onSubmit={handlePlaceOrder} className="space-y-8">
            {/* Shipping Address Section */}
            <section className="liquid-glass dark:bg-slate-800/50 p-8 rounded-[3rem] border-white/60 dark:border-slate-700 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 rounded-2xl flex items-center justify-center text-blue-500">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-black dark:text-white">Shipping Address</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="John Doe" required />
                <InputGroup label="Email Address" placeholder="john@example.com" type="email" required />
                <div className="md:col-span-2">
                  <InputGroup label="Address" placeholder="Street name, building, apartment..." required />
                </div>
                <InputGroup label="City" placeholder="Mumbai" required />
                <InputGroup label="Pincode" placeholder="400001" required />
              </div>
            </section>

            {/* Payment Method Section */}
            <section className="liquid-glass dark:bg-slate-800/50 p-8 rounded-[3rem] border-white/60 dark:border-slate-700 shadow-xl">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 rounded-2xl flex items-center justify-center text-purple-500">
                  <CreditCard size={24} />
                </div>
                <h3 className="text-xl font-black dark:text-white">Payment Method</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <PaymentOption 
                  id="card" 
                  label="Card" 
                  icon={<CreditCard />} 
                  selected={paymentMethod === 'card'} 
                  onClick={() => setPaymentMethod('card')} 
                />
                <PaymentOption 
                  id="upi" 
                  label="UPI / Wallet" 
                  icon={<Wallet />} 
                  selected={paymentMethod === 'upi'} 
                  onClick={() => setPaymentMethod('upi')} 
                />
                <PaymentOption 
                  id="cod" 
                  label="Cash on Delivery" 
                  icon={<Banknote />} 
                  selected={paymentMethod === 'cod'} 
                  onClick={() => setPaymentMethod('cod')} 
                />
              </div>

              {paymentMethod === 'card' && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in slide-in-from-top-4 duration-500">
                  <div className="md:col-span-2">
                    <InputGroup label="Card Number" placeholder="0000 0000 0000 0000" />
                  </div>
                  <InputGroup label="Expiry Date" placeholder="MM/YY" />
                  <InputGroup label="CVV" placeholder="***" type="password" />
                </div>
              )}
            </section>

            <button 
              type="submit"
              disabled={isProcessing}
              className="w-full accent-gradient text-white py-6 rounded-[2.5rem] font-black text-xl shadow-2xl hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center space-x-4"
            >
              {isProcessing ? (
                <>
                  <Loader2 className="animate-spin" />
                  <span>Processing...</span>
                </>
              ) : (
                <>
                  <span>Place Secure Order</span>
                  <ArrowRight size={24} />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Order Summary Sidebar */}
        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="liquid-glass dark:bg-slate-800/80 p-8 rounded-[3rem] border-white/60 dark:border-slate-700 shadow-xl">
              <h2 className="text-2xl font-black mb-8 dark:text-white">Summary</h2>
              
              <div className="space-y-6 mb-8 max-h-60 overflow-y-auto no-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow min-w-0">
                      <h4 className="font-black text-sm dark:text-white truncate">{item.name}</h4>
                      <p className="text-xs font-bold text-slate-400">Qty: {item.quantity}</p>
                    </div>
                    <span className="font-black text-sm dark:text-white">₹{item.price * item.quantity}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4 pt-8 border-t border-white dark:border-slate-700">
                <div className="flex justify-between text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                  <span>Subtotal</span>
                  <span className="text-sm">₹{subtotal}</span>
                </div>
                <div className="flex justify-between text-slate-500 font-bold uppercase tracking-widest text-[10px]">
                  <span>Shipping</span>
                  <span className="text-sm">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
                </div>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-lg font-black dark:text-white">Total</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">₹{total}</span>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 dark:bg-white text-white dark:text-black p-6 rounded-[2.5rem] flex items-center space-x-4 shadow-xl">
              <ShieldCheck className="text-blue-400" size={28} />
              <div>
                <p className="text-xs font-black uppercase tracking-widest">Secure Checkout</p>
                <p className="text-[10px] font-bold opacity-60">Your data is protected by 256-bit encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
};

const InputGroup = ({ label, ...props }: any) => (
  <div className="flex flex-col space-y-2">
    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">{label}</label>
    <input 
      {...props}
      className="w-full bg-white/50 dark:bg-slate-900/50 border border-white dark:border-slate-800 rounded-2xl py-4 px-6 text-sm font-bold focus:ring-2 focus:ring-black/5 dark:focus:ring-white/5 outline-none transition-all placeholder:text-slate-300 dark:placeholder:text-slate-700"
    />
  </div>
);

const PaymentOption = ({ label, icon, selected, onClick }: any) => (
  <button
    type="button"
    onClick={onClick}
    className={`p-6 rounded-[2.2rem] flex flex-col items-center justify-center space-y-4 border-2 transition-all ${
      selected 
        ? 'bg-black dark:bg-white text-white dark:text-black border-black dark:border-white shadow-xl scale-105' 
        : 'bg-white dark:bg-slate-900/50 border-slate-100 dark:border-slate-800 text-slate-400'
    }`}
  >
    <div className={`transition-transform duration-500 ${selected ? 'scale-110' : ''}`}>
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <span className="text-[10px] font-black uppercase tracking-tight text-center">{label}</span>
  </button>
);

export default Checkout;
