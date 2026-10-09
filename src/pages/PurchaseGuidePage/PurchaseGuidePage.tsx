import { Link } from 'react-router-dom';
import { DEMO_MODE } from '@/data/payments';
import { SITE_CONFIG } from '@/data/site';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';

export default function PurchaseGuidePage() {
  return (
    <InfoPageLayout
      kicker="Purchase Guide"
      title="购买须知"
      description="在购买任何商品前，请先阅读本页说明。本页内容以站长配置为准，未确定的内容不会凭空承诺。"
    >
      <InfoSection label="01 · 商品性质">
        <p>
          本站出售的是数字产品、数字资源、授权权益或邀请码，不涉及实体物流。
          商品详情页会标明每件作品的状态（在售 / 演示商品 / 制作中 / 规划中）与具体交付内容；
          状态为「制作中」「规划中」的作品不开放购买，也不会显示虚构的权益。
        </p>
      </InfoSection>

      <InfoSection label="02 · 付款方式">
        <p>
          当前采用<b>真实收款二维码 + 人工核验</b>的方式，不接入自动支付 API，
          本站无法自动确认转账是否到账。
        </p>
        <ul className="list-disc space-y-1.5 pl-5">
          <li>付款前核对商品名称与应付金额。</li>
          <li>使用对应支付应用扫描真实收款码完成转账。</li>
          <li>保留支付记录，复制订单参考信息。</li>
          <li>通过官方客服渠道联系站长进行人工核验。</li>
        </ul>
        {DEMO_MODE ? (
          <p className="border-l-2 border-warning/50 pl-3 text-warning">
            当前站点处于演示模式：不会产生真实收款，也不会发放真实邀请码。
          </p>
        ) : null}
      </InfoSection>

      <InfoSection label="03 · 交付方式">
        <p>
          人工核验确认收款后，通过官方客服渠道交付相应权益（如邀请码、资源文件或授权说明）。
          用户需要提供的最少信息：称呼或昵称、联系方式（微信 / 邮箱）以及订单参考号。
        </p>
        <p>
          本站不会索要支付密码、银行卡密码、身份证号等与交易无关的敏感信息。
        </p>
      </InfoSection>

      <InfoSection label="04 · 使用范围">
        <p>
          每件商品的使用范围（适用产品、授权期限、使用限制、是否允许转让）以其详情页说明为准；
          尚未确定的内容会显示「待补充」，不会编造承诺。邀请码类商品默认限购 1 个且仅供本人使用。
        </p>
      </InfoSection>

      <InfoSection label="05 · 退款与售后">
        <p>
          退款与售后规则由站长确认后发布，并在各商品详情页公布。演示模式不涉及真实交易，不适用退款。
          正式上线后：未核验交付的订单支持申请退款；已交付权益的订单按届时公布的售后规则处理。
        </p>
      </InfoSection>

      <InfoSection label="06 · 联系方式">
        <p>
          官方客服邮箱：{SITE_CONFIG.ownerEmail}（点击
          <Link to="/contact" className="text-accent underline-offset-4 hover:underline">
            联系与人工核验
          </Link>
          页可复制或直接发送邮件）。微信客服二维码配置完成后会在联系页展示。
        </p>
      </InfoSection>
    </InfoPageLayout>
  );
}
