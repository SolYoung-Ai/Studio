// EXPORTS: SERVICE_TYPES, OUTCOMES_BY_TYPE, PROGRESS_OPTIONS, BRAND_CATEGORIES, BUDGETS, TIMELINES, SERVICES, PROCESS_STEPS, FAQS
import type { Bi } from '@/i18n';

/* ================= 项目咨询表单选项 ================= */

export interface IServiceTypeOption {
  id: string;
  label: Bi;
  desc: Bi;
  question: Bi;
}

export const SERVICE_TYPES: IServiceTypeOption[] = [
  {
    id: 'site',
    label: { zh: 'AI 个人网站 / 数字空间', en: 'AI Personal Website / Digital Space' },
    desc: { zh: '想要一个真正属于自己的网站', en: 'Want a space that is truly yours' },
    question: {
      zh: '例如：我是一名摄影师，希望建立一个可以展示作品、介绍自己并承接合作的个人网站。',
      en: 'e.g. I am a photographer and want a personal website to show work, introduce myself and take on collaborations.',
    },
  },
  {
    id: 'brand',
    label: { zh: '品牌与商业合作', en: 'Brand & Business Collaboration' },
    desc: { zh: '内容 / 广告 / 联名合作', en: 'Content / ads / co-branding' },
    question: {
      zh: '例如：我们是一个品牌，希望与你聊聊内容合作或广告展示的合作可能。',
      en: 'e.g. We are a brand and would like to discuss content or advertising collaboration.',
    },
  },
  {
    id: 'unsure',
    label: { zh: '还不确定，希望先沟通', en: 'Not sure yet — let us talk first' },
    desc: { zh: '先聊清楚，再判断方向', en: 'Clarify before choosing a direction' },
    question: {
      zh: '可以先说说你现在大概想解决什么问题、希望得到什么结果。',
      en: 'Tell me what problem you want to solve and what outcome you are after.',
    },
  },
];

export type ServiceTypeId = (typeof SERVICE_TYPES)[number]['id'];

/** 期望成果（随服务类型变化） */
export const OUTCOMES_BY_TYPE: Record<ServiceTypeId, Bi[]> = {
  site: [
    { zh: '一个可以访问的个人网站', en: 'A live personal website' },
    { zh: '作品集与作品展示', en: 'Portfolio & work showcase' },
    { zh: '关于我 / 自我介绍页', en: 'About me / intro page' },
    { zh: '动态记录 / 更新区', en: 'Updates / now log' },
    { zh: '思考 / 文章博客', en: 'Notes / blog' },
    { zh: '影像 / 视频展示区', en: 'Photo / video gallery' },
    { zh: '联系方式 / 合作入口', en: 'Contact / hire entry' },
    { zh: '活动 / 产品 Landing 单页', en: 'Event / product landing page' },
    { zh: '其他成果', en: 'Something else' },
  ],
  brand: [
    { zh: '一次内容合作', en: 'A content collaboration' },
    { zh: '网站广告位展示', en: 'Website ad placement' },
    { zh: '广告或展示合作', en: 'Display / sponsorship' },
    { zh: '联名与共创项目', en: 'Co-branded / co-creation project' },
    { zh: '其他合作形式', en: 'Other forms' },
  ],
  unsure: [
    { zh: '一个可以访问的网站', en: 'A live website' },
    { zh: '一次内容合作', en: 'A content collaboration' },
    { zh: '其他成果', en: 'Something else' },
  ],
};

/** 当前进度（网站类） */
export const PROGRESS_OPTIONS: Bi[] = [
  { zh: '只有初步想法', en: 'Only a rough idea' },
  { zh: '已有参考案例或设计', en: 'Have references / design' },
  { zh: '已经有部分页面或代码', en: 'Some pages / code already exist' },
  { zh: '希望优化现有项目', en: 'Want to improve an existing site' },
];

