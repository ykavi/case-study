import { Header, Footer } from '@components';
import styles from './styles/layout.module.scss';

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main className={styles.container}>{children}</main>
    <Footer />
  </>
);

export default MainLayout;
