"use client"
import { useState } from "react";

const CompanyInformation = () => {
    const [companyName, setCompanyName] = useState("siyammahdi1's company");
    const [companyWebsite, setCompanyWebsite] = useState("");
    const [schedulingInstructions, setSchedulingInstructions] = useState(
        "Would any of these times work for an interview? https://calendly.com/virat-talwar/mercor-company-demo"
    );

    return (
        <div className=" mx-auto p-6 flex gap-10 max-w-5xl">
            <div className="w-1/4">
                <h2 className=" font-semibold mb-2">Company Information</h2>
                <p className="text-sm text-gray-500 mb-6">Input your company name and website.</p>

            </div>
            <div className="w-full">
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                        <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company name</label>
                        <input
                            type="text"
                            id="companyName"
                            value={companyName}
                            onChange={(e) => setCompanyName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-700"
                            placeholder="Company name"
                        />
                    </div>

                    <div>
                        <label htmlFor="companyWebsite" className="block text-sm font-medium text-gray-700">Company website</label>
                        <input
                            type="url"
                            id="companyWebsite"
                            value={companyWebsite}
                            onChange={(e) => setCompanyWebsite(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-700"
                            placeholder="Company website"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="schedulingInstructions" className="block text-sm font-medium text-gray-700">Scheduling instructions</label>
                    <textarea
                        id="schedulingInstructions"
                        value={schedulingInstructions}
                        onChange={(e) => setSchedulingInstructions(e.target.value)}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm px-3 py-2 text-gray-700"
                        placeholder="Add scheduling instructions here..."
                        rows={3}
                    ></textarea>
                </div>
            </div>
        </div>
    );
};

export default CompanyInformation;
