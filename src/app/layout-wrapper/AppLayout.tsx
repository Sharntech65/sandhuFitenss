import Footer from '../../components/common/footer/Footer';
import Header from '../../components/common/Header';

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
