import { Link } from 'react-router-dom';
import { ExternalLink } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { useLang } from '@/i18n';

const CURRENT_YEAR = new Date().getFullYear();

export default function Footer() {
  const { t } = useLang();
  const groups = [
    {
      key: 'footer.contact',
      items: [
        { label: t('footer.contactUs'), to: '/contact' },
        { label: t('footer.backToSite'), to: SITE_CONFIG.mainSiteUrl, external: true },
      ],
    },
  ];

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
          <div className="space-y-3">
            <div className="font-display text-base font-bold tracking-[0.16em]">
              SOLYOUNG<span className="text-accent">.</span>STUDIO
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t('footer.tagline')}
            </p>
            <a
              href={SITE_CONFIG.mainSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
            >
              {t('footer.backToSite')}
              <ExternalLink aria-hidden className="size-3.5" />
            </a>
          </div>

          {groups.map((group) => (
            <nav key={group.key} aria-label={t(group.key)}>
              <div className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {t(group.key)}
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.label}>
                    {'external' in item && item.external ? (
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
          <span>© {CURRENT_YEAR} SolYoung Studio · {t('footer.copyright')}</span>
          <span>Ideas, made tangible.</span>
        </div>
      </div>
    </footer>
  );
}
