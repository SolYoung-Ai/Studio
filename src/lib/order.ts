// EXPORTS: generateOrderRef, buildOrderSummaryText, copyText, formatPrice

import { ORDER_PREFIX } from '@/data/payments';

/** 订单参考号字符集（去掉易混淆的 I/O/0/1） */
const REF_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';

/**
 * 生成临时订单参考号：SY-YYYYMMDD-XXXX。
 * 静态站点中该编号仅作为人工核验的临时参考，不构成服务端已登记的正式订单。
 */
export function generateOrderRef(): string {
  const now = new Date();
  const ymd =
    `${now.getFullYear()}` +
    `${String(now.getMonth() + 1).padStart(2, '0')}` +
    `${String(now.getDate()).padStart(2, '0')}`;
  let code = '';
  for (let i = 0; i < 4; i += 1) {
    code += REF_CHARS[Math.floor(Math.random() * REF_CHARS.length)];
  }
  return `${ORDER_PREFIX}-${ymd}-${code}`;
}

export interface IOrderSummaryInput {
  orderRef: string;
  productName: string;
  sku: string;
  qty: number;
  priceLabel: string;
  contact: string;
  modeLabel: string;
}

/** 生成可复制的订单摘要文本 */
export function buildOrderSummaryText(input: IOrderSummaryInput): string {
  const lines = [
    `订单参考号：${input.orderRef}`,
    `商品名称：${input.productName}`,
    `商品编号：${input.sku}`,
    `购买数量：${input.qty}`,
    `商品金额：${input.priceLabel}`,
    `联系方式：${input.contact}`,
    `当前模式：${input.modeLabel}`,
  ];
  return lines.join('\n');
}

/** 复制文本到剪贴板（带降级方案），成功返回 true */
export async function copyText(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      const ok = document.execCommand('copy');
      ta.remove();
      return ok;
    } catch {
      return false;
    }
  }
}

/** 金额格式化：9.9 -> ¥9.90 */
export function formatPrice(value: number): string {
  return `¥${value.toFixed(2)}`;
}
