import { ReactNode } from "react";


type AuthLayoutProps = {
  children: ReactNode;
};


const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="container-fluid">
      <main className="block">
        {children}
        </main>
    </div>
  );
};

export default AuthLayout;
