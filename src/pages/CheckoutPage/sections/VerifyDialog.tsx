import { toast } from 'sonner';
import { Link } from 'react-router-dom';
import { Copy, Mail, ArrowLeft } from 'lucide-react';
import type { IProduct } from '@/data/products';
import { DEMO_MODE } from '@/data/payments';
import { SITE_CONFIG } from '@/data/site';
import { buildOrderSummaryText, copyText } from '@/lib/order';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface VerifyDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  product: IProduct;
  orderRef: string;
  contact: string;
  contactType: 'wechat' | 'email';
}

export default function VerifyDialog({
  open,
  onOpenChange,
  product,
  orderRef,
  contact,
  contactType,
}: VerifyDialogProps) {
  const modeLabel = DEMO_MODE ? '演示模式' : '正式模式';
  const summaryText = buildOrderSummaryText({
    orderRef,
    productName: product.name,
    sku: product.sku,
    qty: product.maxQty,
    priceLabel: product.priceLabel,
    contact: `${contactType === 'email' ? '邮箱' : '微信'}：${contact || '未填写'}`,
    modeLabel,
  });

  const handleCopySummary = async () => {
    const ok = await copyText(summaryText);
    if (ok) {
      toast.success('订单摘要已复制，请粘贴给客服');
    } else {
      toast.error('复制失败，请手动记录订单信息');
    }
  };

  const mailHref = `mailto:${SITE_CONFIG.ownerEmail}?subject=${encodeURIComponent(
    `订单人工核验：${orderRef}`,
  )}&body=${encodeURIComponent(summaryText)}`;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px]">
        <DialogHeader>
          <DialogTitle>联系人工核验</DialogTitle>
          <DialogDescription>{SITE_CONFIG.verificationNote}</DialogDescription>
        </DialogHeader>

        <div className="space-y-4 border-y border-border py-4">
          <div className="flex items-center justify-between gap-3">
            <span className="text-[13px] text-muted-foreground">订单参考号</span>
            <span className="font-mono text-sm text-foreground">{orderRef}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-[13px] text-muted-foreground">官方客服邮箱</span>
            <a
              href={mailHref}
              className="font-mono text-sm text-accent underline-offset-4 hover:underline"
            >
              {SITE_CONFIG.ownerEmail}
            </a>
          </div>
          {SITE_CONFIG.wechatContactQr ? (
            <p className="text-[13px] text-muted-foreground">
              客服微信二维码已配置，请在联系页查看并扫码添加。
            </p>
          ) : (
            <p className="text-[13px] leading-relaxed text-muted-foreground">
              微信客服二维码尚未配置。当前可通过官方邮箱 {SITE_CONFIG.ownerEmail}{' '}
              联系站长完成人工核验。
            </p>
          )}
        </div>

        <DialogFooter className="flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" onClick={handleCopySummary}>
              <Copy aria-hidden className="mr-1.5 size-3.5" />
              复制订单摘要
            </Button>
            <Button variant="outline" asChild>
              <a href={mailHref}>
                <Mail aria-hidden className="mr-1.5 size-3.5" />
                打开客服渠道
              </a>
            </Button>
          </div>
          <Button variant="ghost" asChild>
            <Link to={`/products/${product.slug}`}>
              <ArrowLeft aria-hidden className="mr-1.5 size-3.5" />
              返回商品详情
            </Link>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
