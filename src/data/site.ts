// EXPORTS: ISiteConfig, SITE_CONFIG

/**
 * 站点统一配置 —— 站长只需修改此文件即可更新全站信息。
 * 真实收款二维码、客服二维码与联系方式由站长后续提供后在此配置。
 */
export interface ISiteConfig {
  /** 工作室名称 */
  studioName: string;
  /** 中文标语 */
  taglineZh: string;
  /** 英文标语 */
  taglineEn: string;
  /** 主站地址（个人创作主站） */
  mainSiteUrl: string;
  /** 主理人 */
  ownerName: string;
  /** 站长邮箱（原站 solyoung.top 公示邮箱，正式上线前请站长确认） */
  ownerEmail: string;
  /** 微信客服二维码图片（public 下相对路径）；未配置为 null，页面显示占位 */
  wechatContactQr: string | null;
  /** 微信客服 ID */
  wechatId: string;
  /** 人工核验渠道说明 */
  verificationNote: string;
}

export const SITE_CONFIG: ISiteConfig = {
  studioName: 'SolYoung Studio',
  taglineZh: '把想法变成可以使用的东西。',
  taglineEn: 'IDEAS, MADE TANGIBLE.',
  mainSiteUrl: 'https://solyoung.top/',
  ownerName: 'SolYoung',
  ownerEmail: 'soyoang@outlook.com',
  wechatContactQr: 'wechat-qr.jpg',
  wechatId: 'solyoung-ai',
  verificationNote:
    '本页面无法自动确认转账。请将订单参考号、商品名称及必要的付款信息发送给官方客服，核验通过后按商品说明交付相应权益。',
};
