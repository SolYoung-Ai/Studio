import { useEffect, useState } from 'react';
import { Monitor, Smartphone } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Vp = 'auto' | 'mobile';
const KEY = 'studio-viewport';

/**
 * 视图切换：桌面预览手机版（把内容收窄到手机宽度）。
 * 真实手机上默认就是响应式手机布局，无需强制切换。
 */
export default function ViewportToggle() {
  const [vp, setVp] = useState<Vp>(() => {
    if (typeof localStorage === 'undefined') return 'auto';
    return localStorage.getItem(KEY) === 'mobile' ? 'mobile' : 'auto';
  });

  useEffect(() => {
    document.documentElement.classList.toggle('vp-mobile', vp === 'mobile');
    localStorage.setItem(KEY, vp);
  }, [vp]);

  const isMobile = vp === 'mobile';
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isMobile ? '切换到桌面视图' : '预览手机视图'}
      onClick={() => setVp(isMobile ? 'auto' : 'mobile')}
      title={isMobile ? '桌面视图' : '手机视图'}
    >
      {isMobile ? <Monitor className="size-4" /> : <Smartphone className="size-4" />}
    </Button>
  );
}
