import React from 'react';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Advantages } from './components/Advantages';
import { Contact } from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-yellow-200 selection:text-black">
      <Hero />
      <Services />
      <Advantages />
      <Contact />
      
      {/* Sticky Mobile Contact Button */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a 
          href="https://t.me/yaerchina" 
          target="_blank" 
          rel="noreferrer"
          className="flex items-center justify-center w-16 h-16 bg-blue-500 rounded-full border-4 border-white shadow-lg text-white animate-bounce"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="32" 
            height="32" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </a>
      </div>
    </div>
  );
}

export default App;