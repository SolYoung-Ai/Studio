// EXPORTS: IProductStatus, IProduct, PRODUCT_STATUS_META, PRODUCTS, PRODUCT_CATEGORIES, getProductBySlug

/**
 * 商品统一配置 —— 数据驱动，站长只需修改此文件（或替换封面视觉变体）即可上架/下架商品。
 * 所有价格、状态、权益必须真实可交付，未确定的信息一律不编造。
 */

export type IProductStatus = 'onsale' | 'demo' | 'making' | 'planning';

export interface IProductStatusMeta {
  label: string;
  labelEn: string;
  /** 状态徽章视觉基调：muted 中性 / accent 强调 / warning 警示 */
  tone: 'muted' | 'accent' | 'warning';
}

export const PRODUCT_STATUS_META: Record<IProductStatus, IProductStatusMeta> = {
  onsale: { label: '在售', labelEn: 'ON SALE', tone: 'accent' },
  demo: { label: '演示商品', labelEn: 'DEMO', tone: 'warning' },
  making: { label: '制作中', labelEn: 'IN PROGRESS', tone: 'muted' },
  planning: { label: '规划中', labelEn: 'PLANNED', tone: 'muted' },
};

export interface IProduct {
  /** 路由 slug：/products/:slug */
  slug: string;
  /** 商品编号（档案编号） */
  sku: string;
  name: string;
  /** 分类（中文） */
  category: string;
  /** 分类（英文档案标签） */
  categoryEn: string;
  status: IProductStatus;
  /** 价格文案；未定价用 '待定' */
  priceLabel: string;
  /** 价格数值（元），用于结算金额计算；null 表示不可购买 */
  price: number | null;
  version: string;
  /** 一句话说明它解决什么问题 */
  summary: string;
  /** 它是什么 */
  description: string;
  /** 你将获得什么 */
  includes: string[];
  /** 适合谁使用 */
  audience: string;
  /** 如何使用 */
  usage: string;
  /** 交付方式 */
  delivery: string;
  /** 授权范围 */
  license: string;
  /** 更新策略 */
  updatePolicy: string;
  /** 使用限制 */
  limitations: string[];
  /** 购买须知 */
  purchaseNotes: string[];
  /** 退款及售后规则 */
  refundPolicy: string;
  /** 是否允许购买 */
  purchasable: boolean;
  /** 是否处于演示模式 */
  demoMode: boolean;
  /** 限购数量（邀请码类默认 1） */
  maxQty: number;
  /** 封面视觉变体 */
  cover: 'invite-card' | 'placeholder';
}

export const PRODUCTS: IProduct[] = [
  {
    slug: 'sy-test-001',
    sku: 'SY-TEST-001',
    name: 'SolYoung Studio 内测邀请码',
    category: '邀请码',
    categoryEn: 'Early Access',
    status: 'demo',
    priceLabel: '¥9.90',
    price: 9.9,
    version: '0.1.0',
    summary: '一次围绕数字作品与原创工具的内测体验，用于测试 SolYoung Studio 的购买与邀请码交付流程。',
    description:
      '该商品用于测试 SolYoung Studio 的购买与邀请码交付流程。正式销售前，将明确可兑换的产品、使用权限、有效期限和相关限制。具体权益以最终发布的商品说明为准。',
    includes: [
      '人工核验后交付一枚内测邀请码（当前演示模式不发放真实邀请码）',
      '进入 SolYoung Studio 内测讨论与反馈渠道（正式上线后开放）',
    ],
    audience:
      '希望提前体验 SolYoung Studio 数字工具与创作资源的早期用户；也用于验证购买、付款与人工核验流程是否顺畅。',
    usage:
      '购买并完成人工核验后，将收到邀请码与使用说明。按说明在对应入口兑换即可。所需工具与步骤将在正式上线前随商品说明一并公布。',
    delivery: '人工核验确认收款后，通过官方客服渠道发送邀请码。',
    license: '内测邀请码仅供本人使用，不得转售或公开传播（正式规则以上线后的商品说明为准）。',
    updatePolicy: '邀请码对应的产品权益以上线时公布的说明为准，当前版本不承诺额外更新。',
    limitations: ['演示模式不发放真实邀请码', '限购 1 个', '当前仅用于流程测试，不代表最终售价或权益'],
    purchaseNotes: [
      '当前为演示商品，不会产生真实收款，也不会发放真实邀请码。',
      '示例价格 ¥9.90 仅用于测试界面，不代表最终的实际售价。',
      '正式销售前，具体权益、有效期限与相关限制将以最终发布的商品说明为准。',
    ],
    refundPolicy:
      '演示模式不涉及真实交易，不适用退款。正式上线后，未核验交付的订单支持申请退款；已交付邀请码的订单按届时公布的售后规则处理。',
    purchasable: true,
    demoMode: true,
    maxQty: 1,
    cover: 'invite-card',
  },
  {
    slug: 'ai-resource-pack',
    sku: 'SY-ASSET-001',
    name: 'AI 创作资源包',
    category: '资源',
    categoryEn: 'Resources',
    status: 'making',
    priceLabel: '待定',
    price: null,
    version: '—',
    summary: '一份关于 AI 创作的可交付资源合集。暂不开放购买。',
    description:
      '该资源包正在制作中，暂不开放购买。只有实际准备好可交付的内容之后，才会改为在售。完整说明将在正式上线前补充。',
    includes: [],
    audience: '待补充',
    usage: '待补充',
    delivery: '待补充',
    license: '待补充',
    updatePolicy: '待补充',
    limitations: ['暂不开放购买', '内容与价格未确定'],
    purchaseNotes: ['制作完成并确认可交付后，才会开放购买。'],
    refundPolicy: '暂不适用（未开放购买）。',
    purchasable: false,
    demoMode: false,
    maxQty: 1,
    cover: 'placeholder',
  },
  {
    slug: 'pro-tools-license',
    sku: 'SY-TOOL-001',
    name: '数字工具 Pro 授权',
    category: '工具',
    categoryEn: 'Tools',
    status: 'planning',
    priceLabel: '待定',
    price: null,
    version: '—',
    summary: '未来可能提供的高级工具授权。仅作规划展示。',
    description:
      '仅展示未来可能提供的高级工具授权方向。当前不提供任何具体功能、价格或购买入口，不会虚构不存在的高级功能。',
    includes: [],
    audience: '待补充',
    usage: '待补充',
    delivery: '待补充',
    license: '待补充',
    updatePolicy: '待补充',
    limitations: ['仅规划展示，不开放购买', '不承诺具体功能与时间表'],
    purchaseNotes: ['正式推出前不会开放任何购买入口。'],
    refundPolicy: '暂不适用（未开放购买）。',
    purchasable: false,
    demoMode: false,
    maxQty: 1,
    cover: 'placeholder',
  },
];

export const PRODUCT_CATEGORIES = ['全部', '邀请码', '资源', '工具'] as const;
export type IProductCategory = (typeof PRODUCT_CATEGORIES)[number];

export function getProductBySlug(slug: string): IProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
