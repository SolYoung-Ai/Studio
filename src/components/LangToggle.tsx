import { Globe } from 'lucide-react';
import { useLang } from '@/i18n';
import { Button } from '@/components/ui/button';

export default function LangToggle() {
  const { lang, setLang } = useLang();
  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={lang === 'zh' ? 'Switch to English' : '切换到中文'}
      title={lang === 'zh' ? 'English' : '中文'}
      onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}
    >
      <Globe className="size-4" />
    </Button>
  );
}
