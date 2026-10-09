import { Routes, Route } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import HomePage from '@/pages/HomePage/HomePage';
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

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
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
  );
}