/** 品牌方类型 */
export const BRAND_CATEGORIES: Bi[] = [
  { zh: '摄影器材 / 影像设备', en: 'Camera / imaging gear' },
  { zh: 'AI 工具 / 科技产品', en: 'AI tools / tech products' },
  { zh: '消费电子 / 数码周边', en: 'Consumer electronics / gadgets' },
  { zh: '生活方式 / 消费品牌', en: 'Lifestyle / consumer brands' },
  { zh: '内容平台 / 媒体机构', en: 'Content platforms / media' },
  { zh: '其他品类', en: 'Other categories' },
];

/** 预算 */
export const BUDGETS: Bi[] = [
  { zh: '尚未确定，希望先评估', en: 'Not set — please evaluate first' },
  { zh: '低于 2,000 元', en: 'Under ¥2,000' },
  { zh: '2,000–5,000 元', en: '¥2,000–5,000' },
  { zh: '5,000–10,000 元', en: '¥5,000–10,000' },
  { zh: '10,000 元以上', en: '¥10,000+' },
];

/** 期望完成时间 */
export const TIMELINES: Bi[] = [
  { zh: '一周内', en: 'Within a week' },
  { zh: '两周内', en: 'Within two weeks' },
  { zh: '一个月内', en: 'Within a month' },
  { zh: '可以协商', en: 'Negotiable' },
];

/* ================= 服务 ================= */

export interface IService {
  id: string;
  no: string;
  en: string;
  title: Bi;
  tagline: Bi;
  for: Bi;
  problem: Bi;
  intro: Bi;
  delivers: Bi[];
  notIncluded: Bi[];
  prep: Bi[];
  process: Bi[];
  next: Bi;
  cta: Bi;
  ctaSecondary: Bi;
  open: boolean;
  major: boolean;
}

