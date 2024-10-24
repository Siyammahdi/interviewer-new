import React, { ReactNode } from "react";
import Menubar from "./Containers/MenuBar";


interface CompaniesLayoutProps {
  children: ReactNode;
}

const CompaniesLayout: React.FC<CompaniesLayoutProps> = ({ children }) => {
  return (
    <div className="flex relative">
      {/* Menubar fixed to the left */}
      <div className="fixed left-0 top-0 h-full z-10">
        <Menubar />
      </div>
      <div className="flex w-full">
        <div className="w-1/2 ml-16 overflow-y-auto">{children}</div>
      </div>
    </div>
  );
};

export default CompaniesLayout;
