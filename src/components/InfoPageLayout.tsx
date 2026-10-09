import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface InfoPageLayoutProps {
  kicker: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

/** 信息类页面统一排版：档案式眉标 + 大标题 + 正文 */
export default function InfoPageLayout({
  kicker,
  title,
  description,
  children,
  className,
}: InfoPageLayoutProps) {
  return (
    <div className={cn('mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16', className)}>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {kicker}
        </span>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      <h1 className="mt-5 font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
      <div className="mt-10 max-w-3xl space-y-10">{children}</div>
    </div>
  );
}

/** 信息页正文小节：眉标 + 段落/列表 */
export function InfoSection({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
        {label}
      </h2>
      <div className="space-y-3 text-[15px] leading-relaxed text-foreground/85">{children}</div>
    </section>
  );
}
