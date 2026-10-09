// EXPORTS: BASE, assetUrl

/**
 * 应用根路径：线上应用挂在子路径下（如 /app/app_xxx），
 * 手写路径（public 下资源、同源 fetch）一律用此变量拼接，禁止裸根路径。
 * dev 环境下 MIAODA_CLIENT_BASE_PATH 为 undefined，归一化为 '/'
 */
const BASE = (import.meta.env.MIAODA_CLIENT_BASE_PATH || '').replace(/\/$/, '') + '/';

/** 拼接 public 静态资源路径：assetUrl('images/cover.png') */
export function assetUrl(path: string): string {
  return `${BASE}${path.replace(/^\//, '')}`;
}
