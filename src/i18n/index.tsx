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
    'nav.backToMain': '返回主站',
    'hero.kicker2': '数字创作服务',
    'hero.title': '把你的主意，变成可以使用的解决方案。',
    'hero.sub': 'IDEAS INTO REAL, USABLE SOLUTIONS.',
    'hero.body':
      '个人网站、数字空间、品牌合作。从想法到上线，我自己做完。',
    'hero.ctaMain': '开始一次合作',
    'hero.ctaSolHub': '打开 SolHub',
    'footer.tagline': '数字工具 / 创作资源 / 独立实验。',
    'footer.backToSite': '返回 solyoung.top',
    'footer.copyright': '数字档案室',
    'footer.contact': '联系',
    'footer.contactUs': '联系我',
  },
  en: {
    'nav.backToMain': 'Main Site',
    'hero.kicker2': 'Digital Creative Services',
    'hero.title': 'Turn your ideas into real, usable solutions.',
    'hero.sub': 'IDEAS INTO REAL, USABLE SOLUTIONS.',
    'hero.body':
      'Personal sites, digital spaces, brand collaborations. From idea to launch — I build it myself.',
    'hero.ctaMain': 'Start a project',
    'hero.ctaSolHub': 'Open SolHub',
    'footer.tagline': 'Tools · Resources · Experiments.',
    'footer.backToSite': 'Back to solyoung.top',
    'footer.copyright': 'Digital Archive',
    'footer.contact': 'Contact',
    'footer.contactUs': 'Contact',
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
