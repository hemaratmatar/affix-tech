import { ReactNode } from "react";
import Header from "./header";
// import Navbar from "./navbar";
import Navbar2 from "./Navbar2";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="">
      <Header />
      {/* <Navbar /> */}
      <Navbar2 />

      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
