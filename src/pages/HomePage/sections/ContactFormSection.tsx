import { useState } from 'react';
import { AlertCircle, Check, Copy, Mail } from 'lucide-react';
import { SITE_CONFIG } from '@/data/site';
import { assetUrl } from '@/lib/base';
import {
  SERVICE_TYPES,
  OUTCOMES_BY_TYPE,
  PROGRESS_OPTIONS,
  BRAND_CATEGORIES,
  BUDGETS,
  TIMELINES,
  type ServiceTypeId,
} from '@/data/services';
import { bi, useLang, type Bi, type Lang } from '@/i18n';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const inputCls =
  'w-full border border-border bg-card px-3 py-2 text-[13.5px] outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-foreground/40';

const chipCls = (active: boolean) =>
  cn(
    'border px-3 py-1.5 text-[12.5px] transition-colors',
    active
      ? 'border-foreground bg-foreground text-background'
      : 'border-border bg-card text-foreground/80 hover:border-foreground/40',
  );

function Field({ label, required, error, children }: { label: string; required?: boolean; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <span className="mb-1.5 flex items-center gap-1 text-[12px] font-medium text-muted-foreground">
        {label}
        {required ? <span className="text-accent">*</span> : null}
      </span>
      {children}
      {error ? (
        <span className="mt-1 flex items-center gap-1 text-[11.5px] text-warning">
          <AlertCircle aria-hidden className="size-3" />
          {error}
        </span>
      ) : null}
    </div>
  );
}

