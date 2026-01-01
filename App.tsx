import React from 'react';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Advantages from './components/Advantages';
import Contact from './components/Contact';
import { SERVICE_CATEGORIES } from './constants';

function App() {
  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 selection:bg-blue-500/30">
      {/* Navbar placeholder for visual anchoring */}
      <nav className="fixed top-0 w-full z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
            Yaer Marketing
          </div>
          <a 
            href="https://t.me/yaerchina" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-500 transition-colors"
          >
            联系我们
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        
        {/* Core Services Section */}
        <div className="space-y-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white inline-block border-b-4 border-blue-500 pb-2">
              核心业务板块
            </h2>
          </div>
          
          {SERVICE_CATEGORIES.map((category, index) => (
            <ServiceSection 
              key={category.id} 
              category={category} 
              index={index} 
            />
          ))}
        </div>

        <Advantages />
        <Contact />
      </main>
    </div>
  );
}

export default App;