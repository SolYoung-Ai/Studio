import { SITE_CONFIG } from '@/data/site';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';
import { useLang } from '@/i18n';

export default function TermsPage() {
  const { lang } = useLang();
  const en = lang === 'en';
  return (
    <InfoPageLayout
      kicker="Terms"
      title={en ? 'Terms' : '服务条款'}
      description={
        en
          ? 'The ground rules for working with this site. Continued use means you accept the latest version.'
          : '使用本站前请阅读。条款以本站最新公布为准。'
      }
    >
      <InfoSection label={en ? '01 · Scope of work' : '01 · 工作范围'}>
        <p>
          {en
            ? 'For personal website and brand collaborations, the deliverable scope is whatever we confirm in writing before work starts. Unconfirmed pages or features are not automatically included.'
            : '个人网站与品牌合作的交付范围，以双方书面确认的方案为准。未确认的页面与功能不自动包含。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '02 · Changes & revisions' : '02 · 修改与变更'}>
        <p>
          {en
            ? 'Major new features or direction changes are a new scope and are re-quoted. Revision rounds and acceptance criteria are agreed upfront — revisions are not unlimited.'
            : '新增重大功能或改变方向属于新范围，需重新报价。修改轮次与验收标准在合作前明确，不是无限修改。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '03 · Costs not included' : '03 · 不包含的费用'}>
        <p>
          {en
            ? 'Domain, hosting, third-party subscriptions and API costs are billed separately and are not included in the service fee unless agreed in writing. Launching a site does not mean lifetime free maintenance.'
            : '域名、服务器、第三方订阅与 API 费用按实约定，不默认包含在服务费中。网站上线不等于永久免费维护。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '04 · Brand collaboration' : '04 · 品牌合作'}>
        <p>
          {en
            ? 'No traffic, conversion or other performance numbers are promised. Format, scope and rights are agreed in writing before execution.'
            : '不承诺流量、转化等效果指标。合作形式、范围与权益在执行前以书面约定为准。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '05 · Intellectual property' : '05 · 知识产权'}>
        <p>
          {en
            ? `Custom work is licensed to you within the agreed scope after final payment. ${SITE_CONFIG.ownerName} retains the right to show the work as a portfolio case unless otherwise agreed in writing.`
            : `定制作品在尾款结清后，客户获得约定范围内的使用权；${SITE_CONFIG.ownerName} 保留将该作品作为个人案例展示的权利，另有保密约定的除外。`}
        </p>
      </InfoSection>

      <InfoSection label={en ? '06 · Contact' : '06 · 联系'}>
        <p>
          {en ? <>Questions: {SITE_CONFIG.ownerEmail}.</> : <>如有疑问，可通过 {SITE_CONFIG.ownerEmail} 联系站长。</>}
        </p>
      </InfoSection>
    </InfoPageLayout>
  );
}
