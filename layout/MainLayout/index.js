import { Header, Footer } from '@components';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
