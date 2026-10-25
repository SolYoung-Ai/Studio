import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '@/data/site';
import InfoPageLayout, { InfoSection } from '@/components/InfoPageLayout';
import { useLang } from '@/i18n';

export default function PrivacyPage() {
  const { lang } = useLang();
  const en = lang === 'en';
  return (
    <InfoPageLayout
      kicker="Privacy"
      title={en ? 'Privacy' : '隐私说明'}
      description={
        en
          ? 'What this site collects, how it is stored and used. Principle: collect as little as possible.'
          : '本站对信息收集、保存与使用的说明。原则：能不收集就不收集。'
      }
    >
      <InfoSection label={en ? '01 · What we collect' : '01 · 我们收集什么'}>
        <p>
          {en
            ? 'When you submit an inquiry form, you provide: a way to reach you (WeChat / email), the problem you want to solve, expected outcome, budget range and timeline. The budget is only used to judge project scope — it is not a price promise.'
            : '在服务页提交项目咨询时，会涉及：联系方式（微信 / 邮箱）、想解决的问题、期望成果、预算范围与期望完成时间。预算仅用于判断项目范围，不代表任何价格承诺。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '02 · How it is stored' : '02 · 信息如何保存'}>
        <p>
          {en
            ? 'This is a static site with no server-side storage or form backend. What you type here is not sent to or saved on any server. Clicking submit opens your email client with a pre-filled draft, or you copy the summary and send it to me yourself.'
            : '本站为静态站点，没有服务端存储与在线表单后端。你填写的内容不会自动发送或保存到任何服务器；点击提交会打开你的邮件客户端生成预填草稿，或复制需求摘要后由你主动发送。'}
        </p>
      </InfoSection>

      <InfoSection label={en ? '03 · How it is used' : '03 · 信息如何使用'}>
        <p>
          {en ? (
            <>
              When you send your inquiry to {SITE_CONFIG.ownerEmail}, it is used only by me to review the project and respond. It is not shared with third parties and not used for marketing.
            </>
          ) : (
            <>
              当你主动通过邮箱 {SITE_CONFIG.ownerEmail} 发送咨询时，这些信息仅由站长本人用于评估项目与回复，不向任何第三方分享，也不用于营销。
            </>
          )}
        </p>
      </InfoSection>

      <InfoSection label={en ? '04 · What we do not do' : '04 · 不做什么'}>
        <ul className="list-disc space-y-1.5 pl-5">
          {en ? (
            <>
              <li>Do not share your contact info or inquiry with any unconfigured third party.</li>
              <li>Do not ask for payment passwords, bank details or ID numbers.</li>
              <li>Do not fake upload, order lookup or payment-status features.</li>
            </>
          ) : (
            <>
              <li>不将你的联系方式或咨询信息发送给任何未经配置的第三方。</li>
              <li>不索要支付密码、银行卡密码、身份证号等无关敏感信息。</li>
              <li>不设置虚假的凭证上传、订单查询或支付状态同步功能。</li>
            </>
          )}
        </ul>
      </InfoSection>

      <InfoSection label={en ? '05 · Updates & contact' : '05 · 更新与联系'}>
        <p>
          {en ? (
            <>This notice may be updated as the site evolves. Questions: {SITE_CONFIG.ownerEmail}.</>
          ) : (
            <>本说明会随功能变化更新。如有隐私相关问题，可通过 {SITE_CONFIG.ownerEmail} 联系站长。</>
          )}
        </p>
      </InfoSection>
    </InfoPageLayout>
  );
}
