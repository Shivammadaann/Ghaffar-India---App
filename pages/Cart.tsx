
import React from 'react';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, CreditCard } from 'lucide-react';
import { CartItem } from '../types';
import { Link } from 'react-router-dom';

interface CartProps {
  cart: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

const Cart: React.FC<CartProps> = ({ cart, onUpdateQty, onRemove }) => {
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = subtotal > 1500 ? 0 : 99;

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-32 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
          <ShoppingBag className="text-slate-400" size={40} />
        </div>
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added anything to your cart yet. Explore our premium collection and find something you love.</p>
        <Link 
          to="/products" 
          className="bg-black text-white px-8 py-3 rounded-full font-bold hover:bg-slate-800 transition-colors"
        >
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-12">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex gap-4 md:gap-6 bg-white p-4 rounded-xl border border-slate-100">
              <div className="w-24 h-24 md:w-32 md:h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
              </div>
              <div className="flex-grow flex flex-col justify-between">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-sm md:text-lg mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-500">{item.category}</p>
                  </div>
                  <button 
                    onClick={() => onRemove(item.id)}
                    className="text-slate-400 hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                    <button 
                      onClick={() => onUpdateQty(item.id, -1)}
                      className="p-1 md:p-2 hover:bg-slate-50 text-slate-600"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="w-8 md:w-12 text-center text-sm font-bold">{item.quantity}</span>
                    <button 
                      onClick={() => onUpdateQty(item.id, 1)}
                      className="p-1 md:p-2 hover:bg-slate-50 text-slate-600"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="text-right">
                    <span className="block font-bold md:text-lg">₹{item.price * item.quantity}</span>
                    {item.quantity > 1 && (
                      <span className="text-[10px] text-slate-400">₹{item.price} each</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-slate-50 p-8 rounded-2xl sticky top-24">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span>{shipping === 0 ? <span className="text-green-600 font-bold uppercase text-xs">Free</span> : `₹${shipping}`}</span>
              </div>
              <div className="border-t border-slate-200 pt-4 flex justify-between font-bold text-xl">
                <span>Total</span>
                <span>₹{subtotal + shipping}</span>
              </div>
            </div>

            <button className="w-full bg-black text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-slate-800 transition-all mb-4">
              Checkout <ArrowRight size={20} />
            </button>
            
            <div className="flex items-center justify-center space-x-4 text-slate-400">
              <CreditCard size={18} />
              <span className="text-xs uppercase tracking-widest font-medium">Secure Payment</span>
            </div>

            <div className="mt-8 p-4 bg-white rounded-lg border border-slate-200">
              <p className="text-[10px] text-slate-500 text-center">
                Free shipping on orders above ₹1500. Secure checkout powered by Ghaffar Pay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