export default function ContactFormSection() {
  const { lang } = useLang();
  const L = (b: Bi) => bi(b, lang as Lang);

  const [type, setType] = useState<ServiceTypeId>('site');
  const [problem, setProblem] = useState('');
  const [outcomes, setOutcomes] = useState<Bi[]>([]);
  const [otherOutcome, setOtherOutcome] = useState('');
  const [progress, setProgress] = useState<Bi>(PROGRESS_OPTIONS[0]);
  const [budget, setBudget] = useState<Bi>(BUDGETS[0]);
  const [timeline, setTimeline] = useState<Bi>(TIMELINES[0]);
  const [contact, setContact] = useState('');
  const [extra, setExtra] = useState('');
  const [errors, setErrors] = useState<{ problem?: string; contact?: string }>({});
  const [copied, setCopied] = useState(false);

  const typeMeta = SERVICE_TYPES.find((s) => s.id === type)!;
  const typeOutcomes = OUTCOMES_BY_TYPE[type];
  const isBrand = type === 'brand';
  const progressLabel = isBrand
    ? { zh: '品牌方类型', en: 'Brand category' }
    : { zh: '当前进度', en: 'Current stage' };
  const progressOptions: Bi[] = isBrand ? BRAND_CATEGORIES : PROGRESS_OPTIONS;

  const OTHER_ZH = '其他成果';
  const OTHER_COLLAB_ZH = '其他合作形式';

  const toggleOutcome = (o: Bi) => {
    setOutcomes((prev) =>
      prev.some((x) => x.zh === o.zh) ? prev.filter((x) => x.zh !== o.zh) : [...prev, o],
    );
  };

  const handleTypeChange = (id: ServiceTypeId) => {
    setType(id);
    setErrors((prev) => ({ ...prev, type: undefined }));
    setOutcomes([]);
    setOtherOutcome('');
    setProgress(id === 'brand' ? BRAND_CATEGORIES[0] : PROGRESS_OPTIONS[0]);
  };

  const buildSummary = () => {
    const isEn = lang === 'en';
    const otherOutcomeItems = outcomes.filter((o) => o.zh === OTHER_ZH || o.zh === OTHER_COLLAB_ZH);
    const selected = outcomes
      .filter((o) => o.zh !== OTHER_ZH && o.zh !== OTHER_COLLAB_ZH)
      .map((o) => L(o));
    if (otherOutcome.trim() && otherOutcomeItems.length) {
      selected.push(isEn ? `Other: ${otherOutcome.trim()}` : `其他：${otherOutcome.trim()}`);
    }
    const outcomeText = selected.join(isEn ? '; ' : '、');
    const na = isEn ? '(not provided)' : '（未填）';
    return [
      isEn ? '[Project Inquiry] SolYoung Studio' : '【项目咨询】SolYoung Studio',
      isEn ? `Service: ${L(typeMeta.label)}` : `服务类型：${L(typeMeta.label)}`,
      isEn ? `Problem: ${problem || na}` : `你想解决什么问题：${problem || na}`,
      isEn ? `Expected outcome: ${outcomeText || na}` : `期望成果：${outcomeText || na}`,
      `${isEn ? 'Stage' : progressLabel.zh}：${L(progress)}`,
      isEn ? `Budget: ${L(budget)}` : `预算范围：${L(budget)}`,
      isEn ? `Timeline: ${L(timeline)}` : `期望完成时间：${L(timeline)}`,
      isEn ? `Contact: ${contact || na}` : `联系方式：${contact || na}`,
      isEn ? `Notes: ${extra || '(none)'}` : `其他补充：${extra || '（无）'}`,
    ].join('\n');
  };

  const buildMailto = () => {
    const subject =
      lang === 'en'
        ? `Project: ${problem.slice(0, 24) || 'A new idea'}`
        : `项目咨询：${problem.slice(0, 24) || '一个新想法'}`;
    return `mailto:${SITE_CONFIG.ownerEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(buildSummary())}`;
  };

  const validate = () => {
    const next: typeof errors = {};
    if (!problem.trim()) next.problem = lang === 'en' ? 'Please describe the problem' : '请描述你想解决的问题';
    if (!contact.trim()) next.contact = lang === 'en' ? 'Please leave a way to reach you' : '请留下联系方式，便于回复';
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    window.location.assign(buildMailto());
  };

  const copySummary = async () => {
    if (!validate()) return;
    try {
      await navigator.clipboard.writeText(buildSummary());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.assign(buildMailto());
    }
  };

  return (
    <section id="start" className="border-t border-border">
      <div className="mx-auto max-w-6xl scroll-mt-20 px-4 py-16 sm:px-6 sm:py-24">
        <SectionHeading
          index="04"
          kickerEn="Start a Project"
          title={lang === 'en' ? 'You have an idea — where do we start?' : '你有一个想法，我们可以从哪里开始？'}
          description={
            lang === 'en'
              ? 'You do not need a full product plan. Tell me the problem, the outcome you want and what you already have. Submitting this form is not a commitment — projects still need a conversation and assessment.'
              : '你不需要准备一份完整的产品方案。告诉我你想解决什么问题、希望得到什么结果，以及目前有哪些想法。提交需求不代表合作已经成立——具体项目需要先沟通与评估。'
          }
        />

        <form className="mt-10 space-y-8" onSubmit={handleSubmit} noValidate>
          <Field label={lang === 'en' ? 'What kind of service do you need?' : '你需要哪类服务？'} required>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {SERVICE_TYPES.map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => handleTypeChange(s.id)}
                  aria-pressed={type === s.id}
                  className={cn(
                    'border p-4 text-left transition-colors',
                    type === s.id
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border bg-card text-foreground hover:border-foreground/40',
                  )}
                >
                  <span className="block text-[13px] font-medium">{L(s.label)}</span>
                  <span
                    className={cn(
                      'mt-1 block text-[11.5px] leading-snug',
                      type === s.id ? 'text-background/70' : 'text-muted-foreground',
                    )}
                  >
                    {L(s.desc)}
                  </span>
                </button>
              ))}
            </div>
          </Field>

          <Field
            label={lang === 'en' ? 'What problem do you want to solve?' : '你想解决什么问题？'}
            required
            error={errors.problem}
          >
            <textarea
              className={cn(inputCls, 'min-h-[88px] resize-y')}
              value={problem}
              onChange={(e) => {
                setProblem(e.target.value);
                if (errors.problem) setErrors((prev) => ({ ...prev, problem: undefined }));
              }}
              placeholder={L(typeMeta.question)}
            />
            <p className="mt-1 text-[11.5px] text-muted-foreground">
              {lang === 'en' ? 'That is just an example — write what actually applies to you.' : '以上只是示例，按你的实际情况填写。'}
            </p>
          </Field>

          <Field label={lang === 'en' ? 'What do you want to end up with?' : '你希望最终获得什么？'}>
            <div className="flex flex-wrap gap-2">
              {typeOutcomes.map((o) => (
                <button
                  key={o.zh}
                  type="button"
                  onClick={() => toggleOutcome(o)}
                  aria-pressed={outcomes.some((x) => x.zh === o.zh)}
                  className={chipCls(outcomes.some((x) => x.zh === o.zh))}
                >
                  {L(o)}
                </button>
              ))}
            </div>
            {outcomes.some((o) => o.zh === OTHER_ZH || o.zh === OTHER_COLLAB_ZH) ? (
              <input
                className={cn(inputCls, 'mt-2 max-w-md')}
                value={otherOutcome}
                onChange={(e) => setOtherOutcome(e.target.value)}
                placeholder={lang === 'en' ? 'Describe the outcome or format you want' : '补充说明你期望的成果或合作形式'}
              />
            ) : null}
          </Field>

          <div className="grid gap-6 sm:grid-cols-3">
            <Field label={L(progressLabel)}>
              <select className={inputCls} value={progress.zh} onChange={(e) => setProgress(progressOptions.find((p) => p.zh === e.target.value)!)}>
                {progressOptions.map((p) => (
                  <option key={p.zh} value={p.zh}>{L(p)}</option>
                ))}
              </select>
            </Field>
            <Field label={lang === 'en' ? 'Budget' : '预算范围'}>
              <select className={inputCls} value={budget.zh} onChange={(e) => setBudget(BUDGETS.find((b) => b.zh === e.target.value)!)}>
                {BUDGETS.map((b) => (
                  <option key={b.zh} value={b.zh}>{L(b)}</option>
                ))}
              </select>
            </Field>
            <Field label={lang === 'en' ? 'Expected timeline' : '期望完成时间'}>
              <select className={inputCls} value={timeline.zh} onChange={(e) => setTimeline(TIMELINES.find((t) => t.zh === e.target.value)!)}>
                {TIMELINES.map((t) => (
                  <option key={t.zh} value={t.zh}>{L(t)}</option>
                ))}
              </select>
            </Field>
          </div>

          <Field
            label={lang === 'en' ? 'How to reach you (WeChat / email)' : '联系方式（微信 / 邮箱）'}
            required
            error={errors.contact}
          >
            <input
              className={cn(inputCls, 'max-w-md')}
              value={contact}
              onChange={(e) => {
                setContact(e.target.value);
                if (errors.contact) setErrors((prev) => ({ ...prev, contact: undefined }));
              }}
              placeholder={lang === 'en' ? `WeChat ${SITE_CONFIG.wechatId} or email` : `微信 ${SITE_CONFIG.wechatId} 或邮箱`}
            />
            <p className="mt-1 text-[11.5px] text-muted-foreground">
              {lang === 'en' ? 'Only used to reply to this inquiry.' : '仅用于回复本次合作需求。'}
            </p>
          </Field>

          <Field label={lang === 'en' ? 'Anything else? (optional)' : '其他补充（选填）'}>
            <textarea
              className={cn(inputCls, 'min-h-[72px] resize-y')}
              value={extra}
              onChange={(e) => setExtra(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Reference sites, design preferences, feature notes or constraints'
                  : '参考网站链接、设计偏好、功能说明或其他限制条件'
              }
            />
          </Field>

          <div className="border border-border bg-card p-5">
            <p className="text-[12px] leading-relaxed text-muted-foreground">
              <span className="font-medium text-foreground">
                {lang === 'en' ? 'Before you submit: ' : '提交前请注意：'}
              </span>
              {lang === 'en'
                ? `This is a static site with no form backend — your inquiry is not sent to a server. The button below opens a pre-filled email draft, or copies a summary you can send via WeChat (${SITE_CONFIG.wechatId}). I will never ask for payment passwords, ID numbers or anything unrelated to the project. Submitting is not a commitment; projects still need a conversation and assessment.`
                : `本站为静态站点，没有配置在线表单后端——你的需求不会自动发送到服务器。点击下方按钮会生成一封预填好的邮件草稿，或复制需求摘要后通过微信（${SITE_CONFIG.wechatId}）发送。我不会索要支付密码、身份证号等与项目无关的信息。提交需求不代表合作成立，具体项目需先沟通与评估。`}
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Button type="submit" size="lg">
                <Mail aria-hidden className="mr-1.5 size-4" />
                {lang === 'en' ? 'Describe your project (email)' : '描述你的项目（邮件）'}
              </Button>
              <Button type="button" variant="outline" size="lg" onClick={copySummary}>
                {copied ? <Check aria-hidden className="mr-1.5 size-4" /> : <Copy aria-hidden className="mr-1.5 size-4" />}
                {copied ? (lang === 'en' ? 'Copied' : '已复制') : (lang === 'en' ? 'Copy summary' : '复制需求摘要')}
              </Button>
            </div>
          </div>
        </form>

        <aside className="mt-6 flex flex-wrap items-center justify-between gap-5 border border-dashed border-border p-5">
          <div className="text-[12.5px] text-muted-foreground">
            <p className="font-medium text-foreground">{lang === 'en' ? 'Reach me directly' : '直接联系'}</p>
            <p className="mt-1.5">
              {lang === 'en' ? 'Email ' : '邮箱 '}
              <a href={`mailto:${SITE_CONFIG.ownerEmail}`} className="text-foreground hover:text-accent">
                {SITE_CONFIG.ownerEmail}
              </a>
            </p>
            <p className="mt-1">
              {lang === 'en' ? 'WeChat ' : '微信 '}
              <span className="text-foreground">{SITE_CONFIG.wechatId}</span>
            </p>
            <p className="mt-2 max-w-xs text-[11.5px] leading-relaxed">
              {lang === 'en'
                ? 'Scan the QR to add on WeChat, or paste the summary above and send it to me.'
                : '扫码添加微信，或把上面的需求摘要直接发给我。'}
            </p>
          </div>
          {SITE_CONFIG.wechatContactQr ? (
            <img
              src={assetUrl(SITE_CONFIG.wechatContactQr)}
              alt="SolYoung WeChat QR"
              className="h-28 w-28 border border-border bg-card object-cover p-1"
            />
          ) : null}
        </aside>
      </div>
    </section>
  );
}
