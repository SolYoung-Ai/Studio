import { toast } from 'sonner';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import type { IProduct } from '@/data/products';
import { DEMO_MODE } from '@/data/payments';
import { copyText, formatPrice } from '@/lib/order';
import { Button } from '@/components/ui/button';

interface OrderSummaryCardProps {
  product: IProduct;
  orderRef: string;
  contact: string;
  contactType: 'wechat' | 'email';
  className?: string;
}

export default function OrderSummaryCard({
  product,
  orderRef,
  contact,
  contactType,
  className,
}: OrderSummaryCardProps) {
  const [refCopied, setRefCopied] = useState(false);

  const modeLabel = DEMO_MODE ? '演示模式' : '正式模式';
  const amount = product.price !== null ? formatPrice(product.price) : product.priceLabel;
  const qty = product.maxQty;

  const handleCopyRef = async () => {
    const ok = await copyText(orderRef);
    if (ok) {
      setRefCopied(true);
      toast.success('订单参考号已复制');
      window.setTimeout(() => setRefCopied(false), 2000);
    } else {
      toast.error('复制失败，请手动记录订单参考号');
    }
  };

  return (
    <aside
      className={cn(
        'border border-border bg-card p-5 lg:sticky lg:top-24 lg:self-start',
        className,
      )}
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          订单摘要 · Summary
        </h2>
        <span className="border border-warning/50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-warning">
          {modeLabel}
        </span>
      </div>

      <div className="space-y-3 border-b border-border pb-4">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[13px] text-muted-foreground">订单参考号</span>
          <div className="flex items-center gap-2">
            <span className="font-mono text-[13px] text-foreground">{orderRef || '生成中…'}</span>
            <Button
              variant="ghost"
              size="icon"
              className="size-6"
              aria-label="复制订单参考号"
              onClick={handleCopyRef}
              disabled={!orderRef}
            >
              {refCopied ? <Check className="size-3.5 text-accent" /> : <Copy className="size-3.5" />}
            </Button>
          </div>
        </div>

        <SummaryRow label="商品名称" value={product.name} />
        <SummaryRow label="商品编号" value={product.sku} mono />
        <SummaryRow label="购买数量" value={`${qty}（限购 ${qty} 个）`} />
        <SummaryRow label="商品金额" value={amount} mono />
        <SummaryRow
          label="联系方式"
          value={contact ? `${contactType === 'email' ? '邮箱' : '微信'}：${contact}` : '待填写'}
        />
      </div>

      {product.price !== null ? (
        <div className="flex items-center justify-between py-4">
          <span className="text-sm">应付合计</span>
          <span className="font-mono text-lg text-foreground">{amount}</span>
        </div>
      ) : null}

      <p className="mt-4 text-[12px] leading-relaxed text-muted-foreground">
        提示：订单参考号由浏览器本地生成，仅作为人工核验的临时标识，不构成已登记的正式订单。
      </p>
    </aside>
  );
}

function SummaryRow({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <span className="shrink-0 text-[13px] text-muted-foreground">{label}</span>
      <span className={cn('text-right text-[13px] text-foreground', mono && 'font-mono')}>
        {value}
      </span>
    </div>
  );
}
