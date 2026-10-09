import { useState } from 'react';
import { Download, ZoomIn } from 'lucide-react';
import type { IProduct } from '@/data/products';
import { DEMO_MODE, getPaymentMethods, type IPaymentMethod } from '@/data/payments';
import { assetUrl } from '@/lib/base';
import { formatPrice } from '@/lib/order';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

interface PaymentMethodPanelProps {
  product: IProduct;
  onVerify: () => void;
}

const PAY_STEPS = [
  '核对商品名称与应付金额。',
  '使用对应支付应用扫描真实收款码。',
  '完成转账后，保留支付记录。',
  '复制本次订单参考信息。',
  '通过官方客服渠道联系站长进行人工核验。',
];

export default function PaymentMethodPanel({ product, onVerify }: PaymentMethodPanelProps) {
  const methods = getPaymentMethods();
  const [zoomMethod, setZoomMethod] = useState<IPaymentMethod | null>(null);
  const amount = product.price !== null ? formatPrice(product.price) : product.priceLabel;
  const inDemo = DEMO_MODE || product.demoMode;

  return (
    <section id="payment-panel" aria-labelledby="payment-title" className="scroll-mt-24">
      <h2
        id="payment-title"
        className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground"
      >
        付款方式 · Payment
      </h2>

      <Tabs defaultValue={methods[0]?.id ?? 'wechat'} className="w-full">
        <TabsList className="h-auto gap-1 border-b border-border bg-transparent p-0">
          {methods.map((m) => (
            <TabsTrigger
              key={m.id}
              value={m.id}
              className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 text-[13px] text-muted-foreground shadow-none data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-foreground"
            >
              {m.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {methods.map((m) => (
          <TabsContent key={m.id} value={m.id} className="mt-5">
            <div className="grid gap-8 md:grid-cols-[240px_1fr]">
              {/* 二维码区域 */}
              <div>
                {m.configured && m.qrImage ? (
                  <div className="space-y-3">
                    <div className="noise relative border border-border bg-card p-3">
                      <img
                        src={assetUrl(m.qrImage)}
                        alt={`${m.name}收款二维码`}
                        className="aspect-square w-full object-contain"
                      />
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                        onClick={() => setZoomMethod(m)}
                      >
                        <ZoomIn aria-hidden className="mr-1.5 size-3.5" />
                        放大查看
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1" asChild>
                        <a href={assetUrl(m.qrImage)} download={`${m.name}收款码.png`}>
                          <Download aria-hidden className="mr-1.5 size-3.5" />
                          保存图片
                        </a>
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex aspect-square w-full flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted/30 p-6 text-center">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {m.note}
                    </span>
                    <span className="border border-warning/50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-warning">
                      未配置 · Unconfigured
                    </span>
                  </div>
                )}
                <p className="mt-2 text-[12px] leading-relaxed text-muted-foreground">
                  应付金额：<span className="font-mono text-foreground">{amount}</span>
                  {inDemo ? '（演示模式，不会产生真实收款）' : ''}
                </p>
              </div>

              {/* 付款步骤 */}
              <div className="space-y-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  付款步骤 · Steps
                </div>
                <ol className="space-y-3">
                  {PAY_STEPS.map((step, i) => (
                    <li key={step} className="flex items-start gap-3 text-[14px] leading-relaxed text-foreground/85">
                      <span className="mt-0.5 font-mono text-xs text-accent">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
                <p className="border-l-2 border-border pl-3 text-[13px] leading-relaxed text-muted-foreground">
                  使用手机浏览时：可先保存二维码图片，再用对应支付应用扫一扫识别；或直接联系客服人工核验。
                </p>
                {!m.configured ? (
                  <p className="border-l-2 border-warning/50 pl-3 text-[13px] leading-relaxed text-warning">
                    该支付方式尚未配置真实收款码，暂不可用，请选择已配置的方式或联系站长。
                  </p>
                ) : null}
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>

      {/* 付款后人工核验入口 */}
      <div className="mt-8 flex flex-col items-start gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl text-[13px] leading-relaxed text-muted-foreground">
          完成转账后，点击下方按钮生成订单摘要并联系人工核验。本站无法自动确认到账。
        </div>
        <Button size="lg" onClick={onVerify}>
          我已付款，联系人工核验
        </Button>
      </div>

      {/* 放大查看真实收款码（仅配置后可用） */}
      <Dialog open={zoomMethod !== null} onOpenChange={(open) => !open && setZoomMethod(null)}>
        <DialogContent className="sm:max-w-[440px]">
          <DialogHeader>
            <DialogTitle>{zoomMethod?.name}收款二维码</DialogTitle>
            <DialogDescription>
              请使用对应的支付应用扫码，并核对应付金额 {amount}。
            </DialogDescription>
          </DialogHeader>
          {zoomMethod?.qrImage ? (
            <div className="flex items-center justify-center">
              <img
                src={assetUrl(zoomMethod.qrImage)}
                alt={`${zoomMethod.name}收款二维码（放大）`}
                className="max-h-[420px] w-auto"
              />
            </div>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}
