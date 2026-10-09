// EXPORTS: IPaymentMethod, DEMO_MODE, ORDER_PREFIX, PAYMENT_METHODS, getPaymentMethods

/**
 * 支付与订单模式统一配置 —— 演示模式 / 正式模式在这里统一管理，避免页面间状态矛盾。
 *
 * 演示模式（DEMO_MODE = true）：
 *  - 不进行真实付款；不发放真实邀请码；不显示虚假的支付成功界面。
 *  - 用户可体验结算页面、订单参考号生成与复制。
 *
 * 正式模式（DEMO_MODE = false）：
 *  - 必须同时满足：真实收款二维码已配置（qrImage 非空）+ 价格与商品说明已确认。
 *  - 用户实际付款后需要人工核验，只有人工确认收款后才可交付权益。
 *  - 交付状态不得由前端按钮直接决定。
 */
export const DEMO_MODE = true;
export const ORDER_PREFIX = 'SY';

export interface IPaymentMethod {
  id: 'wechat' | 'alipay';
  name: string;
  label: string;
  /** 是否已配置真实收款二维码；未配置时必须禁用并显示占位，禁止展示假二维码 */
  configured: boolean;
  /** 真实收款码图片（public 下相对路径）；未配置为 null */
  qrImage: string | null;
  /** 收款说明 */
  note: string;
}

export const PAYMENT_METHODS: IPaymentMethod[] = [
  {
    id: 'wechat',
    name: '微信支付',
    label: '微信扫码支付',
    configured: false,
    qrImage: null,
    note: '请上传真实的微信收款二维码',
  },
  {
    id: 'alipay',
    name: '支付宝',
    label: '支付宝扫码支付',
    configured: false,
    qrImage: null,
    note: '请上传真实的支付宝收款二维码',
  },
];

export function getPaymentMethods(): IPaymentMethod[] {
  return PAYMENT_METHODS.filter((m) => (DEMO_MODE ? true : m.configured));
}
