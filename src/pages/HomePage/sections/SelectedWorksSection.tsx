import { PRODUCTS } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import SectionHeading from '@/components/SectionHeading';

export default function SelectedWorksSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <SectionHeading
        index="01"
        kickerEn="Selected Works"
        title="精选作品"
        description="从一个想法开始，直到它成为可以使用的东西。"
      />
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
}
