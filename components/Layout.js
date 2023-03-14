import Navbar from './Navbar';
import Header from './Header';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div>
        <Header />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
