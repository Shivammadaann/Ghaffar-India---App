
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, Trash2 } from 'lucide-react';
import { getAIShopperResponse } from '../services/gemini';

const AIAssistant: React.FC = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model', text: string }[]>([
    { role: 'model', text: "👋 Hi! I'm Ghaffar, your premium shopping AI. Looking for a military-grade case or something unique like our 3D dragon prints?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const history = messages.slice(-10);
    const response = await getAIShopperResponse(userMsg, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response }]);
    setIsLoading(false);
  };

  const clearChat = () => {
    setMessages([{ role: 'model', text: "Chat refreshed! What's on your mind?" }]);
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-100px)] max-w-4xl mx-auto px-4">
      {/* Header Menu with Glass */}
      <div className="liquid-glass rounded-[1.5rem] mt-2 mb-4 px-6 py-4 flex items-center justify-between border-white/60 shadow-xl">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 accent-gradient rounded-2xl flex items-center justify-center text-white shadow-lg">
            <Sparkles size={24} />
          </div>
          <div>
            <h1 className="font-black text-sm tracking-tight">Ghaffar Shopper</h1>
            <div className="flex items-center space-x-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-[10px] text-slate-600 font-bold uppercase tracking-wider">Active Assistant</span>
            </div>
          </div>
        </div>
        <button onClick={clearChat} className="p-2.5 bg-white/50 text-slate-400 hover:text-red-500 transition-all rounded-xl border border-white/60">
          <Trash2 size={20} />
        </button>
      </div>

      {/* Messages Window */}
      <div ref={scrollRef} className="flex-grow overflow-y-auto px-2 space-y-6 no-scrollbar pb-10">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] px-5 py-4 rounded-[1.8rem] text-sm font-medium leading-relaxed shadow-sm transition-all ${
              msg.role === 'user' 
                ? 'accent-gradient text-white rounded-tr-none' 
                : 'liquid-glass text-slate-800 rounded-tl-none border-white/70'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="liquid-glass rounded-[1.8rem] rounded-tl-none px-6 py-4 flex space-x-1.5 border-white/70">
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
              <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce [animation-delay:0.4s]"></div>
            </div>
          </div>
        )}
      </div>

      {/* Floating Input Menu */}
      <div className="p-3 mb-6">
        <div className="liquid-glass rounded-[2rem] p-2 flex items-center border-white/80 shadow-2xl focus-within:ring-2 focus-within:ring-black/10 transition-all">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Ghaffar anything..."
            className="flex-grow bg-transparent border-none py-3.5 px-5 text-sm font-bold focus:outline-none placeholder:text-slate-400"
          />
          <button 
            disabled={!input.trim() || isLoading}
            onClick={handleSend}
            className={`p-3 rounded-2xl transition-all shadow-lg ${input.trim() && !isLoading ? 'accent-gradient text-white scale-100' : 'bg-slate-200 text-slate-400 scale-90'}`}
          >
            <Send size={20} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
