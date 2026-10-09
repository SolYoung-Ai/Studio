import { useNavigate, useSearchParams } from 'react-router-dom';
import {
  PRODUCTS,
  PRODUCT_CATEGORIES,
  type IProductCategory,
} from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProductsPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const catParam = searchParams.get('cat');
  const activeCat: IProductCategory = (
    PRODUCT_CATEGORIES as readonly string[]
  ).includes(catParam ?? '')
    ? (catParam as IProductCategory)
    : '全部';

  const filtered =
    activeCat === '全部'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCat);

  const handleTabChange = (value: string) => {
    if (value === '全部') {
      navigate('/products');
    } else {
      navigate(`/products?cat=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <SectionHeading
        kickerEn="All Works"
        title="全部作品"
        description="数字工具、创作资源与独立实验。所有状态与价格以商品详情页为准。"
      />

      <Tabs
        value={activeCat}
        onValueChange={handleTabChange}
        className="mt-8"
      >
        <TabsList className="h-auto gap-1 border-b border-border bg-transparent p-0">
          {PRODUCT_CATEGORIES.map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 text-[13px] text-muted-foreground shadow-none data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-foreground"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {filtered.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-8 border border-dashed border-border p-10 text-center">
          <div className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Empty · 该分类暂无作品
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            新作品正在制作中，敬请期待。
          </p>
        </div>
      )}
    </div>
  );
}
