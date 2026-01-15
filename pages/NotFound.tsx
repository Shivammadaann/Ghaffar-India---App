
import React from 'react';
import { Ghost, Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-32 text-center flex flex-col items-center justify-center">
      <div className="w-32 h-32 bg-slate-100 dark:bg-slate-800 rounded-[3rem] flex items-center justify-center mb-8 animate-bounce">
        <Ghost size={64} className="text-slate-400" />
      </div>
      <h1 className="text-5xl font-black mb-4 dark:text-white">404</h1>
      <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200 uppercase tracking-widest">Lost in the Ghaffar Workshop?</h2>
      <p className="text-slate-500 dark:text-slate-400 mb-12 max-w-md mx-auto leading-relaxed">
        The page you're looking for has moved to another dimension or never existed in the first place.
      </p>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
        <Link 
          to="/" 
          className="accent-gradient text-white px-10 py-4 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center"
        >
          <Home size={18} className="mr-3" />
          Back Home
        </Link>
        <button 
          onClick={() => window.history.back()}
          className="bg-white dark:bg-slate-800 text-black dark:text-white border border-slate-100 dark:border-slate-700 px-10 py-4 rounded-[2rem] font-black text-sm uppercase tracking-widest shadow-sm hover:bg-slate-50 transition-all flex items-center"
        >
          <ArrowLeft size={18} className="mr-3" />
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
