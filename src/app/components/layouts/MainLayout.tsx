import { ReactNode } from "react";
import Header from "./header";
import Navbar from "./navbar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="">
      <Header />
      <Navbar />

      <main>{children}</main>
      <footer>footer</footer>
    </div>
  );
};

export default MainLayout;
