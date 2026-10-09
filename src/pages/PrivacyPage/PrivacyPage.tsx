import { DEMO_MODE } from '@/data/payments';
import { SITE_CONFIG } from '@/data/site';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';

export default function PrivacyPage() {
  return (
    <InfoPageLayout
      kicker="Privacy"
      title="隐私说明"
      description="本站对信息收集、保存与使用的说明。原则：能不收集就不收集，收集只为完成人工核验。"
    >
      <InfoSection label="01 · 我们收集什么">
        <p>
          购买流程中，你需要填写：称呼或昵称、联系方式类型（微信 / 邮箱）与联系方式。
          这些信息仅用于订单的人工核验与权益交付，不会用于营销或其他用途。
        </p>
      </InfoSection>

      <InfoSection label="02 · 信息如何保存">
        <p>
          本站为静态站点，<b>没有服务端存储</b>。你填写的联系信息与生成的订单参考号
          <b>不会自动发送或保存到任何服务器</b>；订单资料仅存在于当前页面，或由你自行复制保存。
        </p>
        {DEMO_MODE ? (
          <p className="border-l-2 border-warning/50 pl-3 text-warning">
            当前为演示模式：不会产生真实收款，联系信息仅用于体验流程，不会被核验或交付。
          </p>
        ) : null}
      </InfoSection>

      <InfoSection label="03 · 信息如何使用">
        <p>
          当你主动通过客服渠道（当前为官方邮箱 {SITE_CONFIG.ownerEmail}）发送订单信息进行人工核验时，
          这些信息仅由站长本人用于核对订单与交付权益。
        </p>
      </InfoSection>

      <InfoSection label="04 · 不做什么">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>不将你的联系方式、订单信息发送给任何未经配置的第三方。</li>
          <li>不索要支付密码、银行卡密码、身份证号等无关敏感信息。</li>
          <li>不设置虚假的凭证上传、订单查询或支付状态同步功能。</li>
        </ul>
      </InfoSection>

      <InfoSection label="05 · 更新与联系">
        <p>
          本说明会随功能变化更新。如有隐私相关问题，可通过 {SITE_CONFIG.ownerEmail}{' '}
          联系站长。
        </p>
      </InfoSection>
    </InfoPageLayout>
  );
}
