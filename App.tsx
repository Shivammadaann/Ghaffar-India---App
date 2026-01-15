
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Products from './pages/Products';
import Categories from './pages/Categories';
import Cart from './pages/Cart';
import AIAssistant from './pages/AIAssistant';
import Support from './pages/Support';
import Wishlist from './pages/Wishlist';
import Legal from './pages/Legal';
import Checkout from './pages/Checkout';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Persistent theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setIsDarkMode(true);
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleAddToCart = (product: Product) => {
    setCart(current => {
      const existing = current.find(item => item.id === product.id);
      if (existing) {
        return current.map(item => 
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { ...product, quantity: 1 }];
    });
  };

  const handleClearCart = () => setCart([]);

  const handleAddToWishlist = (product: Product) => {
    setWishlist(current => {
      if (current.find(item => item.id === product.id)) return current;
      return [...current, product];
    });
  };

  const removeFromWishlist = (id: string) => {
    setWishlist(current => current.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(current => current.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (id: string) => {
    setCart(current => current.filter(item => item.id !== id));
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);
  const wishlistCount = wishlist.length;

  return (
    <Router>
      <Layout 
        cartCount={cartCount} 
        wishlistCount={wishlistCount}
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode(!isDarkMode)}
        onSearch={(query) => setSearchQuery(query)}
      >
        <Routes>
          <Route path="/" element={<Home onAddToCart={handleAddToCart} />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products" element={<Products onAddToCart={handleAddToCart} onAddToWishlist={handleAddToWishlist} searchQuery={searchQuery} />} />
          <Route path="/ai" element={<AIAssistant />} />
          <Route path="/support" element={<Support />} />
          <Route path="/wishlist" element={<Wishlist wishlist={wishlist} onRemove={removeFromWishlist} onAddToCart={handleAddToCart} />} />
          <Route path="/cart" element={<Cart cart={cart} onUpdateQty={updateQuantity} onRemove={removeFromCart} />} />
          <Route path="/checkout" element={cartCount > 0 ? <Checkout cart={cart} onClearCart={handleClearCart} /> : <Navigate to="/cart" />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/contact" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