export const SERVICES: IService[] = [
  {
    id: 'site',
    no: 'A',
    en: 'Personal Digital Space',
    title: { zh: 'AI 个人网站与数字空间搭建', en: 'AI Personal Website & Digital Space' },
    tagline: { zh: '给自己一个真正属于自己的线上空间。', en: 'Give yourself an online space that is truly yours.' },
    for: {
      zh: '独立创作者、自由职业者、摄影师、视频创作者、设计师及小型个人品牌。',
      en: 'Independent creators, freelancers, photographers, video makers, designers and small personal brands.',
    },
    problem: {
      zh: '「我想拥有一个真正属于自己的网站，用来展示作品、介绍自己、记录创作、承接合作，但我不知道怎样从一个想法开始。」',
      en: '“I want a website of my own to show work, introduce myself, log my practice and take on collaborations — but I do not know where to start.”',
    },
    intro: {
      zh: '从你的个人定位和实际需求出发，梳理网站结构、页面内容和视觉方向，并借助 AI 与合适的开发工具，将其制作成可以访问、适配多种设备的数字空间。核心价值不是「帮你生成几个网页」，而是帮你建立一个有个人辨识度、可持续更新、能展示价值的线上空间。',
      en: 'Starting from your positioning and real needs, I map out the structure, pages and visual direction, then use AI and the right tooling to ship a live, multi-device digital space. The goal is not “a few web pages” — it is a distinct, updatable online home that reflects your work.',
    },
    delivers: [
      { zh: '网站信息架构与页面规划', en: 'Information architecture & page planning' },
      { zh: '个人品牌视觉与页面设计', en: 'Personal-brand visual & page design' },
      { zh: '首页、作品集、关于我、动态记录、思考文章及联系页面', en: 'Home, portfolio, about, updates, notes & contact pages' },
      { zh: 'SolHub 社区官方收录 + 专属印记，进入长期排行榜曝光', en: 'Official listing on SolHub community + badge, long-term ranking exposure' },
      { zh: '适当的动效与交互设计', en: 'Tasteful motion & interaction' },
      { zh: '手机端与桌面端适配', en: 'Mobile & desktop responsive' },
      { zh: '基础 SEO 配置', en: 'Basic SEO setup' },
      { zh: '域名接入与部署协助', en: 'Domain connection & deployment' },
      { zh: '使用说明及约定范围内的交付支持', en: 'Onboarding & agreed post-delivery support' },
    ],
    notIncluded: [
      { zh: '未确认的页面与功能不会默认包含', en: 'Unconfirmed pages / features are not included by default' },
      { zh: '无限次修改与永久免费维护', en: 'Unlimited revisions or lifetime free maintenance' },
      { zh: '域名、服务器等第三方费用默认不含（按项目约定）', en: 'Domain, hosting and other third-party costs (unless agreed)' },
    ],
    prep: [
      { zh: '想展示的内容与作品', en: 'Content & work you want to show' },
      { zh: '喜欢的网站或视觉参考', en: 'Websites / visuals you like' },
      { zh: '希望具备的主要功能（可先模糊）', en: 'Key features you want (vague is fine)' },
    ],
    process: [
      { zh: '梳理定位与页面结构', en: 'Clarify positioning & structure' },
      { zh: '确认视觉方向', en: 'Lock visual direction' },
      { zh: '逐页制作与适配', en: 'Build & adapt page by page' },
      { zh: '部署上线与使用说明', en: 'Deploy & hand over' },
    ],
    next: {
      zh: '告诉我你想呈现什么，我会先给出一版页面结构建议。',
      en: 'Tell me what you want to present, and I will come back with a proposed structure.',
    },
    cta: { zh: '了解个人网站搭建', en: 'Explore personal sites' },
    ctaSecondary: { zh: '查看案例', en: 'See cases' },
    open: true,
    major: true,
  },
  {
    id: 'brand',
    no: 'B',
    en: 'Brand & Business Collaboration',
    title: { zh: '品牌与商业合作', en: 'Brand & Business Collaboration' },
    tagline: { zh: '以持续创作的作品与内容，探讨适合的合作方式。', en: 'Ongoing work and content — let us find the right way to work together.' },
    for: {
      zh: '希望与独立创作者 IP 建立内容合作、品牌合作或联名合作的组织与个人。',
      en: 'Organizations or individuals seeking content, brand or co-branded work with an independent creator.',
    },
    problem: {
      zh: '「我想与一个持续创作数字作品与内容的个人品牌合作，但不确定适合的合作形式。」',
      en: '“I want to work with an independent creator who ships real digital work, but I am not sure what form fits best.”',
    },
    intro: {
      zh: '作为独立创作者，SolYoung 持续产出网站、数字作品与内容。品牌与商业合作是一种更轻的协作方式：基于我的内容、作品与受众，探讨适合双方的合作形式。合作方式、范围与周期在沟通中明确，不承诺任何效果指标。',
      en: 'SolYoung is an independent creator shipping websites, digital works and content. Brand collaboration is a lighter way to work together — based on my content, work and audience, we find a fit that suits both sides. Scope and timeline are agreed in writing; no performance numbers are promised.',
    },
    delivers: [
      { zh: '内容合作：在文章 / 视频内容中自然融入品牌', en: 'Content integration in articles / videos' },
      { zh: '广告与展示合作：站内展示位或内容植入', en: 'Display ads / in-content placement' },
      { zh: '联名与共创：围绕主题联合产出内容或作品', en: 'Co-branded or co-created pieces' },
      { zh: '商业授权：作品 / 视觉的授权使用', en: 'Commercial licensing of work / visuals' },
    ],
    notIncluded: [
      { zh: '不承接视频代工、剪辑或长期内容托管', en: 'No video production, editing or long-term content management' },
      { zh: '不承诺流量、转化等效果指标', en: 'No traffic or conversion guarantees' },
      { zh: '不包含账号代运营', en: 'No account management / operations' },
    ],
    prep: [
      { zh: '品牌介绍与预算预期', en: 'Brand intro & expected budget' },
      { zh: '期望的合作形式', en: 'Preferred collaboration format' },
      { zh: '大致时间窗口', en: 'Rough timeline' },
    ],
    process: [
      { zh: '介绍品牌与目标', en: 'Share brand & goals' },
      { zh: '明确合作形式与权益', en: 'Agree on format & terms' },
      { zh: '确认内容与排期', en: 'Confirm content & schedule' },
      { zh: '执行与复盘', en: 'Execute & review' },
    ],
    next: {
      zh: '发一封介绍邮件，说明你的品牌与想达成的合作，我会评估是否适合。',
      en: 'Send an intro email about your brand and the collaboration you want; I will assess the fit.',
    },
    cta: { zh: '谈谈合作可能', en: 'Discuss collaboration' },
    ctaSecondary: { zh: '查看案例', en: 'See cases' },
    open: true,
    major: false,
  },
];

