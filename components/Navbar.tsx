import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '首页', href: '#' },
    { name: '业务板块', href: '#services' },
    { name: '服务优势', href: '#advantages' },
    { name: '联系我们', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between">
        {/* Logo Text */}
        <div className="text-2xl font-bold tracking-tighter text-white">
          YAER<span className="text-brand-400">.MKT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 hover:text-white font-medium transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="px-5 py-2 bg-brand-600 hover:bg-brand-500 text-white rounded-full font-bold transition-colors shadow-lg shadow-brand-900/20"
          >
            立即合作
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 border-b border-slate-800 p-4 flex flex-col gap-4 shadow-2xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-300 hover:text-white py-2 text-lg font-medium border-b border-slate-800/50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact"
            className="mt-2 text-center px-5 py-3 bg-brand-600 text-white rounded-lg font-bold"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            立即合作
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;