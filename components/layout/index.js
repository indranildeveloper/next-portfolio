import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
