"use client";

import React from "react";
import ProfileCard from "../_components/ProfileCard";
import { FiSearch } from "react-icons/fi";
import { LiaSlidersHSolid } from "react-icons/lia";
import { profiles } from "../data"; // Ensure your data is correctly imported
import { useSelectedCompany } from "../context/SelectedCompanyContext";

type FilterButtonProps = {
  icon: JSX.Element;
  label: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label }) => {
  return (
    <button className="flex items-center p-4 space-x-2 text-sm w-full text-gray-700 bg-white border rounded-xl shadow-sm">
      <span className="text-xl">{icon}</span>
      <span>{label}</span>
    </button>
  );
};

const Profiles: React.FC = () => {
  const { setSelectedCompanyId } = useSelectedCompany();

  const handleCardClick = (id: number) => {
    setSelectedCompanyId(id); // Set the selected company ID in context
  };

  return (
    <div className="w-full pt-12">
      <div className="py-16 px-6 space-y-6">
        <div className="space-y-4">
          {/* Search Bar */}
          <div className="flex justify-between items-center p-2 bg-white border rounded-full shadow-sm">
            {/* Left Filter Icon Button */}
            <div className="flex items-center">
              <button className="p-4 h-fit bg-gray-100 rounded-full text-gray-500">
                <LiaSlidersHSolid size={20} />
              </button>

              {/* Search Input */}
              <div className="mx-4">
                <p className="text-xs">Skills and background</p>
                <input
                  type="text"
                  placeholder="Search people"
                  className="flex-grow placeholder:text-sm text-gray-700 bg-transparent outline-none"
                />
              </div>
            </div>

            {/* Right Search Button */}
            <button className="p-4 text-white bg-blue-500 rounded-full">
              <FiSearch size={20} />
            </button>
          </div>

          {/* Filter Buttons */}
          <div className="flex space-x-4">
            <FilterButton icon={<FiSearch />} label="Worked on web scraping" />
            <FilterButton icon={<FiSearch />} label="Lives in South America" />
            <FilterButton icon={<FiSearch />} label="Worked at Amazon" />
          </div>
        </div>

        {/* Mapping through profiles */}
        <div className="grid grid-cols-1 gap-6">
          {profiles.map((profile) => (
            <div onClick={() => handleCardClick(profile.id)} key={profile.id}>
              <ProfileCard
                company={{
                  id: profile.id,
                  name: profile.name,
                  experience: profile.experience,
                  skills: profile.expertIn,
                  commitments: profile.worktype,
                  imageUrl: profile.avatar,
                }}
                onClick={handleCardClick} // Pass the click handler to ProfileCard
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profiles;
