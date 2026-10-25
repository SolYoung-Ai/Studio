// EXPORTS: IProductStatus, IProduct, IProductTier, PRODUCT_TIER_META, PRODUCTS, PRODUCT_TIERS, getProductBySlug

/**
 * 商品统一配置 —— 数据驱动，站长只需修改此文件（或替换封面视觉变体）即可上架/下架商品。
 * 所有价格、状态、权益必须真实可交付，未确定的信息一律不编造。
 */

export type IProductStatus = 'live' | 'testing' | 'making' | 'planning' | 'demo';

/** 分区：free 永久免费 / paid 付费 / beta 测试中（完善后可能转付费） */
export type IProductTier = 'free' | 'paid' | 'beta';

export const PRODUCT_TIER_META: Record<
  IProductTier,
  { label: string; labelEn: string }
> = {
  free: { label: '免费', labelEn: 'FREE' },
  paid: { label: '付费', labelEn: 'PAID' },
  beta: { label: '测试', labelEn: 'BETA' },
};

export interface IProductStatusMeta {
  label: string;
  labelEn: string;
  /** 状态徽章视觉基调：muted 中性 / accent 强调 / warning 警示 */
  tone: 'muted' | 'accent' | 'warning';
}

export const PRODUCT_STATUS_META: Record<IProductStatus, IProductStatusMeta> = {
  live: { label: '已上线', labelEn: 'LIVE', tone: 'accent' },
  testing: { label: '测试中', labelEn: 'IN TESTING', tone: 'warning' },
  making: { label: '制作中', labelEn: 'IN PROGRESS', tone: 'muted' },
  planning: { label: '规划中', labelEn: 'PLANNED', tone: 'muted' },
  demo: { label: '演示商品', labelEn: 'DEMO', tone: 'warning' },
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
  /** 所属分区：free 免费 / paid 付费 / beta 测试 */
  tier: IProductTier;
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
  /** 封面视觉变体（无真实封面图时使用） */
  cover: 'invite-card' | 'placeholder';
  /** 真实封面图（public 下相对路径）；有值时优先用图片 */
  coverImage?: string;
  /** 工具首页实时截图（横版预览图，public 下相对路径）；有值时卡片主视觉用它 */
  previewImage?: string;
  /** 外链地址（已有工具直接跳转主站对应页）；有值时主按钮为"打开使用" */
  externalUrl?: string;
}

export const PRODUCTS: IProduct[] = [
  {
    slug: 'my-os',
    sku: 'SY-OS-001',
    name: 'My.OS 个人创作操作系统',
    category: '工具',
    categoryEn: 'Tools',
    tier: 'free',
    status: 'live',
    priceLabel: '免费',
    price: null,
    version: '1.0',
    summary: '记录、思考、创作、发布、归档——把日常想法组织成自己的系统。',
    description:
      'My.OS 是一套个人创作操作系统，把记录、思考、创作、发布和归档收拢在同一个入口。它不追求一次性做完，而是随着你的使用慢慢长成自己的样子。',
    includes: [
      '记录与思考的统一入口',
      '作品归档与发布的个人主页',
      '免费在线使用，无需注册',
    ],
    audience: '有持续记录与创作习惯、希望把散落的想法整理成个人系统的人。',
    usage: '浏览器直接打开即可使用，无需注册账号。',
    delivery: '在线工具，打开即用。',
    license: '免费使用。',
    updatePolicy: '随主站持续迭代更新。',
    limitations: ['免费在线使用', '个人数据保存在本地浏览器'],
    purchaseNotes: [],
    refundPolicy: '免费工具，不涉及交易。',
    purchasable: false,
    demoMode: false,
    maxQty: 1,
    cover: 'placeholder',
    coverImage: 'products/my-os.webp',
    previewImage: 'products/my-os-preview.webp',
    externalUrl: 'https://solyoung.top/os/',
  },
  {
    slug: 'verity',
    sku: 'SY-VERITY-001',
    name: 'Verity 人格测试集合站',
    category: '工具',
    categoryEn: 'Tools',
    tier: 'free',
    status: 'live',
    priceLabel: '免费',
    price: null,
    version: '2.0',
    summary: '聚合 13 套人格测试的在线测试集合站，选一套就能开始测。',
    description:
      'Verity 把 13 套人格测试收拢在一个站点，选一套就能开始，结果即时可见。适合想了解自己、或单纯喜欢做人格测试的人。',
    includes: ['13 套人格测试在线作答', '即时生成结果', '免费使用，无需注册'],
    audience: '想了解自己、或喜欢做人格测试的人。',
    usage: '浏览器打开即测，无需注册账号。',
    delivery: '在线工具。',
    license: '免费使用。',
    updatePolicy: '随主站持续更新测试内容。',
    limitations: ['免费在线使用', '结果仅供参考娱乐'],
    purchaseNotes: [],
    refundPolicy: '免费工具，不涉及交易。',
    purchasable: false,
    demoMode: false,
    maxQty: 1,
    cover: 'placeholder',
    coverImage: 'products/verity.webp',
    previewImage: 'products/verity-preview.webp',
    externalUrl: 'https://solyoung.top/Verity/',
  },
  {
    slug: 'camsim',
    sku: 'SY-CAMSIM-001',
    name: 'CamSim 相机参数模拟器',
    category: '工具',
    categoryEn: 'Tools',
    tier: 'free',
    status: 'live',
    priceLabel: '免费',
    price: null,
    version: '1.0',
    summary: '从拍摄目标反向推导摄影参数的决策工具。',
    description:
      '相机参数模拟器：你告诉它你想拍成什么样，它帮你推导出光圈、快门、ISO 等参数，帮刚入门的人不再纠结拨轮怎么设。',
    includes: ['按拍摄目标反推光圈 / 快门 / ISO', '摄影参数决策辅助', '免费在线使用'],
    audience: '刚入门、不确定参数怎么设的摄影学习者。',
    usage: '浏览器打开即可使用，无需注册。',
    delivery: '在线工具。',
    license: '免费使用。',
    updatePolicy: '随主站持续迭代。',
    limitations: ['免费在线使用', '参数结果仅供参考'],
    purchaseNotes: [],
    refundPolicy: '免费工具，不涉及交易。',
    purchasable: false,
    demoMode: false,
    maxQty: 1,
    cover: 'placeholder',
    coverImage: 'products/camsim.webp',
    previewImage: 'products/camsim-preview.webp',
    externalUrl: 'https://solyoung.top/CamSim/',
  },
];

export const PRODUCT_TIERS: IProductTier[] = ['free', 'paid', 'beta'];

export function getProductBySlug(slug: string): IProduct | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}
