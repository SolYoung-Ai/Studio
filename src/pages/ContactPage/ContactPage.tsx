import { toast } from 'sonner';
import { useState } from 'react';
import { Copy, Check, Mail, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { copyText } from '@/lib/order';
import { assetUrl } from '@/lib/base';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';
import { Button } from '@/components/ui/button';
import { useLang } from '@/i18n';

export default function ContactPage() {
  const { lang } = useLang();
  const en = lang === 'en';
  const [emailCopied, setEmailCopied] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);

  const handleCopyEmail = async () => {
    const ok = await copyText(SITE_CONFIG.ownerEmail);
    if (ok) {
      setEmailCopied(true);
      toast.success(en ? 'Email copied' : '邮箱已复制');
      window.setTimeout(() => setEmailCopied(false), 2000);
    } else {
      toast.error(en ? 'Copy failed, please note the email manually' : '复制失败，请手动记录邮箱');
    }
  };

  const handleCopyWechat = async () => {
    const ok = await copyText(SITE_CONFIG.wechatId);
    if (ok) {
      setWechatCopied(true);
      toast.success(en ? 'WeChat ID copied' : '微信号已复制');
      window.setTimeout(() => setWechatCopied(false), 2000);
    } else {
      toast.error(en ? 'Copy failed, please note the WeChat ID' : '复制失败，请手动记录微信号');
    }
  };

  return (
    <InfoPageLayout
      kicker="Contact"
      title={en ? 'Contact' : '联系我'}
      description={
        en
          ? 'Service questions, business collaboration or anything else — reach me through the channels below.'
          : '服务咨询、商务合作或其他问题，都可以通过以下方式联系我。'
      }
    >
      <InfoSection label={en ? '01 · Channels' : '01 · 联系渠道'}>
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
            {emailCopied ? (en ? 'Copied' : '已复制') : (en ? 'Copy email' : '复制邮箱')}
          </Button>
        </div>
        <div className="mt-3 flex flex-wrap items-center gap-3 border border-border bg-card px-4 py-3">
          <MessageCircle aria-hidden className="size-4 shrink-0 text-muted-foreground" />
          <span className="font-mono text-[15px] text-foreground">{SITE_CONFIG.wechatId}</span>
          <Button variant="outline" size="sm" onClick={handleCopyWechat}>
            {wechatCopied ? <Check className="mr-1.5 size-3.5 text-accent" /> : <Copy className="mr-1.5 size-3.5" />}
            {wechatCopied ? (en ? 'Copied' : '已复制') : (en ? 'Copy WeChat' : '复制微信')}
          </Button>
        </div>
        {SITE_CONFIG.wechatContactQr ? (
          <div className="max-w-[220px]">
            <img
              src={assetUrl(SITE_CONFIG.wechatContactQr)}
              alt="SolYoung WeChat QR"
              className="border border-border bg-card p-2"
            />
            <p className="mt-2 text-[13px] text-muted-foreground">
              {en ? 'Scan to add on WeChat' : '微信扫码添加'}
            </p>
          </div>
        ) : null}
      </InfoSection>

      <InfoSection label={en ? '02 · What to reach me for' : '02 · 可以联系我做什么'}>
        <ul className="list-disc space-y-1.5 pl-5">
          {en ? (
            <>
              <li>Questions about a personal website or digital space project.</li>
              <li>Brand, content or advertising collaboration.</li>
              <li>Feedback, ideas or anything else on your mind.</li>
            </>
          ) : (
            <>
              <li>个人网站 / 数字空间项目咨询。</li>
              <li>品牌、内容或广告合作。</li>
              <li>任何想法、反馈或其他问题。</li>
            </>
          )}
        </ul>
      </InfoSection>
    </InfoPageLayout>
  );
}
