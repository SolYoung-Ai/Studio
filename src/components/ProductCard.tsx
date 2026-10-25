import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { IProduct } from '@/data/products';
import { useLang } from '@/i18n';
import { assetUrl } from '@/lib/base';
import ProductVisual from '@/components/ProductVisual';
import StatusBadge from '@/components/StatusBadge';

interface ProductCardProps {
  product: IProduct;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const { t } = useLang();
  const hasPreview = Boolean(product.previewImage);

  return (
    <Link
      to={`/products/${product.slug}`}
      className={cn(
        'group flex h-full flex-col border border-border bg-card transition-colors duration-300 hover:border-foreground/30',
        className,
      )}
    >
      {hasPreview ? (
        <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted/30">
          <img
            src={assetUrl(product.previewImage!)}
            alt={`${product.name} 首页预览`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      ) : (
        <div className="overflow-hidden p-4 pb-0">
          <div className="transition-transform duration-300 ease-out group-hover:scale-[1.015]">
            <ProductVisual
              variant={product.cover}
              sku={product.sku}
              status={product.status}
              coverImage={product.coverImage}
            />
          </div>
        </div>
      )}

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {product.sku}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <div className="flex items-center gap-2.5">
          {product.coverImage ? (
            <img
              src={assetUrl(product.coverImage)}
              alt=""
              aria-hidden
              loading="lazy"
              className="size-7 shrink-0 rounded-sm border border-border object-cover"
            />
          ) : null}
          <h3 className="font-display text-lg font-semibold tracking-tight">
            {product.name}
          </h3>
        </div>
        <p className="line-clamp-2 flex-1 text-[13px] leading-relaxed text-muted-foreground">
          {product.summary}
        </p>

        <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
          <span className="font-mono text-sm">
            {product.purchasable ? (
              <span className="text-foreground">{product.priceLabel}</span>
            ) : (
              <span className="text-muted-foreground">{product.priceLabel}</span>
            )}
          </span>
          <span className="inline-flex items-center gap-1 text-[13px] text-foreground transition-colors group-hover:text-accent">
            {product.externalUrl ? t('works.openInUse') : t('works.viewDetail')}
            <ArrowRight
              aria-hidden
              className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
            />
          </span>
        </div>
      </div>
    </Link>
  );
}
