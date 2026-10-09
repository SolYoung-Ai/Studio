import { cn } from '@/lib/utils';
import { PRODUCT_STATUS_META, type IProductStatus } from '@/data/products';

interface StatusBadgeProps {
  status: IProductStatus;
  className?: string;
}

const toneClasses: Record<string, string> = {
  muted: 'text-muted-foreground border-border',
  accent: 'text-accent border-accent/40',
  warning: 'text-warning border-warning/40',
};

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const meta = PRODUCT_STATUS_META[status];
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 border px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.08em]',
        toneClasses[meta.tone],
        className,
      )}
    >
      <span aria-hidden className="size-1 rounded-full bg-current opacity-70" />
      {meta.label} · {meta.labelEn}
    </span>
  );
}
