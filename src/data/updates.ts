// EXPORTS: IUpdate, UPDATES

/**
 * 产品更新日志 —— 数据驱动。
 * isSample = true 的条目为开发示例，页面会明确标注，不伪装成真实已发生的更新。
 * 正式上线前，请站长把示例条目替换为真实更新记录；没有真实记录时页面显示空状态。
 */
export interface IUpdate {
  id: string;
  /** 日期 YYYY-MM-DD */
  date: string;
  /** 关联产品名称 */
  product: string;
  /** 更新内容 */
  content: string;
  /** 是否为开发示例（页面显示「示例」标签） */
  isSample: boolean;
}

export const UPDATES: IUpdate[] = [
  {
    id: 'u-001',
    date: '2026-10-10',
    product: 'SolYoung Studio',
    content: '网站首个版本搭建完成，商品展示、商品详情、结算演示与人工核验流程上线（开发中示例）。',
    isSample: true,
  },
  {
    id: 'u-002',
    date: '2026-10-10',
    product: 'SolYoung Studio 内测邀请码',
    content: '新增演示商品 SY-TEST-001，用于验证购买与邀请码交付流程（开发中示例）。',
    isSample: true,
  },
];
