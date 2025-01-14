import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[#f0f8f0] text-heading-green">
      <Navbar />
      <main className="bg-home-light dark:bg-home-dark flex-1">{children}</main>
      <Footer/>
    </div>
  );
};
export default Layout;
