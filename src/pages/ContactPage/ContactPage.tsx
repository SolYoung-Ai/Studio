import { toast } from 'sonner';
import { useState } from 'react';
import { Copy, Check, Mail } from 'lucide-react';
import { DEMO_MODE } from '@/data/payments';
import { SITE_CONFIG } from '@/data/site';
import { copyText } from '@/lib/order';
import { assetUrl } from '@/lib/base';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyText(SITE_CONFIG.ownerEmail);
    if (ok) {
      setEmailCopied(true);
      toast.success('邮箱已复制');
      window.setTimeout(() => setEmailCopied(false), 2000);
    } else {
      toast.error('复制失败，请手动记录邮箱');
    }
  };

  return (
    <InfoPageLayout
      kicker="Contact"
      title="联系与人工核验"
      description="订单核验、商品咨询、合作或其他问题，都可以通过以下渠道联系站长。"
    >
      <InfoSection label="01 · 官方客服渠道">
        <div className="flex flex-wrap items-center gap-3 border border-border bg-card px-4 py-3">
          <Mail aria-hidden className="size-4 shrink-0 text-muted-foreground" />
          <a
            href={`mailto:${SITE_CONFIG.ownerEmail}`}
            className="font-mono text-[15px] text-foreground underline-offset-4 hover:text-accent hover:underline"
          >
            {SITE_CONFIG.ownerEmail}
          </a>
          <Button variant="outline" size="sm" onClick={handleCopyEmail}>
            {emailCopied ? <Check className="mr-1.5 size-3.5 text-accent" /> : <Copy className="mr-1.5 size-3.5" />}
            {emailCopied ? '已复制' : '复制邮箱'}
          </Button>
        </div>
        {SITE_CONFIG.wechatContactQr ? (
          <div className="max-w-[220px]">
            <img
              src={assetUrl(SITE_CONFIG.wechatContactQr)}
              alt="SolYoung 微信客服二维码"
              className="border border-border bg-card p-2"
            />
            <p className="mt-2 text-[13px] text-muted-foreground">微信扫码添加客服</p>
          </div>
        ) : (
          <div className="flex aspect-square max-w-[220px] flex-col items-center justify-center gap-2 border border-dashed border-border bg-muted/30 p-6 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              请上传微信客服二维码
            </span>
            <span className="border border-warning/50 px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em] text-warning">
              未配置 · Unconfigured
            </span>
          </div>
        )}
      </InfoSection>

      <InfoSection label="02 · 人工核验流程">
        <ol className="space-y-2">
          {[
            '在结算页填写联系信息并生成订单参考号。',
            '扫描真实收款码完成付款，保留支付记录。',
            '复制订单摘要，通过客服渠道发送给站长。',
            '站长人工核验收款后，按商品说明交付权益。',
          ].map((step, i) => (
            <li key={step} className="flex items-start gap-3 text-[15px] leading-relaxed">
              <span className="mt-0.5 font-mono text-xs text-accent">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        {DEMO_MODE ? (
          <p className="border-l-2 border-warning/50 pl-3 text-warning">
            当前为演示模式：不会产生真实收款，也不会发放真实邀请码。演示流程仅供体验页面操作。
          </p>
        ) : (
          <p>{SITE_CONFIG.verificationNote}</p>
        )}
      </InfoSection>

      <InfoSection label="03 · 可以联系我做什么">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>订单付款后的核验与权益交付。</li>
          <li>商品内容、使用方式与授权范围咨询。</li>
          <li>合作、定制与数字产品建议。</li>
        </ul>
      </InfoSection>
    </InfoPageLayout>
  );
}