/* ================= 合作流程（5 步） ================= */

export interface IProcessStep {
  no: string;
  en: string;
  title: Bi;
  body: Bi;
  input: Bi;
  output: Bi;
}

export const PROCESS_STEPS: IProcessStep[] = [
  {
    no: '01',
    en: 'Listen',
    title: { zh: '说清楚你的想法', en: 'Tell me what you have in mind' },
    body: {
      zh: '告诉我目前遇到的问题、希望实现的结果，以及最想解决的部分。',
      en: 'Describe the problem, the outcome you want, and what matters most.',
    },
    input: { zh: '你的一句话想法 / 问题描述', en: 'A one-line idea / problem statement' },
    output: { zh: '初步需求记录', en: 'Initial requirements note' },
  },
  {
    no: '02',
    en: 'Define',
    title: { zh: '一起确定范围', en: 'Define the scope together' },
    body: {
      zh: '评估需求是否可行，明确页面、功能、交付物、预算与时间预期。',
      en: 'Assess feasibility; agree on pages, features, deliverables, budget and timeline.',
    },
    input: { zh: '需求 + 参考素材', en: 'Requirements + references' },
    output: { zh: '范围与报价确认', en: 'Confirmed scope & quote' },
  },
  {
    no: '03',
    en: 'Create',
    title: { zh: '设计与制作', en: 'Design & build' },
    body: {
      zh: '根据确认的方案逐步完成内容、视觉、功能与交互。',
      en: 'Build out content, visuals, features and interactions step by step.',
    },
    input: { zh: '已确认方案', en: 'Approved plan' },
    output: { zh: '可测试的版本', en: 'A testable version' },
  },
  {
    no: '04',
    en: 'Refine',
    title: { zh: '测试与修改', en: 'Test & refine' },
    body: {
      zh: '检查核心流程，针对约定范围进行调整，确保交付符合确认要求。',
      en: 'Check core flows and adjust within the agreed scope until it matches.',
    },
    input: { zh: '测试反馈', en: 'Testing feedback' },
    output: { zh: '符合验收标准的成果', en: 'Acceptance-ready result' },
  },
  {
    no: '05',
    en: 'Deliver',
    title: { zh: '交付与后续支持', en: 'Deliver & support' },
    body: {
      zh: '交付约定的成果、访问地址及必要的使用说明。后续维护与新增功能按双方确认的范围处理。',
      en: 'Hand over the agreed result, URL and docs. Maintenance / new features follow an agreed scope.',
    },
    input: { zh: '最终成果', en: 'Final deliverable' },
    output: { zh: '交付说明 + 支持约定', en: 'Handover notes + support terms' },
  },
];

/* ================= FAQ（10 条） ================= */

