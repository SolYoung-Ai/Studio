import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="noise relative overflow-hidden border-b border-border">
      <div className="relative z-[2] mx-auto max-w-6xl px-4 pb-16 pt-16 sm:px-6 sm:pb-20 sm:pt-20 lg:pb-28 lg:pt-24">
        <div className="mb-8 flex items-center gap-3">
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            SolYoung Studio
          </span>
          <span aria-hidden className="h-px w-10 bg-border" />
          <span className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
            Independent Creative Studio
          </span>
        </div>

        <h1 className="max-w-3xl font-display text-[clamp(2rem,6vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight">
          把想法变成可以使用的东西。
        </h1>

        <p className="mt-4 font-display text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground sm:text-base">
          {SITE_CONFIG.taglineEn}
        </p>

        <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
          这里收录我亲手创造、持续迭代的数字工具、创作资源与实验项目。
          有些作品已经可以使用，有些仍在实验中。每一个都来自一个具体的想法，也来自一次真实的尝试。
        </p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Button asChild size="lg">
            <Link to="/products">
              浏览作品
              <ArrowRight aria-hidden className="ml-1.5 size-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/purchase-guide">了解购买方式</Link>
          </Button>
        </div>

        <div className="mt-14 flex items-center gap-3 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
          <span>Tools</span>
          <span aria-hidden>·</span>
          <span>Resources</span>
          <span aria-hidden>·</span>
          <span>Experiments</span>
        </div>
      </div>
    </section>
  );
}
