import { useNavigate, useSearchParams } from 'react-router-dom';
import { PRODUCTS, PRODUCT_TIERS, PRODUCT_TIER_META } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';
import { useLang } from '@/i18n';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

type TabKey = 'all' | (typeof PRODUCT_TIERS)[number];

export default function ProductsPage() {
  const { lang } = useLang();
  const en = lang === 'en';
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const tierParam = searchParams.get('tier');
  const activeTab: TabKey =
    tierParam && (PRODUCT_TIERS as readonly string[]).includes(tierParam)
      ? (tierParam as TabKey)
      : 'all';

  const TABS: { key: TabKey; label: string }[] = [
    { key: 'all', label: en ? 'All' : '全部' },
    ...PRODUCT_TIERS.map((t) => ({
      key: t as TabKey,
      label: en ? PRODUCT_TIER_META[t].labelEn : PRODUCT_TIER_META[t].label,
    })),
  ];

  const filtered =
    activeTab === 'all'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.tier === activeTab);

  const handleTabChange = (value: string) => {
    if (value === 'all') {
      navigate('/products');
    } else {
      navigate(`/products?tier=${encodeURIComponent(value)}`);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
      <SectionHeading
        kickerEn="All Works"
        title={en ? 'All works' : '全部作品'}
        description={
          en
            ? 'Tools, resources and independent experiments — free, in beta, and what is coming next.'
            : '数字工具、创作资源与独立实验。按分区查看：永久免费的、正在测试的，以及未来的作品。'
        }
      />

      <Tabs
        value={activeTab}
        onValueChange={handleTabChange}
        className="mt-8"
      >
        <TabsList className="h-auto gap-1 border-b border-border bg-transparent p-0">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.key}
              value={tab.key}
              className="rounded-none border-b-2 border-transparent bg-transparent px-4 py-2 text-[13px] text-muted-foreground shadow-none data-[state=active]:border-accent data-[state=active]:bg-transparent data-[state=active]:text-foreground"
            >
              {tab.label}
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
            {en ? 'Empty · Nothing here yet' : 'Empty · 该分区暂无作品'}
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {en ? 'More work is being polished — it will land here when ready.' : '更多作品正在打磨中，准备好后会第一时间上架。'}
          </p>
        </div>
      )}
    </div>
  );
}
