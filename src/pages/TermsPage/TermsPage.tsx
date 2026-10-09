import { DEMO_MODE } from '@/data/payments';
import { SITE_CONFIG } from '@/data/site';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';

export default function TermsPage() {
  return (
    <InfoPageLayout
      kicker="Terms"
      title="服务条款"
      description="使用本站与购买商品前，请阅读以下条款。条款由站长确认后生效，未尽事宜以站长公布的最新说明为准。"
    >
      <InfoSection label="01 · 站点性质">
        <p>
          本站是独立创作者 {SITE_CONFIG.ownerName} 的数字作品工作室，展示并销售经实际制作与验证的数字产品。
          商品状态（在售 / 演示商品 / 制作中 / 规划中）与价格以商品详情页为准，未开放购买的商品不提供购买入口。
        </p>
      </InfoSection>

      <InfoSection label="02 · 交易方式">
        <p>
          本站采用真实收款二维码 + 人工核验的交易方式，不提供自动支付确认。
          只有人工确认收款后，才会按商品说明交付相应权益；前端按钮不会直接改变交付状态。
        </p>
        {DEMO_MODE ? (
          <p className="border-l-2 border-warning/50 pl-3 text-warning">
            当前为演示模式，不产生真实交易、不发放真实权益，示例价格不代表最终售价。
          </p>
        ) : null}
      </InfoSection>

      <InfoSection label="03 · 知识产权">
        <p>
          本站作品及其交付内容的知识产权归 {SITE_CONFIG.ownerName} 所有。未经许可，
          不得复制、转售、公开传播或以其他方式盗用交付内容（包括邀请码与授权权益）。
        </p>
      </InfoSection>

      <InfoSection label="04 · 使用限制">
        <ul className="list-disc space-y-1.5 pl-5">
          <li>邀请码类商品限购 1 个，仅供本人使用。</li>
          <li>数字资源的使用范围、授权期限与是否允许转让，以商品详情页说明为准。</li>
          <li>不得将订单参考号、邀请码用于非法或未授权用途。</li>
        </ul>
      </InfoSection>

      <InfoSection label="05 · 免责与售后">
        <p>
          数字商品一经交付，售后规则按商品详情页公布的退款及售后说明执行。
          因用户自身原因（如信息填写错误、未保留支付记录）导致的交付延迟或失败，站长不承担相应责任，
          但会尽力协助解决。
        </p>
      </InfoSection>

      <InfoSection label="06 · 条款更新">
        <p>
          本站可随时更新本条款，更新后将在本页公布。继续使用本站即视为接受最新条款。
          如有疑问，可通过 {SITE_CONFIG.ownerEmail} 联系站长。
        </p>
      </InfoSection>
    </InfoPageLayout>
  );
}
