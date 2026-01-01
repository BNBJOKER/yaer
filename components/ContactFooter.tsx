import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Send, MessageCircle, Link as LinkIcon } from 'lucide-react';

const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="py-20 px-4 bg-black text-white relative">
      <div className="container mx-auto max-w-4xl text-center">
        
        <h2 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">
          联系我们
        </h2>
        <p className="text-xl text-slate-400 mb-12">
          欢迎项目方、工作室、代理长期合作，支持定制方案与渠道整合
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {/* Telegram Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-brand-500/50 transition-all group">
            <div className="flex justify-center mb-4 text-brand-400 group-hover:scale-110 transition-transform">
              <Send size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2">Telegram</h3>
            <p className="text-slate-400 mb-4">TG 雅儿</p>
            <a 
              href={CONTACT_INFO.telegramContact} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-brand-600 rounded-full font-medium hover:bg-brand-500 transition-colors"
            >
              @yaerchina
            </a>
          </div>

          {/* QQ Card */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/50 transition-all group">
            <div className="flex justify-center mb-4 text-purple-400 group-hover:scale-110 transition-transform">
              <MessageCircle size={48} />
            </div>
            <h3 className="text-2xl font-bold mb-2">QQ</h3>
            <p className="text-slate-400 mb-4">商务合作</p>
            <div className="inline-block px-6 py-2 bg-slate-800 rounded-full font-medium text-slate-200 select-all cursor-pointer hover:bg-slate-700 transition-colors">
              {CONTACT_INFO.qq}
            </div>
          </div>
        </div>

        {/* Channel Link */}
        <div className="bg-slate-900/80 rounded-xl p-6 max-w-2xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-800">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-slate-800 rounded-lg">
              <LinkIcon size={24} className="text-slate-300" />
            </div>
            <div className="text-left">
              <div className="text-sm text-slate-400">官方 TG 频道</div>
              <div className="font-mono text-brand-400">{CONTACT_INFO.telegramChannel.replace('https://', '')}</div>
            </div>
          </div>
          <a 
            href={CONTACT_INFO.telegramChannel}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-slate-100 text-slate-900 rounded-lg font-bold hover:bg-white transition-colors w-full md:w-auto text-center"
          >
            关注频道
          </a>
        </div>

        <div className="mt-20 text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} 雅儿币圈营销服务. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;