import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  /** 序号，如 '01'；不需要序号时传 undefined */
  index?: string;
  /** 英文档案标签 */
  kickerEn: string;
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeading({
  index,
  kickerEn,
  title,
  description,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('space-y-4', className)}>
      <div className="flex items-center gap-3">
        {index ? (
          <span className="font-mono text-xs text-accent">{index}</span>
        ) : null}
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          {kickerEn}
        </span>
        <span aria-hidden className="h-px flex-1 bg-border" />
      </div>
      <h2 className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
}
