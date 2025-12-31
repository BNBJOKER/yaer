import React from 'react';
import { SERVICES } from '../constants';
import { SectionTitle } from './ui/SectionTitle';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 bg-indigo-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle title="核心业务板块" subtitle="全面覆盖您的推广需求" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className={`relative bg-white p-8 rounded-3xl border-4 border-black shadow-cartoon hover:shadow-cartoon-hover hover:-translate-y-2 transition-all duration-300 flex flex-col`}
            >
              {/* Icon Badge */}
              <div className={`w-16 h-16 rounded-2xl border-4 border-black flex items-center justify-center mb-6 ${service.color.replace('text-', 'bg-').replace('bg-', 'text-white ')} shadow-sm`}>
                 <service.icon size={32} strokeWidth={2.5} />
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-3 font-cartoon">
                {service.title}
              </h3>
              
              <p className="text-slate-600 font-bold mb-6 text-sm">
                {service.description}
              </p>
              
              <ul className="space-y-3 mt-auto">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-black flex-shrink-0" />
                    <span className="text-slate-700 font-semibold">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};