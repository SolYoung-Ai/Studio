import { Outlet } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const Layout = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
};
