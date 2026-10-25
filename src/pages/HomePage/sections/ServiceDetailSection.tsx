import { ArrowRight } from 'lucide-react';
import { SERVICES } from '@/data/services';
import { bi, useLang, type Lang } from '@/i18n';
import SectionHeading from '@/components/SectionHeading';

function ServiceBlock({ s, minor }: { s: (typeof SERVICES)[number]; minor?: boolean }) {
  const { lang } = useLang();
  const L = (b: { zh: string; en: string }) => bi(b, lang as Lang);
  // 只展示前 3 条交付内容，其余收进 FAQ
  const deliverables = s.delivers.slice(0, 4);
  return (
    <article
      id={`service-${s.id}`}
      className={`border border-border bg-card transition-colors duration-300 hover:border-foreground/30 ${
        minor ? 'border-dashed p-6 sm:p-8' : 'p-6 sm:p-10'
      }`}
    >
      <div className="flex flex-wrap items-center gap-3">
        <span className="font-mono text-lg text-accent">{s.no}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">{s.en}</span>
        {s.open ? (
          <span className="ml-auto border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            {lang === 'en' ? 'Open for work' : '开放合作'}
          </span>
        ) : (
          <span className="ml-auto border border-warning/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-warning">
            {lang === 'en' ? 'Not open' : '暂未开放'}
          </span>
        )}
      </div>

      <h3 className="mt-4 font-display text-xl font-semibold tracking-tight sm:text-2xl">{L(s.title)}</h3>
      <p className="mt-1.5 text-[14px] font-medium text-accent">{L(s.tagline)}</p>

      <div className={`mt-7 grid gap-7 ${minor ? 'lg:grid-cols-2' : 'lg:grid-cols-2'}`}>
        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {lang === 'en' ? 'Who it is for' : '适合谁'}
          </div>
          <p className="text-[14px] leading-relaxed text-foreground/85">{L(s.for)}</p>
        </div>

        <div>
          <div className="mb-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            {lang === 'en' ? 'What you get' : '你会拿到什么'}
          </div>
          <ul className="space-y-2">
            {deliverables.map((d) => (
              <li key={d.zh} className="flex gap-2 text-[14px] leading-relaxed text-foreground/85">
                <span aria-hidden className="text-accent">·</span>
                {L(d)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#start"
            className="inline-flex items-center gap-1.5 text-[14px] font-medium text-foreground transition-colors hover:text-accent"
          >
            {L(s.cta)}
            <ArrowRight aria-hidden className="size-3.5" />
          </a>
          <a
            href="#cases"
            className="inline-flex items-center gap-1.5 text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            {L(s.ctaSecondary)}
          </a>
        </div>
      </div>
    </article>
  );
}

export default function ServiceDetailSection() {
  const { lang } = useLang();
  const majors = SERVICES.filter((s) => s.major);
  const minor = SERVICES.find((s) => !s.major)!;

  return (
    <section id="services" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          index="01"
          kickerEn="Services"
          title={lang === 'en' ? 'What I can actually do for you.' : '我具体可以为你做什么。'}
          description={
            lang === 'en'
              ? 'Two services, real delivery. The details live in the FAQ and the contact form — start with what you need.'
              : '两项服务，真实交付。细节在 FAQ 和咨询表单里——先从你的需求开始。'
          }
        />
        <div className="mt-10 space-y-6">
          {majors.map((s) => (
            <ServiceBlock key={s.id} s={s} />
          ))}
          <ServiceBlock s={minor} minor />
        </div>
      </div>
    </section>
  );
}
