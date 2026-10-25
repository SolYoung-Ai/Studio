import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useLang } from '@/i18n';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const { t } = useLang();
  return (
    <section className="noise relative overflow-hidden border-b border-border">
      <div className="relative z-[2] mx-auto max-w-6xl px-4 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="mb-6 flex flex-wrap items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.24em]">
            SolYoung Studio
          </span>
          <span aria-hidden className="h-px w-10 bg-border" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:tracking-[0.24em]">
            {t('hero.kicker2')}
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-[clamp(1.6rem,7vw,3.75rem)] font-extrabold leading-[1.15] tracking-tight">
          {t('hero.title')}
        </h1>

        <p className="mt-4 break-words font-mono text-[11px] font-medium uppercase tracking-[0.12em] text-muted-foreground sm:text-sm sm:tracking-[0.22em]">
          {t('hero.sub')}
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">{t('hero.body')}</p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <a href="#start">
              {t('hero.ctaMain')}
              <ArrowRight aria-hidden className="ml-1.5 size-4" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
            <a href="https://solhub.solyoung.top/" target="_blank" rel="noreferrer">
              {t('hero.ctaSolHub')}
              <ArrowUpRight aria-hidden className="ml-1.5 size-4" />
            </a>
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground sm:text-[11px] sm:tracking-[0.22em]">
          <span>Website</span>
          <span aria-hidden>·</span>
          <span>Brand</span>
          <span aria-hidden>·</span>
          <span>AI-Assisted</span>
        </div>
      </div>
    </section>
  );
}
