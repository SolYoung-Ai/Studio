import { FAQ_ITEMS } from '@/data/faqs';
import InfoPageLayout from '@/components/InfoPageLayout';
import { useLang, bi, type Lang } from '@/i18n';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  const { lang } = useLang();
  const L = (b: { zh: string; en: string }) => bi(b, lang as Lang);
  return (
    <InfoPageLayout
      kicker="FAQ"
      title={lang === 'en' ? 'FAQ' : '常见问题'}
      description={
        lang === 'en'
          ? 'Common questions about personal websites, digital spaces and brand collaboration. More questions — reach me on the contact page.'
          : '关于个人网站搭建与品牌合作的常见疑问。更多问题可通过联系页直接咨询。'
      }
    >
      <Accordion type="single" collapsible className="w-full border-t border-border">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={item.q.zh} value={`faq-${index}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-[15px] font-medium">
              {L(item.q)}
            </AccordionTrigger>
            <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
              {L(item.a)}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </InfoPageLayout>
  );
}
