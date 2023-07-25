import Footer from '@/components/footer';
import Header from '@/components/header';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

const MainLayout = (props: Props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
