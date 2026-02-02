import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Analytics } from '@/components/providers/Analytics';

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Analytics />
      <Header />
      <main id="main-content" className="min-h-screen">
        {children}
      </main>
      <Footer />
    </>
  );
}
