import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Send, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <footer className="relative py-16 sm:py-24 overflow-hidden">
        {/* Decorative background */}
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-900/20 to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          准备好让您的项目起飞了吗？
        </h2>
        <p className="text-slate-400 text-lg mb-12">
            欢迎项目方、工作室、代理长期合作，支持定制方案与渠道整合。
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href={CONTACT_INFO.telegramUrl} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-4 p-6 bg-blue-600 rounded-2xl hover:bg-blue-500 transition-all shadow-xl shadow-blue-600/20 group"
          >
            <div className="p-3 bg-white/20 rounded-xl">
                <Send className="w-8 h-8 text-white group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </div>
            <div className="text-left">
                <div className="text-sm text-blue-100 font-medium">Telegram 联系</div>
                <div className="text-2xl font-bold text-white">@{CONTACT_INFO.telegram}</div>
            </div>
          </a>

          <div className="flex items-center justify-center gap-4 p-6 bg-slate-800 rounded-2xl border border-slate-700">
            <div className="p-3 bg-slate-700 rounded-xl">
                <MessageCircle className="w-8 h-8 text-slate-300" />
            </div>
            <div className="text-left">
                <div className="text-sm text-slate-400 font-medium">QQ 咨询</div>
                <div className="text-2xl font-bold text-white">{CONTACT_INFO.qq}</div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800">
            <a href={CONTACT_INFO.channelUrl} className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                关注官方频道: {CONTACT_INFO.telegramChannel}
            </a>
            <p className="text-slate-600 mt-4 text-sm">
                © 2024 Yaer Crypto Marketing. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;