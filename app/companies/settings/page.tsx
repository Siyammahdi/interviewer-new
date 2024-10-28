"use client"

import { useState } from "react";
import { BsPersonAdd } from "react-icons/bs";
import UserPermission from "./containers/UserPermission";
import PersonalInformation from "./containers/PersonalInformation";
import CompanyInformation from "./containers/CompanyInformation";

type Tab = "userPermissions" | "personalInfo" | "companyInfo";

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState<Tab>("userPermissions");

    return (
        <div className="max-w-5xl mx-auto pt-32">
            <div className="flex space-x-4 text-sm border-gray-200">
                <button
                    onClick={() => setActiveTab("userPermissions")}
                    className={`py-2 px-4 ${activeTab === "userPermissions" ? "bg-blue-100 rounded-lg border-blue-500 text-blue-500" : "text-gray-500"}`}
                >
                    User permissions
                </button>
                <button
                    onClick={() => setActiveTab("personalInfo")}
                    className={`py-2 px-4 ${activeTab === "personalInfo" ? "bg-blue-100 rounded-lg border-blue-500 text-blue-500" : "text-gray-500"}`}
                >
                    Personal information
                </button>
                <button
                    onClick={() => setActiveTab("companyInfo")}
                    className={`py-2 px-4 ${activeTab === "companyInfo" ? "bg-blue-100 rounded-lg border-blue-500 text-blue-500" : "text-gray-500"}`}
                >
                    Company information
                </button>
            </div>

            <div className="mt-4">
                {activeTab === "userPermissions" && (
                    <UserPermission />
                )}
                {activeTab === "personalInfo" && (
                    <div>
                        <PersonalInformation />
                    </div>
                )}
                {activeTab === "companyInfo" && (
                    <CompanyInformation />
                )}
            </div>
        </div>
    );
};

export default SettingsPage;
