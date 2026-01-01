import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServiceSection from './components/ServiceSection';
import Advantages from './components/Advantages';
import ContactFooter from './components/ContactFooter';
import { SERVICE_SECTIONS } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-100 selection:bg-brand-500 selection:text-white font-sans">
      <Navbar />
      
      <main>
        <Hero />
        
        <div id="services">
          {SERVICE_SECTIONS.map((section, index) => (
            <ServiceSection 
              key={section.id} 
              data={section} 
              index={index} 
            />
          ))}
        </div>

        <div id="advantages">
          <Advantages />
        </div>
      </main>

      <ContactFooter />
    </div>
  );
};

export default App;