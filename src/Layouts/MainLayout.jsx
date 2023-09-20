import { Outlet } from "react-router-dom";
import Footer from "../Pages/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <section className="shadow-md py-6">
        {/* <div className="py-5 shadow-lg text-4xl">Amazon</div> */}
        <nav className="flex justify-between mx-10 ">
          <h2 className="text-3xl">Amazon</h2>
          <ul className="flex gap-4 text-xl">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </section>
     <div className="min-h-screen">
     <Outlet></Outlet>
     </div>
    <Footer></Footer>
     
    </div>
  );
};

export default MainLayout;
