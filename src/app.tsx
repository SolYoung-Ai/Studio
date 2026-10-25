import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import HomePage from '@/pages/HomePage/HomePage';
import ServicesPage from '@/pages/ServicesPage/ServicesPage';
import ContactPage from '@/pages/ContactPage/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage/NotFoundPage';

const BASE_TITLE = 'SolYoung Studio — AI 个人网站、数字空间与轻量产品制作';

function TitleUpdater() {
  const { pathname } = useLocation();
  useEffect(() => {
    const map: Record<string, string> = {
      '/': BASE_TITLE,
      '/services': '服务与合作 · SolYoung Studio',
      '/contact': '联系我 · SolYoung Studio',
    };
    document.title = map[pathname] ?? BASE_TITLE;
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
          <Route path="contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