export const FAQS: { q: Bi; a: Bi }[] = [
  {
    q: { zh: '我不懂技术，可以合作吗？', en: 'I am not technical — can we still work together?' },
    a: {
      zh: '可以。你不需要懂技术，只需要说清楚想实现的结果。技术方案、页面结构、部署这些部分由我来处理，你负责确认方向与内容。',
      en: 'Yes. You do not need to know the tech — just describe the result you want. I handle the technical side; you confirm direction and content.',
    },
  },
  {
    q: { zh: '我只有一个初步想法，还没有详细需求，可以先沟通吗？', en: 'I only have a rough idea, no detailed brief. Can we talk first?' },
    a: {
      zh: '可以，而且这正是最合适的开始方式。先告诉我你想解决的问题和大概想得到的结果，我会帮你把需求梳理清楚，再判断适合的实现方式。',
      en: 'Yes — that is actually the best place to start. Tell me the problem and the rough outcome; I will help clarify the brief before deciding how to build it.',
    },
  },
  {
    q: { zh: '网站可以由我自己后续更新吗？', en: 'Can I update the site myself afterwards?' },
    a: {
      zh: '取决于项目方案。大多数个人网站会包含一个你能自己更新内容的模块（如动态、文章），具体更新方式在交付时说明。涉及页面结构或功能层面的修改，一般属于后续支持范围。',
      en: 'Depends on the plan. Most personal sites include a self-updatable section (updates, notes) and I will show you how. Structural or feature changes fall under agreed post-delivery support.',
    },
  },
  {
    q: { zh: '域名和部署由谁负责？', en: 'Who handles the domain and deployment?' },
    a: {
      zh: '我会协助完成部署，并提供接入说明。域名、服务器或托管平台通常由你购买（或由我代购并单独计费），相关费用不默认包含在服务费中，以合作前约定为准。',
      en: 'I help deploy and provide setup docs. Domain / hosting are usually purchased by you (or by me and billed separately) and are not included in the service fee unless agreed.',
    },
  },
  {
    q: { zh: '可以后续增加功能吗？', en: 'Can I add features later?' },
    a: {
      zh: '可以，但新增功能属于新的范围调整，需要重新评估工作量与报价。项目开始前我们会确认一个明确的交付范围，避免在过程中无限扩大。',
      en: 'Yes, but new features are a new scope change — work and quote are re-evaluated. We agree a clear delivery scope upfront so it does not balloon mid-project.',
    },
  },
  {
    q: { zh: '如果需要复杂后端或支付系统，能否实现？', en: 'What about complex backends or payments?' },
    a: {
      zh: '需要先做技术评估。复杂后端、支付、用户账号、敏感数据、高并发等功能，取决于复杂度、数据安全要求、第三方依赖与维护成本，不默认属于标准交付范围。评估后会给你明确的可行性与成本说明。',
      en: 'Needs a technical assessment. Complex backends, payments, accounts, sensitive data or high traffic depend on complexity, security and maintenance cost — they are not part of the default scope. I will tell you clearly whether it is feasible and what it costs.',
    },
  },
  {
    q: { zh: '修改次数与交付标准如何确定？', en: 'How are revision rounds and acceptance defined?' },
    a: {
      zh: '合作开始前会约定：交付物清单、验收标准、包含的修改轮次，以及额外修改的处理方式。测试与修改阶段按约定范围进行，不会让你误以为可以无限修改。',
      en: 'Agreed upfront: deliverables, acceptance criteria, included revision rounds and how extra changes are billed. We refine within that scope so expectations stay clear.',
    },
  },
  {
    q: { zh: '如何报价和付款？', en: 'How does pricing and payment work?' },
    a: {
      zh: '个人网站类项目根据页面数量、设计要求、功能范围与部署成本评估报价；品牌合作按合作形式与范围单独报价。付款按合作前约定的节点进行，通常包含启动阶段与交付阶段。',
      en: 'Personal sites are quoted based on pages, design, features and deployment cost; brand collaborations are quoted per format and scope. Payment follows agreed milestones, typically start and delivery.',
    },
  },
  {
    q: { zh: '项目交付后是否提供维护？', en: 'Is maintenance included after launch?' },
    a: {
      zh: '交付时包含必要的使用说明与约定范围内的支持。长期维护、新增功能、安全更新等按双方确认的范围处理，不默认等于永久免费维护。',
      en: 'Delivery includes docs and agreed support. Long-term maintenance, new features and security updates are handled under a separately confirmed scope — not lifetime free maintenance by default.',
    },
  },
  {
    q: { zh: '如果需求超出当前能力范围怎么办？', en: 'What if the request is beyond your capability?' },
    a: {
      zh: '会如实告诉你。在评估阶段如果发现需求超出我的能力或合理交付范围，我会说明原因，并尽量给出可行的替代方案或建议，而不是先接下来再无法兑现。',
      en: 'I will tell you honestly. If something is beyond my ability or reasonable scope, I will explain why and offer alternatives — rather than taking it on and failing to deliver.',
    },
  },
];
