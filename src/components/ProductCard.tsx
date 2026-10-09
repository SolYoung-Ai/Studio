import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { IProduct } from '@/data/products';
import ProductVisual from '@/components/ProductVisual';
import StatusBadge from '@/components/StatusBadge';

interface ProductCardProps {
  product: IProduct;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      to={`/products/${product.slug}`}
      className={cn(
        'group flex h-full flex-col border border-border bg-card transition-colors duration-300 hover:border-foreground/30',
        className,
      )}
    >
      <div className="overflow-hidden p-4 pb-0">
        <div className="transition-transform duration-300 ease-out group-hover:scale-[1.015]">
          <ProductVisual
            variant={product.cover}
            sku={product.sku}
            status={product.status}
          />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4 sm:p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
            {product.sku}
          </span>
          <StatusBadge status={product.status} />
        </div>

        <h3 className="font-display text-lg font-semibold tracking-tight">
          {product.name}
        </h3>
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
            查看详情
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
