import React from 'react';
import { CONTACTS } from '../constants';
import { Send, MessageCircle, User } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-cartoon font-black mb-8 text-slate-900">
          联系我们，开启合作
        </h2>
        
        <p className="text-xl font-bold text-slate-600 mb-12">
          欢迎项目方、工作室、代理长期合作，<br className="hidden md:block"/>
          支持定制方案与渠道整合。
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CONTACTS.map((contact, idx) => (
            <a 
              key={idx}
              href={contact.link || '#'}
              target={contact.link ? "_blank" : "_self"}
              rel="noreferrer"
              className={`
                flex flex-col items-center justify-center p-8 rounded-3xl border-4 border-black bg-slate-50
                transition-transform hover:scale-105 active:scale-95 shadow-cartoon
                ${contact.type === 'telegram' ? 'bg-blue-50 hover:bg-blue-100' : ''}
                ${contact.type === 'channel' ? 'bg-indigo-50 hover:bg-indigo-100' : ''}
                ${contact.type === 'qq' ? 'bg-red-50 hover:bg-red-100' : ''}
              `}
              onClick={(e) => {
                if (!contact.link) e.preventDefault();
              }}
            >
              <div className="w-16 h-16 rounded-full border-4 border-black bg-white flex items-center justify-center mb-4 shadow-sm">
                {contact.type === 'telegram' && <Send size={32} className="text-blue-500 ml-[-4px] mt-[2px]" />}
                {contact.type === 'channel' && <MegaphoneIcon />}
                {contact.type === 'qq' && <MessageCircle size={32} className="text-red-500" />}
              </div>
              <h3 className="text-lg font-bold text-slate-500 mb-1">{contact.label}</h3>
              <p className="text-2xl font-black text-slate-900 break-all">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className="mt-16 text-slate-400 font-bold text-sm">
          © {new Date().getFullYear()} 雅儿币圈营销服务. All Rights Reserved.
        </div>
      </div>
    </section>
  );
};

const MegaphoneIcon = () => (
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
    className="text-indigo-600"
  >
    <path d="m3 11 18-5v12L3 14v-3z"/>
    <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/>
  </svg>
);