import { 
  ScanFace, 
  BarChart3, 
  ShieldCheck, 
  Megaphone, 
  Globe2, 
  Zap, 
  Layers, 
  Target, 
  Award 
} from 'lucide-react';
import { ServiceItem, AdvantageItem, ContactInfo } from './types';

export const APP_TITLE = "雅儿币圈营销服务";
export const APP_SUBTITLE = "一站式区块链项目推广解决方案";
export const APP_DESCRIPTION = "我们专注于 加密货币 / Web3 / 区块链项目 的品牌曝光、渠道投放与生态建设，覆盖从项目冷启动到长期增长的完整营销链路，助力项目实现快速破圈与持续流量转化。";

export const SERVICES: ServiceItem[] = [
  {
    id: 's1',
    title: '平台头像 & 官方收录服务',
    description: '提升项目可信度与曝光权重，快速建立品牌形象。',
    icon: ScanFace,
    color: 'bg-blue-100 border-blue-500 text-blue-600',
    items: [
      'Ave 平台头像 / 热搜 / 审计',
      'TokenPocket (TP) 头像',
      'BitKeep (BK) 头像',
      '欧易 (OKX) 头像收录',
      '币安 (Binance) 头像收录',
      'PancakeSwap (薄饼) 头像',
      'OneKey 钱包头像'
    ]
  },
  {
    id: 's2',
    title: '数据平台与行情工具收录',
    description: '增强项目公信力与市场可见度，让更多用户看见。',
    icon: BarChart3,
    color: 'bg-green-100 border-green-500 text-green-600',
    items: [
      'CoinMarketCap (CMC)',
      'CoinGecko (CG)',
      '非小号 (Feixiaohao)',
      'DexTools',
      'DexScreener',
      'GMGN',
      'BTOK 业务支持'
    ]
  },
  {
    id: 's3',
    title: '审计与安全服务',
    description: '权威机构背书，为项目安全与投资者信心保驾护航。',
    icon: ShieldCheck,
    color: 'bg-purple-100 border-purple-500 text-purple-600',
    items: [
      'CertiK (CK) 安全审计',
      '其他主流审计资源对接',
      '合约代码检测',
      '安全漏洞排查'
    ]
  },
  {
    id: 's4',
    title: '社区与流量增长服务',
    description: '打造高质量 Web3 社区生态，引爆市场热度。',
    icon: Megaphone,
    color: 'bg-yellow-100 border-yellow-500 text-yellow-600',
    items: [
      'KOL 推广合作 (中文 / 海外)',
      'Telegram 频道打包置顶',
      'Telegram 会员增长',
      '社群活跃度维护',
      '运营支持'
    ]
  },
  {
    id: 's5',
    title: '官网与品牌建设',
    description: '塑造专业可信的项目形象，提升用户转化率。',
    icon: Globe2,
    color: 'bg-pink-100 border-pink-500 text-pink-600',
    items: [
      '项目官网定制开发',
      'Web3 风格 UI / UX 设计',
      '多语言官网支持',
      'DApp 前端开发',
      '品牌视觉识别系统 (VI)'
    ]
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  {
    id: 'a1',
    title: '资源真实稳定',
    description: '深耕币圈多年，积累大量一手渠道资源。',
    icon: Layers
  },
  {
    id: 'a2',
    title: '全生态覆盖',
    description: '覆盖 交易所 / 钱包 / 数据平台 / 社区 / KOL。',
    icon: Globe2
  },
  {
    id: 'a3',
    title: '定制推广方案',
    description: '可按项目阶段量身定制推广策略，拒绝套路。',
    icon: Target
  },
  {
    id: 'a4',
    title: '快速执行',
    description: '专业团队极速响应，结果可追踪，效果有保障。',
    icon: Zap
  }
];

export const CONTACTS: ContactInfo[] = [
  {
    label: 'Telegram 联系',
    value: '@yaerchina',
    link: 'https://t.me/yaerchina',
    type: 'telegram'
  },
  {
    label: 'QQ 咨询',
    value: '2812260666',
    link: undefined,
    type: 'qq'
  },
  {
    label: '官方频道',
    value: '@fengyashecn',
    link: 'https://t.me/fengyashecn',
    type: 'channel'
  }
];