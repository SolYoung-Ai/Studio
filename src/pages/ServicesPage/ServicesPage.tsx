import ServiceDetailSection from '@/pages/HomePage/sections/ServiceDetailSection';
import CasesSection from '@/pages/HomePage/sections/CasesSection';
import ProcessSection from '@/pages/HomePage/sections/ProcessSection';
import ContactFormSection from '@/pages/HomePage/sections/ContactFormSection';
import SectionHeading from '@/components/SectionHeading';
import { useLang } from '@/i18n';

export default function ServicesPage() {
  const { lang } = useLang();
  return (
    <>
      <section className="border-b border-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <SectionHeading
            kickerEn="Services"
            title={lang === 'en' ? 'What I can actually do for you.' : '我具体可以为你做什么。'}
            description={
              lang === 'en'
                ? 'Personal websites, digital spaces and lightweight product builds for creators, freelancers and small brands — from requirements to design, build and deployment.'
                : '为创作者、自由职业者和小型品牌提供个人网站、数字空间与轻量产品实现服务，从需求梳理到设计制作与部署。'
            }
          />
        </div>
      </section>
      <ServiceDetailSection />
      <CasesSection />
      <ProcessSection />
      <ContactFormSection />
    </>
  );
}
