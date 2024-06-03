import Navbar from "./Header/Navbar";
import Footer from "./Footer";

const NavbarFooterWrapper = ({ children }: any) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default NavbarFooterWrapper;
