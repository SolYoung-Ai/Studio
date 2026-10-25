import { Link, NavLink, useLocation } from 'react-router-dom';
import { ExternalLink, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SITE_CONFIG } from '@/data/site';
import { useLang } from '@/i18n';
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
import LangToggle from '@/components/LangToggle';

interface INavItem {
  zh: string;
  en: string;
  path: string;
  /** 该导航项是否以 search 参数区分激活态 */
  queryKey?: string;
  /** 外链：用 <a> 新窗口打开 */
  external?: boolean;
}

const NAV_ITEMS: INavItem[] = [
  { zh: '服务', en: 'Services', path: '/services' },
  { zh: '社区', en: 'Community', path: 'https://solhub.solyoung.top/', external: true },
  { zh: '联系我', en: 'Contact', path: '/contact' },
];

function useNavActive(item: INavItem): boolean {
  const { pathname } = useLocation();
  return pathname.startsWith(item.path);
}

function NavItem({ item }: { item: INavItem }) {
  const active = useNavActive(item);
  const { lang } = useLang();
  const cls = cn(
    'group relative flex items-center px-3 py-2 text-sm transition-colors',
    active ? 'text-foreground' : 'text-muted-foreground hover:text-foreground',
  );
  const inner = (
    <>
      <span className="leading-none">{lang === 'zh' ? item.zh : item.en}</span>
      <span
        aria-hidden
        className={cn(
          'absolute inset-x-3 bottom-0 h-px origin-left bg-foreground transition-transform duration-300',
          active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100',
        )}
      />
    </>
  );
  if (item.external) {
    return (
      <a href={item.path} target="_blank" rel="noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <NavLink to={item.path} className={cls}>
      {inner}
    </NavLink>
  );
}

function HeaderControls() {
  return (
    <div className="flex items-center gap-0.5">
      <ThemeToggle />
      <LangToggle />
    </div>
  );
}

export default function Header() {
  const { t } = useLang();
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
            {t('nav.backToMain')}
            <ExternalLink aria-hidden className="size-3.5" />
          </a>
          <div className="ml-2 border-l border-border pl-2">
            <HeaderControls />
          </div>
        </nav>

        <div className="flex items-center gap-1 lg:hidden">
          <HeaderControls />
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
                    {t('nav.backToMain')}
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
