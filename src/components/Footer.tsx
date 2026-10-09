import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';

const FOOTER_LINKS = [
  {
    group: '内容',
    items: [
      { label: '全部产品', to: '/products' },
      { label: '更新日志', to: '/updates' },
      { label: '资源', to: '/products?cat=资源' },
    ],
  },
  {
    group: '帮助',
    items: [
      { label: '购买须知', to: '/purchase-guide' },
      { label: '常见问题', to: '/faq' },
      { label: '隐私说明', to: '/privacy' },
      { label: '服务条款', to: '/terms' },
    ],
  },
  {
    group: '联系',
    items: [
      { label: '联系与人工核验', to: '/contact' },
      { label: '返回主站', to: SITE_CONFIG.mainSiteUrl, external: true },
    ],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-3">
            <div className="font-display text-base font-bold tracking-[0.16em]">
              SOLYOUNG<span className="text-accent">.</span>STUDIO
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {SITE_CONFIG.taglineZh}数字工具 / 创作资源 / 独立实验。
            </p>
            <a
              href={SITE_CONFIG.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              返回 solyoung.top
              <ExternalLink aria-hidden className="size-3.5" />
            </a>
          </div>

          {FOOTER_LINKS.map((group) => (
            <nav key={group.group} aria-label={group.group}>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {group.group}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    {item.external ? (
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] text-foreground/80 transition-colors hover:text-accent"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        to={item.to}
                        className="text-[13px] text-foreground/80 transition-colors hover:text-accent"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {CURRENT_YEAR} SolYoung Studio · 数字档案室</span>
          <span>Ideas, made tangible.</span>
        </div>
      </div>
    </footer>
  );
}
