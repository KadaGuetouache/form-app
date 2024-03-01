import { PropsWithChildren } from "react";

const Layout = ({ children }: PropsWithChildren) => {
  return <div className="flex w-full flex-grow mx-auto">{children}</div>;
};

export default Layout;
