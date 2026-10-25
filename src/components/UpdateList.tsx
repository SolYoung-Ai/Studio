import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import type { IUpdate } from '@/data/updates';

interface UpdateListProps {
  items: IUpdate[];
  /** 是否显示「查看详情」入口（指向更新日志页） */
  showLink?: boolean;
}

export default function UpdateList({ items, showLink = true }: UpdateListProps) {
  if (items.length === 0) {
    return (
      <div className="border border-dashed border-border p-8 text-center font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
        No updates yet · 暂无更新记录
      </div>
    );
  }

  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((item) => (
        <li key={item.id} className="group flex flex-col gap-2 py-4 sm:flex-row sm:items-baseline sm:gap-6">
          <div className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.12em] text-muted-foreground sm:w-36">
            <span>{item.date}</span>
          </div>
          <div className="flex flex-1 items-baseline justify-between gap-4">
            <p className="whitespace-pre-line text-[13.5px] leading-relaxed text-foreground/85">
              {item.content}
            </p>
            {showLink ? (
              <Link
                to="/updates"
                className="hidden shrink-0 items-center gap-0.5 text-[13px] text-muted-foreground transition-colors hover:text-accent sm:inline-flex"
              >
                详情
                <ChevronRight aria-hidden className="size-3.5" />
              </Link>
            ) : null}
          </div>
        </li>
      ))}
    </ul>
  );
}
