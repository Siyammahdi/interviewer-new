"use client"

// ProfileDetails.tsx
import React, { useState } from "react";
import { useSelectedCompany } from "../context/SelectedCompanyContext";
import { profiles } from "../data";
import { BsFillBookmarkFill, BsFillPersonCheckFill, BsStars } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";
import Image from "next/image";
import { LiaIdCardAltSolid } from "react-icons/lia";
import { PiCursorClickDuotone } from "react-icons/pi";
import ExperienceCard from "../_components/ExperienceCard";
import { GoPlay } from "react-icons/go";

const ProfileDetails = () => {
    const { selectedCompanyId } = useSelectedCompany();
    const [activeTab, setActiveTab] = useState('Interview');

    const fetchProfileDataById = (id: number | null) => {
        if (id === null) return null; // Return null if no ID is selected
        return profiles.find(profile => profile.id === id) || null; // Find the profile by ID
    };


    // Fetch the profile data based on selectedCompanyId (you might need to implement a function for fetching data)
    const profileData = fetchProfileDataById(selectedCompanyId); // Implement this function to return data based on ID
    console.log(profileData);

    if (!profileData) {
        return <div className="flex justify-center text-gray-400 items-center h-screen">
            <div>
                <div className="flex justify-center"><PiCursorClickDuotone size={100} /></div>
                <div className="text-center">
                    <p className="text-2xl font-semibold ">No profile selected</p>
                    <p className="text-xl ">Select a profile to view details</p>
                </div>
            </div>
        </div>;
    }

    return (
        <div className="my-20 pb-10 border-l h-full overflow-y-scroll scroll"   style={{
            scrollbarWidth: 'none', 
            msOverflowStyle: 'none',
          }} >
            <div className="p-8">
                <div className="flex gap-4 items-center">
                    {/* Profile Picture */}
                    <div className="h-12 w-12">
                        <Image
                            className="rounded-xl"
                            src={profileData.avatar}
                            alt={`${name}'s profile`}
                            width={50}
                            height={50}
                        />
                    </div>
                    {/* Name */}
                    <h1 className="text-2xl font-semibold">{profileData.name}</h1>
                </div>
                <div className="">
                    <div className="flex py-4 space-x-2">
                        <button className="px-4 py-1 flex items-center gap-2 text-sm text-blue-500 bg-blue-50 rounded-lg">
                            <BsFillPersonCheckFill />
                            Request intro
                        </button>
                        <button className="px-4 py-1 flex items-center gap-2 text-sm text-blue-500 bg-blue-50 rounded-lg">
                            <BsFillBookmarkFill />
                            Shortlist
                        </button>
                        <button className="px-4 py-1 text-sm flex items-center gap-1 text-white bg-blue-500 rounded-lg">
                            <GiElectric />
                            Hire
                        </button>
                    </div>

                    {/* Commitment & Salary Info */}
                    <div className="flex gap-4">
                        <p className="text-sm text-gray-600 flex items-center gap-1"><LiaIdCardAltSolid size={16} /> Commitment</p>
                        <p className="flex flex-col  text-sm bg-gray-50 rounded-lg p-2 font-medium">
                            Part-time at $10,029 / month{" "}
                            <span className="text-gray-500">Starts in 1 weeks</span>
                        </p>
                        <p className="flex flex-col  text-sm bg-gray-50 rounded-lg p-2 font-medium">
                            Full-time at $10,029 / month{" "}
                            <span className="text-gray-500">Starts in 1 weeks</span>
                        </p>
                    </div>

                    <div className="flex text-sm items-center mt-4 text-gray-600 gap-11">
                        <h3 className="flex items-center gap-1"><BsStars /> Expart in</h3>
                        {/* Expert in Tags */}
                        <div className="flex space-x-2">
                            {
                                profileData.expertIn.map((expart, index) => (
                                    <div className="" key={index}>
                                        <span className="px-2 py-1 text-xs bg-blue-50 text-blue-500 rounded-lg">
                                            {expart}
                                        </span>
                                    </div>
                                ))
                            }

                        </div>
                    </div>
                </div>

            </div>

            {/* Tabs */}

            <div className="flex space-x-4 border-y px-8 bg-gray-50 py-2">
                {['Interview', 'Experience', 'Education', 'Projects'].map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-lg ${activeTab === tab
                            ? ' text-gray-600 bg-gray-200'
                            : 'text-gray-500'
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            <div className="mt-6 px-12">
                <h2 className="text-lg font-semibold">AI Interview</h2>
                <div className=" mt-4 bg-black rounded-2xl py-28 flex items-center justify-center">
                    <GoPlay className='text-white' size={200} />
                </div>
            </div>

            <div className="p-8 relative">
                <h2 className="text-lg font-semibold pb-8">Work Experience</h2>
                <div >

                    {profileData.workExperience.map((exp, index) => (
                        <ExperienceCard
                            key={index}
                            title={exp.position}
                            company={exp.companyName}
                            image={exp.companyLogo}
                            period={exp.years}
                            level={exp.level}
                            description={exp.responsibilities}
                        />
                    ))}
                </div>
            </div>

            {/* Education */}

            <div className="p-8 relative">
                <h2 className="text-lg font-semibold pb-8">Education</h2>
                <div >
                    {/* <div className="h-full my-2 z-40 left-[55px] border-l-2 absolute"></div> */}
                    {profileData.education.map((edu, index) => (
                        <ExperienceCard
                            key={index}
                            title={edu.degree}
                            company={edu.institution}
                            image={edu.logo}
                            period={edu.years}
                            level="Prestigious"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfileDetails;
