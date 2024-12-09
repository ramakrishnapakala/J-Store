import { Outlet } from "react-router-dom";
import Header from "../components/Header";

function HomeLayout() {
  return (
    <>
      <Header />
      <nav>
        <span className="text-4xl text-primary ">J-commerce</span>
      </nav>
      <Outlet />
      <section className="align-element py-20"></section>
    </>
  );
}

export default HomeLayout;
