import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import ProductsPage from '@/pages/ProductsPage/ProductsPage';
import ProductDetailPage from '@/pages/ProductDetailPage/ProductDetailPage';
import CheckoutPage from '@/pages/CheckoutPage/CheckoutPage';
import PurchaseGuidePage from '@/pages/PurchaseGuidePage/PurchaseGuidePage';
import FAQPage from '@/pages/FAQPage/FAQPage';
import PrivacyPage from '@/pages/PrivacyPage/PrivacyPage';
import TermsPage from '@/pages/TermsPage/TermsPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import UpdatesPage from '@/pages/UpdatesPage/UpdatesPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const BASE_TITLE = 'SolYoung Studio — AI 个人网站、数字空间与轻量产品制作';

function TitleUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    const map: Record<string, string> = {
      '/': BASE_TITLE,
      '/services': '服务与合作 · SolYoung Studio',
      '/products': '全部作品 · SolYoung Studio',
      '/checkout': '结算 · SolYoung Studio',
      '/purchase-guide': '购买须知 · SolYoung Studio',
      '/faq': '常见问题 · SolYoung Studio',
      '/privacy': '隐私说明 · SolYoung Studio',
      '/terms': '服务条款 · SolYoung Studio',
      '/contact': '联系我 · SolYoung Studio',
      '/updates': '更新日志 · SolYoung Studio',
    };
    if (/^\/products\/[^/]+/.test(pathname)) {
      document.title = '作品详情 · SolYoung Studio';
    } else {
      document.title = map[pathname] ?? BASE_TITLE;
    }
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <TitleUpdater />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug" element={<ProductDetailPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="purchase-guide" element={<PurchaseGuidePage />} />
          <Route path="faq" element={<FAQPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="updates" element={<UpdatesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
