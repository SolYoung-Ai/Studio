// EXPORTS: ICase, CASES
import type { Bi } from '@/i18n';

export interface ICase {
  name: string;
  url: string;
  type: Bi;
  goal: Bi;
  why: Bi;
  role: Bi;
  outcome: Bi;
  experience: Bi;
  status: Bi;
  statusTone: 'accent' | 'warning' | 'muted';
  preview?: string;
  selfInitiated: boolean;
}

export const CASES: ICase[] = [
  {
    name: 'SolYoung',
    url: 'https://solyoung.top/',
    type: { zh: '个人数字空间', en: 'Personal digital space' },
    goal: {
      zh: '把分散在平台上的作品、动态与思考，收拢到一个真正属于自己的地方。',
      en: 'Gather scattered work, updates and thoughts into one place that is truly mine.',
    },
    why: {
      zh: '作为个人品牌的主阵地，它需要同时承载作品档案、内容记录与产品入口，并且能持续更新。',
      en: 'A personal brand needs a home that holds archive, content and product entry, and keeps getting updated.',
    },
    role: {
      zh: '信息架构、视觉设计、开发与部署，以及持续的内容与功能迭代。',
      en: 'Information architecture, visual design, development, deployment and ongoing iteration.',
    },
    outcome: {
      zh: '一个可长期生长的个人网站：数字档案式排版、独立产品子站、自动更新的 now 时间线。',
      en: 'A long-term growing site: archive-style layout, independent product sub-sites, an auto-updating now timeline.',
    },
    experience: {
      zh: '访问 solyoung.top，浏览作品档案与最新动态。',
      en: 'Visit solyoung.top to browse the archive and latest updates.',
    },
    status: { zh: '持续运营', en: 'Live & growing' },
    statusTone: 'accent',
    preview: 'products/solyoung-preview.png',
    selfInitiated: true,
  },
  {
    name: 'My.OS',
    url: 'https://solyoung.top/OS/',
    type: { zh: '创作系统', en: 'Creative OS' },
    goal: {
      zh: '把记录、思考、创作、发布和归档收拢在同一个入口，减少想法散落的焦虑。',
      en: 'Gather notes, thinking, creating, publishing and archiving in one place — less scattered anxiety.',
    },
    why: {
      zh: '自己创作时最缺的是一个能承载整个流程的轻量系统，而不是又一个笔记软件。',
      en: 'What I lack most is a light system that holds the whole workflow — not another note app.',
    },
    role: { zh: '产品构思、视觉设计、开发与迭代。', en: 'Product concept, visual design, development and iteration.' },
    outcome: {
      zh: '一套在线可用的个人创作操作系统，免费开放使用。',
      en: 'A usable online personal creative OS, free to use.',
    },
    experience: {
      zh: '打开即用：记录想法、整理创作、发布动态。',
      en: 'Open and use: capture ideas, organize work, publish updates.',
    },
    status: { zh: '已上线', en: 'Live' },
    statusTone: 'accent',
    preview: 'products/my-os-preview.webp',
    selfInitiated: true,
  },
  {
    name: 'Verity',
    url: 'https://solyoung.top/Verity/',
    type: { zh: '测试体验产品', en: 'Quiz experience' },
    goal: {
      zh: '把 13 套人格测试收拢在一个站点，让「想了解自己」的人一步就能开始。',
      en: 'Bundle 13 personality tests on one site so curious people can start in one click.',
    },
    why: {
      zh: '测试类内容分散在各处，体验不一。想做一个结构统一、结果即时可见的集合站。',
      en: 'Tests are scattered with inconsistent UX. I wanted a unified site with instant results.',
    },
    role: { zh: '产品结构、测试流程、视觉与开发。', en: 'Product structure, test flow, visual design and development.' },
    outcome: {
      zh: '在线可用的测试集合站，选一套就能开始测，结果即时生成，免费开放。',
      en: 'An online test hub — pick one, start, get instant results. Free.',
    },
    experience: {
      zh: '打开即测：选一套人格测试，完成作答，即时看到结果。',
      en: 'Pick a test, answer, see results instantly.',
    },
    status: { zh: '已上线 · 免费', en: 'Live · Free' },
    statusTone: 'accent',
    preview: 'products/verity-preview.webp',
    selfInitiated: true,
  },
  {
    name: 'CamSim',
    url: 'https://solyoung.top/CamSim/',
    type: { zh: '交互工具', en: 'Interactive tool' },
    goal: {
      zh: '让刚入门的人不再纠结光圈、快门、ISO 怎么设，从想拍的效果反推参数。',
      en: 'Help beginners stop guessing aperture/shutter/ISO — work backwards from the look they want.',
    },
    why: {
      zh: '自己学习摄影时发现参数推导是最难跨过的坎，需要一个能动手试的工具。',
      en: 'When I learned photography, the hardest part was deriving settings. I needed something hands-on.',
    },
    role: { zh: '交互逻辑、参数算法、界面设计与开发。', en: 'Interaction logic, parameter math, UI design and development.' },
    outcome: {
      zh: '按拍摄目标反推摄影参数的在线工具，免费开放使用。',
      en: 'An online tool that back-derives camera settings from a shooting goal. Free.',
    },
    experience: {
      zh: '告诉它你想拍成什么样，得到一组可参考的光圈 / 快门 / ISO。',
      en: 'Describe the look you want; get aperture / shutter / ISO to try.',
    },
    status: { zh: '已上线 · 免费', en: 'Live · Free' },
    statusTone: 'accent',
    preview: 'products/camsim-preview.webp',
    selfInitiated: true,
  },
];
