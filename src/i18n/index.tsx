import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

export type Lang = 'zh' | 'en';

/** 双语文案对象：数据文件里所有可见中文都用这个 */
export type Bi = { zh: string; en: string };

// eslint-disable-next-line react-refresh/only-export-components
export function bi(b: Bi, lang: Lang): string {
  return lang === 'en' ? b.en : b.zh;
}

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
}

const dict: Record<Lang, Record<string, string>> = {
  zh: {
    'nav.products': '产品',
    'nav.resources': '资源',
    'nav.guide': '购买说明',
    'nav.backToMain': '返回主站',
    'hero.kicker2': '数字创作服务',
    'hero.title': '把你的主意，变成可以使用的解决方案。',
    'hero.sub': 'IDEAS INTO REAL, USABLE SOLUTIONS.',
    'hero.body':
      '个人网站、数字空间、品牌合作。从想法到上线，我自己做完。',
    'hero.ctaMain': '开始一次合作',
    'hero.ctaCases': '查看项目案例',
    'hero.ctaSolHub': '打开 SolHub',
    'hero.ctaBrowse': '浏览作品',
    'hero.ctaGuide': '了解购买方式',
    'works.kicker': 'Selected Works',
    'works.title': '精选作品',
    'works.subtitle': '从一个想法开始，直到它成为可以使用的东西。',
    'works.viewAll': '查看全部',
    'works.viewDetail': '查看详情',
    'works.openInUse': '打开使用',
    'note.kicker': 'Studio Note',
    'note.title': '不是一个商城，而是创作的另一种延伸。',
    'note.body':
      '我会在这里发布自己创造的工具、资源和数字作品。有些作品可以免费使用，有些需要付费获得完整权限，还有一些仍在不断调整。我不追求一次性把所有东西做完，而是希望通过持续的尝试，让每一个作品慢慢变得更好。',
    'updates.kicker': 'Updates',
    'updates.title': '最近更新',
    'updates.subtitle': '产品每一次真实的改进，都记录在这里。',
    'updates.viewAll': '查看全部',
    'updates.detail': '详情',
    'footer.tagline': '数字工具 / 创作资源 / 独立实验。',
    'footer.backToSite': '返回 solyoung.top',
    'footer.copyright': '数字档案室',
    'footer.content': '内容',
    'footer.help': '帮助',
    'footer.contact': '联系',
    'footer.allProducts': '全部产品',
    'footer.changelog': '更新日志',
    'footer.buyGuide': '购买须知',
    'footer.faq': '常见问题',
    'footer.privacy': '隐私说明',
    'footer.terms': '服务条款',
    'footer.contactUs': '联系我',
    'product.free': '免费',
    'product.detail': '详情',
    'product.openNote': '将在新标签页打开主站对应的工具页面。本工具免费，无需购买。',
  },
  en: {
    'nav.products': 'Products',
    'nav.resources': 'Resources',
    'nav.guide': 'Guide',
    'nav.backToMain': 'Main Site',
    'hero.kicker2': 'Digital Creative Services',
    'hero.title': 'Turn your ideas into real, usable solutions.',
    'hero.sub': 'IDEAS INTO REAL, USABLE SOLUTIONS.',
    'hero.body':
      'Personal sites, digital spaces, brand collaborations. From idea to launch — I build it myself.',
    'hero.ctaMain': 'Start a project',
    'hero.ctaCases': 'See the works',
    'hero.ctaSolHub': 'Open SolHub',
    'hero.ctaBrowse': 'Browse Works',
    'hero.ctaGuide': 'How to Buy',
    'works.kicker': 'Selected Works',
    'works.title': 'Selected Works',
    'works.subtitle': 'From an idea to something you can actually use.',
    'works.viewAll': 'View all',
    'works.viewDetail': 'Details',
    'works.openInUse': 'Open',
    'note.kicker': 'Studio Note',
    'note.title': 'Not a storefront — an extension of the work itself.',
    'note.body':
      'I ship the tools, resources and digital pieces I make here. Some are free, some need a paid license, and others are still being tuned. I do not chase finishing everything at once — I keep iterating so each piece slowly gets better.',
    'updates.kicker': 'Updates',
    'updates.title': 'Recent Updates',
    'updates.subtitle': 'Every real improvement is logged here.',
    'updates.viewAll': 'View all',
    'updates.detail': 'Details',
    'footer.tagline': 'Tools · Resources · Experiments.',
    'footer.backToSite': 'Back to solyoung.top',
    'footer.copyright': 'Digital Archive',
    'footer.content': 'Content',
    'footer.help': 'Help',
    'footer.contact': 'Contact',
    'footer.allProducts': 'All Products',
    'footer.changelog': 'Changelog',
    'footer.buyGuide': 'Purchase Guide',
    'footer.faq': 'FAQ',
    'footer.privacy': 'Privacy',
    'footer.terms': 'Terms',
    'footer.contactUs': 'Contact',
    'product.free': 'Free',
    'product.detail': 'Details',
    'product.openNote': 'Opens the tool on the main site in a new tab. Free to use, no purchase needed.',
  },
};

const LangContext = createContext<LangCtx | null>(null);
const STORAGE_KEY = 'studio-lang';

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    return saved === 'en' ? 'en' : 'zh';
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';
  }, [lang]);

  const setLang = (l: Lang) => setLangState(l);
  const t = (key: string) => dict[lang][key] ?? dict.zh[key] ?? key;

  return <LangContext.Provider value={{ lang, setLang, t }}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangCtx {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error('useLang must be used within LangProvider');
  return ctx;
}
