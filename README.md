# SolYoung Studio

把想法变成可以使用的东西。· DIGITAL WORKS BY SOLYOUNG

由独立创作者 SolYoung 持续创造、实验、迭代和销售数字作品的独立工作室网站。继承 [solyoung.top](https://solyoung.top/) 的数字档案室视觉语言（暖白 `#F4F0E7` / 墨色 `#1D1A15` / 橙点缀 `#E87028`、Archivo + Noto Sans SC、噪点纹理、深浅双主题）。

## 页面

`/` 首页 · `/products` 全部商品 · `/products/:slug` 商品详情 · `/checkout` 结算与二维码收款 · `/purchase-guide` 购买须知 · `/faq` 常见问题 · `/privacy` 隐私说明 · `/terms` 服务条款 · `/contact` 联系与人工核验 · `/updates` 产品更新日志

## 技术栈

React 19 + Vite + TypeScript + Tailwind v4 + shadcn/ui + react-router-dom 7（BrowserRouter，basename 由构建期 `MIAODA_CLIENT_BASE_PATH` 注入）。

## 本地开发

```bash
npm install
npm run dev -- --port 34567
```

## 生产构建

默认走妙搭部署协议（`dist/output` + `dist/output_resource`）。部署到 GitHub Pages（子路径 `/Studio/`）：

```bash
MIAODA_CLIENT_BASE_PATH=/Studio/ npm run build
# 合并产物到 docs/，并生成 404.html 供 SPA 深链刷新回退：
mkdir -p docs && cp -r dist/output/* docs/ && cp -r dist/output_resource/assets docs/assets
rm -f docs/routes.json && cp docs/index.html docs/404.html
```

仓库根目录的 `docs/` 即 GitHub Pages 发布目录（Settings → Pages → Deploy from a branch → `main` / `/docs`）。

## 数据配置（统一入口，改配置即更新站点，勿在页面中硬编码）

- `src/data/site.ts` —— 工作室名称、主站地址、站长邮箱、微信客服二维码、核验文案
- `src/data/products.ts` —— 商品编号/名称/分类/价格/状态/交付方式/售后说明
- `src/data/payments.ts` —— `DEMO_MODE`、`ORDER_PREFIX`、微信/支付宝收款方式（二维码未配置前自动禁用并显示占位）
- `src/data/updates.ts` —— 产品更新日志（当前条目为标注「示例」的开发预览）
- `src/data/faqs.ts` —— 常见问题

## 交易边界

静态站点，无服务端存储：不接入在线支付 API、不生成假二维码、不模拟支付成功、不自动发码。真实收款码、客服二维码、正式价格与真实更新记录配置完成后，由站长手动关闭 `DEMO_MODE` 再正式销售。

© 2026 SolYoung Studio
