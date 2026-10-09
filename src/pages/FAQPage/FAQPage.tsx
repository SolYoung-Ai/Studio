import { FAQ_ITEMS } from '@/data/faqs';
import InfoPageLayout from '@/components/InfoPageLayout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function FAQPage() {
  return (
    <InfoPageLayout
      kicker="FAQ"
      title="常见问题"
      description="关于商品、付款与交付的常见疑问。更多问题可通过联系页直接咨询站长。"
    >
      <Accordion type="single" collapsible className="w-full border-t border-border">
        {FAQ_ITEMS.map((item, index) => (
          <AccordionItem key={item.q} value={`faq-${index}`} className="border-b border-border">
            <AccordionTrigger className="text-left text-[15px] font-medium">
              {item.q}
            </AccordionTrigger>
            <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </InfoPageLayout>
  );
}
