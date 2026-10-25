import { Link, useNavigate, useParams } from 'react-router-dom';
import { ArrowRight, Check, ChevronRight } from 'lucide-react';
import { getProductBySlug, PRODUCTS } from '@/data/products';
import { DEMO_MODE } from '@/data/payments';
import { UPDATES } from '@/data/updates';
import { useLang } from '@/i18n';
import { assetUrl } from '@/lib/base';
import ProductVisual from '@/components/ProductVisual';
import StatusBadge from '@/components/StatusBadge';
import UpdateList from '@/components/UpdateList';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

function hasContent(value: string): boolean {
  return value.trim() !== '' && value.trim() !== '待补充';
}

interface IBlock {
  kicker: string;
  body: string;
  list?: string[];
}

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { t } = useLang();
  const product = slug ? getProductBySlug(slug) : undefined;

  if (!product) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-24 text-center sm:px-6">
        <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          404 · Product not found
        </div>
        <p className="mt-3 text-sm text-muted-foreground">没有找到该商品，它可能已被移除或编号有误。</p>
        <Button asChild variant="outline" className="mt-6">
          <Link to="/products">返回商品列表</Link>
        </Button>
      </div>
    );
  }

  const blocks: IBlock[] = [
    { kicker: '它是什么', body: product.description },
    { kicker: '你将获得什么', body: '', list: product.includes },
    { kicker: '适合谁使用', body: product.audience },
    { kicker: '如何使用', body: product.usage },
    { kicker: '交付方式', body: product.delivery },
    { kicker: '授权范围', body: product.license },
    { kicker: '更新策略', body: product.updatePolicy },
    { kicker: '使用限制', body: '', list: product.limitations },
    { kicker: '购买须知', body: '', list: product.purchaseNotes },
    { kicker: '退款及售后', body: product.refundPolicy },
  ].filter(
    (b) =>
      (b.body !== '' && hasContent(b.body)) || (b.list !== undefined && b.list.length > 0),
  );

  const related = PRODUCTS.filter((p) => p.slug !== product.slug).slice(0, 2);
  const inDemo = DEMO_MODE || product.demoMode;

  return (
    <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      {/* 面包屑 */}
      <nav aria-label="面包屑" className="flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.1em] text-muted-foreground">
        <Link to="/" className="transition-colors hover:text-foreground">首页</Link>
        <ChevronRight aria-hidden className="size-3" />
        <Link to="/products" className="transition-colors hover:text-foreground">产品</Link>
        <ChevronRight aria-hidden className="size-3" />
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* 商品主体 */}
      <div className="mt-8 grid gap-10 lg:grid-cols-[1.05fr_1fr]">
        <div className="lg:sticky lg:top-24 lg:self-start">
          {product.previewImage ? (
            <div className="max-w-2xl overflow-hidden border border-border bg-muted/30">
              <img
                src={assetUrl(product.previewImage)}
                alt={`${product.name} 首页预览`}
                className="aspect-[16/10] w-full object-cover object-top"
              />
            </div>
          ) : (
            <ProductVisual
              variant={product.cover}
              sku={product.sku}
              status={product.status}
              coverImage={product.coverImage}
              className="max-w-2xl"
            />
          )}
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span>{product.sku}</span>
              <span aria-hidden>·</span>
              <span>{product.categoryEn}</span>
              <StatusBadge status={product.status} />
            </div>
            <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              {product.name}
            </h1>
            <div className="flex items-baseline gap-4 border-y border-border py-3">
              <span className="font-mono text-xl text-foreground">
                {product.priceLabel}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground">
                Version {product.version}
              </span>
            </div>
            <p className="text-[15px] leading-relaxed text-foreground/85">{product.summary}</p>
          </div>

          {/* 购买入口 */}
          <div className="space-y-3">
            {product.externalUrl ? (
              <>
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href={product.externalUrl} target="_blank" rel="noopener noreferrer">
                    {t('works.openInUse')}
                    <ArrowRight aria-hidden className="ml-1.5 size-4" />
                  </a>
                </Button>
                <div className="flex items-start gap-2 border border-border bg-muted/40 px-3 py-2.5 text-[13px] leading-relaxed text-muted-foreground">
                  <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                  <span>{t('product.openNote')}</span>
                </div>
              </>
            ) : product.purchasable ? (
              <>
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  onClick={() => navigate(`/checkout?product=${product.slug}`)}
                >
                  {product.demoMode ? '体验购买流程' : '立即购买'}
                  <ArrowRight aria-hidden className="ml-1.5 size-4" />
                </Button>
                {inDemo ? (
                  <div className="flex items-start gap-2 border border-warning/40 bg-warning/5 px-3 py-2.5 text-[13px] leading-relaxed text-foreground/90">
                    <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-warning" />
                    <span>
                      当前为演示模式，不会产生真实收款，也不会发放真实邀请码。示例价格仅用于测试界面，不代表最终售价。
                    </span>
                  </div>
                ) : null}
              </>
            ) : (
              <div className="flex items-start gap-2 border border-border bg-muted/40 px-3 py-2.5 text-[13px] leading-relaxed text-muted-foreground">
                <span aria-hidden className="mt-1 size-1.5 shrink-0 rounded-full bg-muted-foreground/60" />
                <span>
                  {product.status === 'testing'
                    ? '正在内测，暂未开放。正式开放后会在这里更新入口与使用方式。'
                    : '暂不开放。完整说明与权益将在正式上线前补充。'}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 商品信息模块 */}
      <div className="mt-14 border-t border-border">
        <div className="divide-y divide-border">
          {blocks.map((block) => (
            <div
              key={block.kicker}
              className="grid gap-3 py-6 sm:grid-cols-[180px_1fr] sm:gap-8"
            >
              <div className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {block.kicker}
              </div>
              <div>
                {block.body ? (
                  <p className="max-w-2xl text-[15px] leading-relaxed text-foreground/85">
                    {block.body}
                  </p>
                ) : null}
                {block.list && block.list.length > 0 ? (
                  <ul className="max-w-2xl space-y-2.5">
                    {block.list.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] leading-relaxed text-foreground/85">
                        <Check aria-hidden className="mt-1 size-3.5 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 相关作品与最近更新 */}
      <div className="mt-14 grid gap-10 border-t border-border pt-10 lg:grid-cols-2">
        <div>
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            相关作品 · Related
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
            最近更新 · Updates
          </div>
          <UpdateList items={UPDATES.slice(0, 2)} />
        </div>
      </div>
    </div>
  );
}
