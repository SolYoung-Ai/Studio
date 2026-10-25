import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/data/site';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';
import { useLang } from '@/i18n';

export default function PurchaseGuidePage() {
  const { lang } = useLang();
  const en = lang === 'en';
  return (
    <InfoPageLayout
      kicker={en ? 'Before We Start' : '合作前请了解'}
      title={en ? 'How We Work Together' : '合作前请了解'}
      description={
        en
          ? 'A short note on how projects are scoped, quoted and delivered.'
          : '关于项目范围、报价与交付的简短说明。'
      }
    >
      <InfoSection label={en ? '01 · How it starts' : '01 · 如何开始'}>
        <p>
          {en
            ? 'Reach me through the contact form or email. Tell me the problem you want to solve and the outcome you want. No detailed brief needed — a rough idea is fine.'
            : '通过联系表单或邮箱联系我。告诉我你想解决的问题和期望的结果。不需要详细方案，一个初步想法就够。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '02 · Scope & quote' : '02 · 范围与报价'}>
        <p>
          {en
            ? 'Before any work begins, we agree in writing on pages, features, deliverables, budget and timeline. Personal sites are quoted by page count, design, features and deployment; brand collaborations are quoted per format. No fixed price is listed here.'
            : '开工前会以文字确认页面、功能、交付物、预算与时间。个人网站按页面数量、设计、功能与部署评估；品牌合作按形式单独报价。此页不展示固定价格。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '03 · Payment' : '03 · 付款'}>
        <p>
          {en
            ? 'Payment follows agreed milestones, typically a start portion and a delivery portion. Third-party costs (domain, hosting, subscriptions) are billed separately and are not included in the service fee unless agreed.'
            : '按合作前约定的节点付款，通常包含启动阶段与交付阶段。域名、服务器、第三方订阅等费用按实际方案约定，不默认包含在服务费内。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '04 · Delivery & revisions' : '04 · 交付与修改'}>
        <p>
          {en
            ? 'Agreed revision rounds and acceptance criteria are set upfront. Testing and tweaks happen within that scope — revisions are not unlimited. Long-term maintenance and new features follow a separately agreed scope.'
            : '约定包含的修改轮次与验收标准。测试与修改在约定范围内进行，不是无限修改。长期维护与新增功能按双方确认的范围处理。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '05 · What I will not do' : '05 · 我不会做的事'}>
        <ul className="list-disc space-y-1.5 pl-5">
          {en ? (
            <>
              <li>Take on video production, editing or long-term content management.</li>
              <li>Promise traffic, conversion or other performance numbers.</li>
              <li>Ask for payment passwords, ID numbers or anything unrelated to the project.</li>
              <li>Take on work I know I cannot deliver — I will tell you honestly and offer alternatives.</li>
            </>
          ) : (
            <>
              <li>不承接视频代工、剪辑或长期内容托管。</li>
              <li>不承诺流量、转化等效果指标。</li>
              <li>不索要支付密码、身份证号等与项目无关的信息。</li>
              <li>超出能力范围的事会如实说明，并给出替代建议，而不是先接下再做不到。</li>
            </>
          )}
        </ul>
      </InfoSection>

      <InfoSection label={en ? '06 · Contact' : '06 · 联系'}>
        <p>
          {en ? 'Email ' : '邮箱 '}
          <a href={`mailto:${SITE_CONFIG.ownerEmail}`} className="text-accent underline-offset-4 hover:underline">
            {SITE_CONFIG.ownerEmail}
          </a>
          {en ? ' or via the ' : '，或通过 '}
          <Link to="/contact" className="text-accent underline-offset-4 hover:underline">
            {en ? 'contact page' : '联系页'}
          </Link>
          {en ? '.' : ' 联系我。'}
        </p>
      </InfoSection>
    </InfoPageLayout>
  );
}
