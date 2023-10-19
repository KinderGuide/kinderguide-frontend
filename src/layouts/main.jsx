import { Header } from './Header';
import { Footer } from './Footer';

/**
 * Компонент Layout.
 * Испуользуется на каждой странице и включает в себя Хедер и Футер
 */

const Layout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
