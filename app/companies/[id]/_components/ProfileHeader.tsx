import React from "react";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { GiElectric } from "react-icons/gi";

const ProfileHeader: React.FC = () => {
  return (
    <div className="p-8">
      <div className="flex gap-4 items-center">
        {/* Profile Picture */}
        <div className="w-12 h-12 rounded-xl bg-gray-300"></div>
        {/* Name */}
        <h1 className="text-2xl font-semibold">E. V.</h1>
      </div>
      <div className="">
        <div className="flex py-4 space-x-2">
          <button className="px-4 py-1 flex items-center gap-2 text-sm text-blue-500 bg-blue-50 rounded-lg">
            <BsFillPersonCheckFill />
            Request intro
          </button>
          <button className="px-4 py-1 text-sm flex items-center gap-1 text-white bg-blue-500 rounded-lg">
            <GiElectric />
            Hire
          </button>
        </div>

        {/* Commitment & Salary Info */}
        <div className="flex gap-4">
          <p className="text-sm text-gray-600">Commitment</p>
          <p className="flex flex-col  text-sm bg-gray-50 rounded-lg p-2 font-medium">
            Part-time at $10,029 / month{" "}
            <span className="text-gray-500">Starts in 1 weeks</span>
          </p>
          <p className="flex flex-col  text-sm bg-gray-50 rounded-lg p-2 font-medium">
            Full-time at $10,029 / month{" "}
            <span className="text-gray-500">Starts in 1 weeks</span>
          </p>
        </div>

        <div className="flex text-sm items-center text-gray-600 gap-11">
            <h3>Expart in</h3>
          {/* Expert in Tags */}
          <div className="mt-2 space-x-2">
            <span className="px-2 py-1 text-xs bg-blue-50 text-blue-500 rounded-lg">
              React
            </span>
            <span className="px-2 py-1 text-xs bg-blue-50 text-blue-500 rounded-lg">
              TypeScript
            </span>
            <span className="px-2 py-1 text-xs bg-blue-50 text-blue-500 rounded-lg">
              Node.js
            </span>
            <span className="px-2 py-1 text-xs bg-blue-50 text-blue-500 rounded-lg">
              Team Management
            </span>
            <span className="px-2 py-1 text-xs bg-blue-50 text-blue-500 rounded-lg">
              Leadership
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
    </div>
  );
};

export default ProfileHeader;
