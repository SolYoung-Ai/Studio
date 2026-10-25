import { ArrowUpRight } from 'lucide-react';
import { useLang } from '@/i18n';
import SectionHeading from '@/components/SectionHeading';
import { assetUrl } from '@/lib/base';

/**
 * 首页 02 区块：不再逐卡展示精选作品，统一指向 SolHub 收录站。
 * 保留 id="cases" 锚点，服务详情页的「查看案例」链接仍然可跳转到此。
 */
export default function SolHubSection() {
  const { lang } = useLang();
  return (
    <section id="cases" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          index="02"
          kickerEn="All Works · SolHub"
          title={
            lang === 'en'
              ? 'Every tool and project I make lives on SolHub.'
              : '我创造的所有工具与项目，都收录在 SolHub。'
          }
          description={
            lang === 'en'
              ? 'SolHub collects every digital tool, project and experiment I keep building and iterating — one entry point, always updating.'
              : 'SolHub 收录我持续创造、迭代与实验的全部数字工具与项目——一个入口，持续更新。'
          }
        />

        <div className="mt-10 border border-border bg-card">
          <div className="flex flex-col items-start gap-6 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-center gap-4">
              <img
                src={assetUrl('/solhub-logo.png')}
                alt="SolHub"
                className="h-12 w-12 shrink-0 object-contain"
              />
              <div>
                <div className="font-display text-lg font-semibold tracking-tight">SolHub</div>
                <p className="mt-1 max-w-xl text-[13.5px] leading-relaxed text-muted-foreground">
                  {lang === 'en'
                    ? 'Tools · Products · Experiments — browse everything I ship, free to try.'
                    : '工具 · 产品 · 实验项目——我发布的每一件作品都在这里，随时打开体验。'}
                </p>
              </div>
            </div>

            <a
              href="https://solhub.solyoung.top/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex shrink-0 items-center gap-2 border border-border px-5 py-2.5 text-[14px] font-medium text-foreground transition-colors hover:border-foreground/40 hover:text-accent"
            >
              {lang === 'en' ? 'Open SolHub' : '打开 SolHub'}
              <ArrowUpRight aria-hidden className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
