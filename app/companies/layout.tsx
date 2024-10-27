"use client"

import React, { ReactNode } from "react";
import Menubar from "./_components/MenuBar";
import { SelectedCompanyProvider } from "./context/SelectedCompanyContext";

interface CompaniesLayoutProps {
  children: ReactNode;
}

const CompaniesLayout: React.FC<CompaniesLayoutProps> = ({ children }) => {
  return (
    <SelectedCompanyProvider>
      <div>
        <Menubar />
        <div className="mx-10">{children}</div>
      </div>
    </SelectedCompanyProvider>
  );
};

export default CompaniesLayout;
