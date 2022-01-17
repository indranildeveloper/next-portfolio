import Navbar from "../navbar";
import Footer from "../footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="px-4 md:px-8 lg:px-16">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
