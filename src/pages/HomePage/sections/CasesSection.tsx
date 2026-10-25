import { ArrowUpRight } from 'lucide-react';
import { CASES } from '@/data/cases';
import { bi, useLang, type Lang } from '@/i18n';
import SectionHeading from '@/components/SectionHeading';
import { cn } from '@/lib/utils';

const toneCls: Record<string, string> = {
  accent: 'text-accent border-border',
  warning: 'text-warning border-warning/40',
  muted: 'text-muted-foreground border-border',
};

export default function CasesSection() {
  const { lang } = useLang();
  const L = (b: { zh: string; en: string }) => bi(b, lang as Lang);
  return (
    <section id="cases" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:pt-24 sm:pb-10">
        <SectionHeading
          index="02"
          kickerEn="Selected Works"
          title={lang === 'en' ? 'These are not concepts — they are already running in your browser.' : '这些不是概念，它们已经在浏览器里跑着。'}
          description={
            lang === 'en'
              ? 'Self-initiated projects you can open right now. Swipe.'
              : '我持续做出、现在就能打开用的自研项目。左右滑动。'
          }
        />
      </div>

      {/* 横向滑动 */}
      <div className="overflow-x-auto border-y border-border bg-card/50 py-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex snap-x snap-mandatory gap-5 px-4 sm:px-6 lg:px-[max(1.5rem,calc((100vw-72rem)/2+1.5rem))]">
          {CASES.map((c) => (
            <article
              key={c.name}
              className="group w-[80vw] shrink-0 snap-start border border-border bg-card p-5 sm:w-[420px]"
            >
              <a href={c.url} target="_blank" rel="noreferrer" className="block overflow-hidden border border-border">
                {c.preview ? (
                  <img
                    src={c.preview}
                    alt={c.name}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="flex aspect-[16/10] w-full items-center justify-center bg-card/60 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.url.replace('https://', '')}
                  </div>
                )}
              </a>

              <div className="mt-4 flex items-center gap-2">
                <h3 className="font-display text-base font-semibold tracking-tight">{c.name}</h3>
                <span
                  className={cn(
                    'border px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em]',
                    toneCls[c.statusTone],
                  )}
                >
                  {L(c.status)}
                </span>
              </div>

              <p className="mt-2 text-[13.5px] leading-relaxed text-foreground/80">{L(c.goal)}</p>

              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1 text-[13px] font-medium text-muted-foreground transition-colors hover:text-accent"
              >
                {lang === 'en' ? 'Open' : '打开体验'}
                <ArrowUpRight aria-hidden className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
