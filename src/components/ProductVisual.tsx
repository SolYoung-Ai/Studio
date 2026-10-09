import { cn } from '@/lib/utils';
import { PRODUCT_STATUS_META, type IProductStatus } from '@/data/products';

interface ProductVisualProps {
  variant: 'invite-card' | 'placeholder';
  sku: string;
  status: IProductStatus;
  className?: string;
}

/** 邀请卡角落定位标记（数字档案感） */
function CornerMark({ className }: { className: string }) {
  return <span aria-hidden className={cn('absolute size-4 border-border', className)} />;
}

/**
 * 产品视觉：
 * - invite-card：原创静态邀请卡视觉（品牌感、无真实邀请码、无虚假界面截图）
 * - placeholder：制作中/规划中的诚实占位（编号 + 状态，不伪造产品图）
 */
export default function ProductVisual({ variant, sku, status, className }: ProductVisualProps) {
  if (variant === 'invite-card') {
    return (
      <div
        className={cn(
          'noise relative aspect-square w-full overflow-hidden border border-border bg-card',
          className,
        )}
      >
        <CornerMark className="left-2 top-2 border-l border-t" />
        <CornerMark className="right-2 top-2 border-r border-t" />
        <CornerMark className="bottom-2 left-2 border-b border-l" />
        <CornerMark className="bottom-2 right-2 border-b border-r" />

        <div className="relative z-[2] flex h-full flex-col p-[7%]">
          <div className="flex items-start justify-between border-b border-border/70 pb-3">
            <div>
              <div className="font-display text-sm font-bold tracking-[0.14em] sm:text-base">
                SOLYOUNG
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Studio
              </div>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Invitation
            </span>
          </div>

          <div className="flex flex-1 flex-col items-center justify-center gap-3 text-center">
            <div className="font-display text-[clamp(1.4rem,6vw,2.4rem)] font-extrabold leading-none tracking-tight">
              EARLY
              <br />
              ACCESS
            </div>
            <div className="text-xs tracking-[0.4em] text-muted-foreground">内 测 邀 请</div>
            <div className="mt-1 flex w-3/4 flex-col items-center gap-1 border border-dashed border-border px-3 py-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-muted-foreground">
                Invite Code · Pending
              </span>
              <span className="font-mono text-xs tracking-[0.3em] text-foreground/50">
                • • • • • • • •
              </span>
            </div>
          </div>

          <div className="flex items-end justify-between border-t border-border/70 pt-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              {sku}
            </span>
            <span className="font-display text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
              Ideas, made tangible.
            </span>
          </div>
        </div>
      </div>
    );
  }

  const statusMeta = PRODUCT_STATUS_META[status];
  return (
    <div
      className={cn(
        'relative flex aspect-square w-full flex-col items-center justify-center gap-3 overflow-hidden border border-dashed border-border bg-muted/30 text-center',
        className,
      )}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[140%] w-px -translate-x-1/2 -translate-y-1/2 bg-border/50"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[140%] -translate-x-1/2 -translate-y-1/2 bg-border/50"
      />
      <span className="font-mono text-sm uppercase tracking-[0.24em] text-muted-foreground">
        {sku}
      </span>
      <span className="font-display text-lg font-semibold">{statusMeta.label}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
        {statusMeta.labelEn}
      </span>
    </div>
  );
}
