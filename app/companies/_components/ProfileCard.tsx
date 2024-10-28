import Image from "next/legacy/image";
import React from "react";
import { useSelectedCompany } from "../context/SelectedCompanyContext";

// Define the interface for company details
interface Company {
    id: number;
    name: string;
    experience: number;
    skills: string[];
    commitments: string[];
    imageUrl: string;
}

type ProfileCardProps = {
    company: Company; // Ensure that company is defined
    onClick: (id: number) => void; // Function to handle clicks
};

const ProfileCard: React.FC<ProfileCardProps> = ({ company, onClick }) => {
    const { selectedCompanyId } = useSelectedCompany();
    
    // Check if this company is selected
    const isSelected = selectedCompanyId === company.id; 

    return (
        <div className={`p-6 border rounded-2xl transition-all ${isSelected ? "border-blue-500" : "border-gray-300"}`}>
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-4">
                <div className="flex items-start lg:items-center">
                    {/* Profile Image */}
                    <div className="h-16 w-16">
                        <Image
                            className="rounded-xl"
                            src={company.imageUrl}
                            alt={`${company.name}'s profile`}
                            width={50}
                            height={50}
                        />
                    </div>
                    <div className="ml-4 flex items-center">
                        <h2 className="sm:text-sm md:text-base lg:text-lg font-semibold">
                            {company.name}<span className="text-gray-500"> | Exp: {company.experience} years</span>
                        </h2>
                    </div>
                </div>
                <div className="lg:mt-4 text-right">
                    <button 
                        onClick={() => onClick(company.id)} // Call the onClick handler with the company id
                        className="px-4 py-2 text-white font-semibold text-xs lg:text-sm bg-blue-500 rounded-xl"
                    >
                        View Profile
                    </button>
                </div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between">
                <div>
                    <h3 className="font-semibold text-sm py-2">Expert in</h3>
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                        {company.skills.map((skill) => (
                            <span
                                key={skill}
                                className="px-2 py-1 text-[9px] lg:text-xs font-medium text-blue-500 h-fit bg-blue-50 rounded-lg"
                            >
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Commitments */}
                <div>
                    <h3 className="font-semibold text-sm py-2 text-start lg:text-end">Commitment</h3>
                    <div className="flex gap-4">
                        {company.commitments.map((commitment) => (
                            <span
                                key={commitment}
                                className="px-2 py-1 text-xs text-gray-800 h-fit bg-gray-100 rounded-lg"
                            >
                                {commitment}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
