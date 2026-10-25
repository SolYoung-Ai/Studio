import HeroSection from './sections/HeroSection';
import ServiceDetailSection from './sections/ServiceDetailSection';
import SolHubSection from './sections/SolHubSection';
import ProcessSection from './sections/ProcessSection';
import ContactFormSection from './sections/ContactFormSection';
import { assetUrl } from '@/lib/base';
import { useLang } from '@/i18n';

function SolHubBanner() {
  const { lang } = useLang();
  return (
    <section className="border-y border-border bg-card/50">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div className="flex items-center gap-4">
          <img
            src={assetUrl('/solhub-logo.png')}
            alt="SolHub"
            className="h-12 w-12 object-contain"
          />
          <div>
            <div className="font-display text-[14px] font-semibold tracking-tight">
              SolHub
            </div>
            <p className="mt-1 max-w-xl text-[13px] leading-relaxed text-muted-foreground">
              {lang === 'zh'
                ? '你的作品会进入 SolHub 数字工具社区长期展示，带官方印记、参与排行榜——这是我长期经营、持续引流的社区。'
                : 'Your site gets a long-term listing on SolHub, my own digital-tools community, with an official badge and a public ranking.'}
            </p>
          </div>
        </div>
        <a
          href="https://solhub.solyoung.top/"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 border border-border px-4 py-2 text-[13px] font-medium text-foreground transition-colors hover:border-foreground/40 hover:text-accent"
        >
          {lang === 'zh' ? '看看 SolHub' : 'Visit SolHub'} →
        </a>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServiceDetailSection />
      <SolHubSection />
      <ProcessSection />
      <SolHubBanner />
      <ContactFormSection />
    </>
  );
}
