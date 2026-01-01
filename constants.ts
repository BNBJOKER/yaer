import { ServiceCategory, Advantage } from './types';

export const HERO_DATA = {
  title: "雅儿币圈营销服务",
  subtitle: "一站式区块链项目推广解决方案",
  description: "专注于 加密货币 / Web3 / 区块链项目 的品牌曝光、渠道投放与生态建设。覆盖从项目冷启动到长期增长的完整营销链路，助力项目实现快速破圈与持续流量转化。",
  ctaPrimary: "立即咨询",
  ctaSecondary: "查看案例",
  heroImage: "/images/1.png",
};

export const CONTACT_INFO = {
  qq: "2812260666",
  telegram: "yaerchina",
  telegramChannel: "fengyashecn",
  telegramUrl: "https://t.me/yaerchina",
  channelUrl: "https://t.me/fengyashecn"
};

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'platform',
    title: "一、平台头像 & 官方收录服务",
    subtitle: "提升项目可信度与曝光权重",
    image: "/images/2.png",
    items: [
      { id: 'ave', name: 'Ave 平台', type: 'logo', brandColor: '#10B981', textColor: '#fff', description: '头像收录 / 热搜 / 审计' },
      { id: 'tp', name: 'TokenPocket', type: 'logo', brandColor: '#2563EB', textColor: '#fff', description: 'TP 钱包头像收录' },
      { id: 'bitget', name: 'Bitget Wallet', type: 'logo', brandColor: '#00D4C6', textColor: '#000', description: 'Web3 钱包收录' },
      { id: 'okx', name: 'OKX 欧易', type: 'logo', brandColor: '#000000', textColor: '#fff', description: '头像收录' },
      { id: 'binance', name: 'Binance', type: 'logo', brandColor: '#F3BA2F', textColor: '#000', description: '币安头像收录' },
      { id: 'pancake', name: 'PancakeSwap', type: 'logo', brandColor: '#D1884F', textColor: '#fff', description: '薄饼头像收录' },
    ]
  },
  {
    id: 'data',
    title: "二、数据平台与行情工具收录",
    subtitle: "增强项目公信力与市场可见度",
    image: "/images/3.png",
    items: [
      { id: 'cmc', name: 'CoinMarketCap', type: 'logo', brandColor: '#17171F', textColor: '#fff', description: 'CMC 收录' },
      { id: 'cg', name: 'CoinGecko', type: 'logo', brandColor: '#8CC63F', textColor: '#fff', description: 'CG 收录' },
      { id: 'feixiaohao', name: '非小号', type: 'logo', brandColor: '#FF9900', textColor: '#fff', description: '中文第一数据平台' },
      { id: 'dextools', name: 'DexTools', type: 'logo', brandColor: '#0B1217', textColor: '#1CE5E9', description: 'K线工具收录' },
      { id: 'dex', name: '德克萨斯筛查', type: 'logo', brandColor: '#4F46E5', textColor: '#fff', description: 'DexScreener' },
      { id: 'gmgn', name: 'GMGN', type: 'logo', brandColor: '#EC4899', textColor: '#fff', description: 'Meme 常用工具' },
      { id: 'btok', name: 'BTOK', type: 'logo', brandColor: '#0088CC', textColor: '#fff', description: '业务支持' },
    ]
  },
  {
    id: 'audit',
    title: "三、审计与安全服务",
    subtitle: "为项目安全与投资者信心保驾护航",
    image: "/images/4.png",
    items: [
      { id: 'certik', name: 'CertiK', type: 'logo', brandColor: '#E2A45C', textColor: '#000', description: '顶级安全审计' },
      { id: 'other_audit', name: '主流审计', type: 'icon', iconName: 'ShieldCheck', description: '其他审计资源对接' },
    ]
  },
  {
    id: 'community',
    title: "四、社区与流量增长服务",
    subtitle: "打造高质量 Web3 社区生态",
    image: "/images/5.png",
    items: [
      { id: 'kol', name: 'KOL 推广', type: 'icon', iconName: 'Megaphone', description: '中文 / 海外 KOL' },
      { id: 'tg_top', name: 'TG 频道置顶', type: 'logo', brandColor: '#24A1DE', textColor: '#fff', description: '频道打包置顶' },
      { id: 'tg_growth', name: 'TG 会员增长', type: 'logo', brandColor: '#24A1DE', textColor: '#fff', description: '真实用户 / 活跃度' },
      { id: 'ops', name: '社群运营', type: 'icon', iconName: 'Users', description: '活跃度维护与支持' },
    ]
  },
  {
    id: 'web',
    title: "五、官网与品牌建设",
    subtitle: "塑造专业可信的项目形象",
    image: "/images/6.png",
    items: [
      { id: 'dev', name: '官网开发', type: 'icon', iconName: 'Code', description: '定制开发' },
      { id: 'ui', name: 'UI / UX 设计', type: 'icon', iconName: 'Palette', description: 'Web3 风格' },
      { id: 'lang', name: '多语言支持', type: 'icon', iconName: 'Globe', description: '国际化适配' },
    ]
  }
];

export const ADVANTAGES: Advantage[] = [
  {
    title: "资源真实稳定",
    description: "深耕币圈多年，积累大量一手渠道资源。",
    iconName: "Gem"
  },
  {
    title: "全生态覆盖",
    description: "涵盖交易所、钱包、数据平台、社区及KOL。",
    iconName: "Layers"
  },
  {
    title: "定制化方案",
    description: "根据项目阶段（冷启动/成长期/爆发期）定制策略。",
    iconName: "Settings"
  },
  {
    title: "结果可追踪",
    description: "快速执行，数据透明，反馈及时。",
    iconName: "TrendingUp"
  }
];