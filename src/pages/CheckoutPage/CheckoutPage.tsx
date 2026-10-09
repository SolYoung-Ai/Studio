import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { getProductBySlug } from '@/data/products';
import { DEMO_MODE } from '@/data/payments';
import { generateOrderRef } from '@/lib/order';
import { Button } from '@/components/ui/button';
import SectionHeading from '@/components/SectionHeading';
import { checkoutSchema, type CheckoutFormValues } from './checkoutSchema';
import CheckoutFormSection from './sections/CheckoutFormSection';
import PaymentMethodPanel from './sections/PaymentMethodPanel';
import OrderSummaryCard from './sections/OrderSummaryCard';
import VerifyDialog from './sections/VerifyDialog';

export default function CheckoutPage() {
  const [searchParams] = useSearchParams();
  const product = getProductBySlug(searchParams.get('product') ?? '');

  const form = useForm<CheckoutFormValues>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: { nickname: '', contactType: 'wechat', contact: '' },
  });

  const [orderRef] = useState<string>(() => generateOrderRef());
  const [verifyOpen, setVerifyOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState<{
    contact: string;
    contactType: 'wechat' | 'email';
  } | null>(null);

  if (!product || !product.purchasable) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          Checkout unavailable
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          该商品当前不可购买，请返回商品列表选择可购买的作品。
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/products">返回商品列表</Link>
        </Button>
      </div>
    );
  }

  const inDemo = DEMO_MODE || product.demoMode;

  const handleValidSubmit = () => {
    setContactInfo({
      contact: form.getValues('contact'),
      contactType: form.getValues('contactType'),
    });
    toast.success('联系信息已确认，请核对订单摘要并完成付款');
    document
      .getElementById('payment-panel')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleVerify = () => {
    if (!form.formState.isValid) {
      toast.error('请先填写并确认联系信息');
      document.getElementById('checkout-form-title')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    setContactInfo({
      contact: form.getValues('contact'),
      contactType: form.getValues('contactType'),
    });
    setVerifyOpen(true);
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <SectionHeading kickerEn="Checkout" title="确认购买" description="核对商品与金额，按流程完成付款与人工核验。" />

      {inDemo ? (
        <div className="mt-8 flex items-start gap-3 border border-warning/40 bg-warning/5 px-4 py-3">
          <span aria-hidden className="mt-1.5 size-1.5 shrink-0 rounded-full bg-warning" />
          <div className="text-[13px] leading-relaxed text-foreground/90">
            当前为<b>演示模式</b>，不会产生真实收款，也不会发放真实邀请码。示例价格仅用于测试界面，不代表最终的实际售价。
          </div>
        </div>
      ) : null}

      <div className="mt-10 grid gap-10 lg:grid-cols-[1.55fr_1fr]">
        <div className="space-y-12">
          <CheckoutFormSection form={form} onValidSubmit={handleValidSubmit} />
          <PaymentMethodPanel product={product} onVerify={handleVerify} />
        </div>

        <OrderSummaryCard
          product={product}
          orderRef={orderRef}
          contact={contactInfo?.contact ?? ''}
          contactType={contactInfo?.contactType ?? 'wechat'}
        />
      </div>

      <VerifyDialog
        open={verifyOpen}
        onOpenChange={setVerifyOpen}
        product={product}
        orderRef={orderRef}
        contact={contactInfo?.contact ?? ''}
        contactType={contactInfo?.contactType ?? 'wechat'}
      />
    </div>
  );
}
