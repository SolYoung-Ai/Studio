import { Link, NavLink, useLocation } from 'react-router-dom';
import { ExternalLink, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/data/site';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import ThemeToggle from '@/components/ThemeToggle';

interface INavItem {
  zh: string;
  en: string;
  path: string;
  /** 该导航项是否以 search 参数区分激活态 */
  queryKey?: string;
}

const NAV_ITEMS: INavItem[] = [
  { zh: '产品', en: 'PRODUCTS', path: '/products' },
  { zh: '资源', en: 'RESOURCES', path: '/products?cat=资源', queryKey: 'cat=资源' },
  { zh: '购买说明', en: 'GUIDE', path: '/purchase-guide' },
];

function useNavActive(item: INavItem): boolean {
  const { pathname, search } = useLocation();
  if (item.queryKey) {
    return pathname === '/products' && search.includes(item.queryKey);
  }
  if (item.path === '/products') {
    return pathname === '/products' && !search.includes('cat=');
  }
  return pathname.startsWith(item.path);
}

function NavItem({ item }: { item: INavItem }) {
  const active = useNavActive(item);
  return (
    <NavLink
      to={item.path}
      className={cn(
        'group relative flex flex-col items-start px-3 py-2 text-sm transition-colors',
        active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
      )}
    >
      <span className="leading-none">{item.zh}</span>
      <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.2em] opacity-70">
        {item.en}
      </span>
      <span
        aria-hidden
        className={cn(
          'absolute inset-x-3 bottom-0 h-px origin-left bg-foreground transition-transform duration-300',
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />
    </NavLink>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:h-16">
        <Link
          to="/"
          className="font-display text-[15px] font-bold tracking-[0.16em] text-foreground transition-opacity hover:opacity-70"
        >
          SOLYOUNG<span className="text-accent">.</span>STUDIO
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="主导航">
          {NAV_ITEMS.map((item) => (
            <NavItem key={item.en} item={item} />
          ))}
          <a
            href={SITE_CONFIG.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            返回主站
            <ExternalLink aria-hidden className="size-3.5" />
          </a>
          <div className="ml-2 border-l border-border pl-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <ThemeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="打开菜单">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <SheetHeader>
                <SheetTitle className="font-display tracking-[0.14em]">
                  SOLYOUNG STUDIO
                </SheetTitle>
                <SheetDescription>
                  {SITE_CONFIG.taglineZh} {SITE_CONFIG.taglineEn}
                </SheetDescription>
              </SheetHeader>
              <nav className="mt-6 flex flex-col gap-1" aria-label="移动端导航">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.en}>
                    <NavItem item={item} />
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href={SITE_CONFIG.mainSiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    返回主站
                    <ExternalLink aria-hidden className="size-3.5" />
                  </a>
                </SheetClose>
              </nav>
              <div className="mt-8 border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                Tools · Resources · Experiments
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
