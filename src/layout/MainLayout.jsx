import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <Navbar />
      <main className="pt-24 mb-10">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
