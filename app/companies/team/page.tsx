import React from "react";
import { FiChevronDown, FiPlus, FiSearch, FiSun, FiTag, FiVideo } from "react-icons/fi"; // Importing the plus icon for the button
import { GoPersonAdd } from "react-icons/go";
import { LiaSlidersHSolid } from "react-icons/lia";


type FilterButtonProps = {
  icon: JSX.Element;
  label: string;
};

const FilterButton: React.FC<FilterButtonProps> = ({ icon, label }) => {
  return (
    <div className="flex items-center space-x-2 px-4  bg-gray-100 rounded-full shadow-sm hover:bg-gray-200 cursor-pointer">
      {icon}
      <span className="text-gray-600 font-medium">{label}</span>
      <FiChevronDown className="text-gray-500" size={16} />
    </div>
  );
};

const TeamPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto flex flex-col py-32 gap-20 items-center justify-start h-screen">
      {/* Title */}
      <div className="w-full space-y-10 text-start">
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
        <div className="border-b py-3">
          <div className="flex items-center space-x-4 mt-4">
            {/* Status Button */}
            <FilterButton icon={<FiSun className="text-gray-600" />} label="Status" />
            {/* Tags Button */}
            <FilterButton icon={<FiTag className="text-gray-600" />} label="Tags" />
            {/* Interviews Button */}
            <FilterButton icon={<FiVideo className="text-gray-600" />} label="Interviews" />
          </div>
        </div>
      </div>


      {/* Empty State Icon */}
      <div className="flex flex-col items-center justify-center">
        <div className="w-20 h-20 rounded-full flex items-center justify-center mb-4">
          <GoPersonAdd className="text-gray-400" size={50} />
        </div>
        <p className="text-gray-500 ">You have not shortlisted anyone.</p>
        <p className="text-gray-400 mb-8">
          Use Search functionality to add people to your shortlist.
        </p>
        {/* Hire a team button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-xl flex items-center space-x-2 shadow-md">
          <FiPlus size={20} />
          <span>Hire a team</span>
        </button>
      </div>


    </div>
  );
};

export default TeamPage;
