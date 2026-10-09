import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { UPDATES } from '@/data/updates';
import SectionHeading from '@/components/SectionHeading';
import { Button } from '@/components/ui/button';
import UpdateList from '@/components/UpdateList';

export default function UpdatesSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
      <div className="flex items-end justify-between gap-4">
        <SectionHeading
          index="03"
          kickerEn="Updates"
          title="最近更新"
          description="产品每一次真实的改进，都记录在这里。"
        />
        <Button asChild variant="ghost" size="sm" className="mb-1 shrink-0">
          <Link to="/updates">
            查看全部
            <ArrowRight aria-hidden className="ml-1 size-3.5" />
          </Link>
        </Button>
      </div>
      <div className="mt-8">
        <UpdateList items={UPDATES.slice(0, 3)} />
      </div>
    </section>
  );
}
