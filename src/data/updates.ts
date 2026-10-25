// EXPORTS: IUpdate, UPDATES

/**
 * SolYoung Studio 本站更新日志。
 * 只记录本站改动，不再同步主站其他产品。
 */
export interface IUpdate {
  id: string;
  /** 日期 YYYY-MM-DD */
  date: string;
  /** 更新内容 */
  content: string;
}

export const UPDATES: IUpdate[] = [
  {
    id: 'u-2026-10-16-home-reduce',
    date: '2026-10-16',
    content:
      '首页信息密度精简：Hero 副标题缩成一行，服务卡从 6 栏砍到 2 栏，案例区改为横向滑动卡片，流程区改为横向流程图。更新日志页改为只记录本站改动。',
  },
  {
    id: 'u-2026-10-10-launch',
    date: '2026-10-10',
    content:
      'SolYoung Studio 正式上线，托管于 solyoung.top/studio/。以个人工作室身份提供 AI 个人网站搭建与品牌商业合作。',
  },
];
