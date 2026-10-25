import { PROCESS_STEPS } from '@/data/services';
import { bi, useLang, type Lang } from '@/i18n';
import SectionHeading from '@/components/SectionHeading';

export default function ProcessSection() {
  const { lang } = useLang();
  const L = (b: { zh: string; en: string }) => bi(b, lang as Lang);
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
      <SectionHeading
        index="03"
        kickerEn="Process"
        title={lang === 'en' ? 'From an idea to a real, finished thing.' : '从一个想法，到一个真正的作品。'}
        description={
          lang === 'en'
            ? 'Five clear stages. No endless revisions.'
            : '五步走完，没有无限修改。'
        }
      />

      {/* 横向流程图：桌面一排 5 个节点，节点间用线连起来 */}
      <ol className="relative mt-12 hidden grid-cols-5 gap-4 md:grid">
        {/* 贯穿线 */}
        <div aria-hidden className="absolute left-[10%] right-[10%] top-5 h-px bg-border" />
        {PROCESS_STEPS.map((s) => (
          <li key={s.no} className="relative flex flex-col items-center text-center">
            <div className="relative z-[1] flex size-10 items-center justify-center border border-accent bg-background font-mono text-sm text-accent">
              {s.no}
            </div>
            <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              {s.en}
            </div>
            <h3 className="mt-1.5 font-display text-[15px] font-semibold">{L(s.title)}</h3>
            <p className="mt-2 text-[12.5px] leading-relaxed text-muted-foreground">{L(s.body)}</p>
          </li>
        ))}
      </ol>

      {/* 移动端竖排 */}
      <ol className="mt-10 space-y-4 md:hidden">
        {PROCESS_STEPS.map((s) => (
          <li key={s.no} className="flex gap-4 border border-border bg-card p-5">
            <div className="flex size-10 shrink-0 items-center justify-center border border-accent font-mono text-sm text-accent">
              {s.no}
            </div>
            <div>
              <h3 className="font-display text-[15px] font-semibold">{L(s.title)}</h3>
              <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{L(s.body)}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
