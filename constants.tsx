import { 
  ShieldCheck, 
  Globe, 
  Users, 
  Megaphone, 
  Layers, 
  Zap, 
  Target, 
  TrendingUp, 
  LayoutTemplate,
  Languages,
  Search,
  PenTool,
  Rocket
} from 'lucide-react';
import { ServiceSectionData, AdvantageItem } from './types';

// Placeholder images - In a real scenario, these would be local assets or hosted URLs
// Using picsum with specific IDs to keep them consistent but distinct
const PLACEHOLDER_PREFIX = "https://picsum.photos/seed";
const SIZE = "/200/200"; 

export const HERO_CONTENT = {
  title: "雅儿币圈营销服务",
  subtitle: "一站式区块链项目推广解决方案",
  description: "我们专注于 加密货币 / Web3 / 区块链项目 的品牌曝光、渠道投放与生态建设，覆盖从项目冷启动到长期增长的完整营销链路，助力项目实现快速破圈与持续流量转化。",
  videoUrl: "/videos/1.mp4" //
};

export const CONTACT_INFO = {
  telegramChannel: "https://t.me/fengyashecn",
  telegramContact: "https://t.me/yaerchina",
  qq: "2812260666"
};

export const SERVICE_SECTIONS: ServiceSectionData[] = [
  {
    id: "section-1",
    title: "一、平台头像 & 官方收录服务",
    subtitle: "提升项目可信度与曝光权重",
    items: [
      { id: "s1-1", label: ["Ave 平台头像收录", "270u（秒上）", "热搜 / 审计"], image: "/images/1.png" },
      { id: "s1-2", label: "TokenPocket (TP) 头像收录", image: "/images/2.png" },
      { id: "s1-3", label: "Bitget Wallet (BG) 头像收录", image: "/images/3.png" },
      { id: "s1-4", label: "欧易 (OKX) 头像收录", image: "/images/4.png" },
      { id: "s1-5", label: "币安 (Binance) 头像收录", image: "/images/5.png" },
      { id: "s1-6", label: "PancakeSwap (薄饼) 头像收录", image: "/images/6.png" },
    ]
  },
  {
    id: "section-2",
    title: "二、数据平台与行情工具收录",
    subtitle: "增强项目公信力与市场可见度",
    items: [
      { id: "s2-1", label: "CoinMarketCap (CMC)", image: "/images/7.png" },
      { id: "s2-2", label: "CoinGecko (CG)", image: "/images/8.png" },
      { id: "s2-3", label: "非小号", image: "/images/9.png" },
      { id: "s2-4", label: "DexTools", image: "/images/10.png" },
      { id: "s2-5", label: "DexScreener", image: "/images/11.png" },
      { id: "s2-6", label: "GMGN", image: "/images/12.png" },
      { id: "s2-7", label: "BTOK 业务支持", image: "/images/13.png" },
    ]
  },
  {
    id: "section-3",
    title: "三、审计与安全服务",
    subtitle: "为项目安全与投资者信心保驾护航",
    items: [
      { id: "s3-1", label: "CertiK (CK) 安全审计", image: "/images/14.png" },
      { id: "s3-2", label: "其他主流审计资源对接", icon: ShieldCheck },
    ]
  },
  {
    id: "section-4",
    title: "四、社区与流量增长服务",
    subtitle: "打造高质量 Web3 社区生态",
    items: [
      { id: "s4-1", label: "KOL 推广合作 (中文 / 海外)", icon: Megaphone },
      { id: "s4-2", label: "Telegram 频道打包置顶", icon: Layers },
      { id: "s4-3", label: "Telegram 会员增长", icon: Users },
      { id: "s4-4", label: "社群活跃度维护与运营支持", icon: TrendingUp },
    ]
  },
  {
    id: "section-5",
    title: "五、官网与品牌建设",
    subtitle: "塑造专业可信的项目形象",
    items: [
      { id: "s5-1", label: "项目官网定制开发", image: "/images/15.png" },
      { id: "s5-2", label: "Web3 风格 UI / UX 设计", icon: LayoutTemplate },
      { id: "s5-3", label: "多语言官网支持", icon: Languages },
    ]
  }
];

export const ADVANTAGES: AdvantageItem[] = [
  { icon: Layers, text: "深耕币圈多年，资源真实稳定" },
  { icon: Globe, text: "覆盖 交易所 / 钱包 / 数据平台 / 社区 / KOL" },
  { icon: Target, text: "可按项目阶段定制推广方案" },
  { icon: Rocket, text: "快速执行，结果可追踪" },
];
