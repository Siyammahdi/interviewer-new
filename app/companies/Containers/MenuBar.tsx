import React from "react";
import { FiSearch, FiBookmark, FiUsers, FiCreditCard, FiSettings, FiCalendar, FiUser } from "react-icons/fi"; // Importing icons from React Icons


type MenuItemProps = {
    icon: JSX.Element;
    label: string;
    isActive?: boolean; // Optional prop to highlight the active menu item
  };
  
  const MenuItem: React.FC<MenuItemProps> = ({ icon, label, isActive }) => {
    return (
      <div className="flex flex-col items-center space-y-1">
        {/* Icon Button */}
        <button
          className={`p-2 rounded-full ${isActive ? 'bg-blue-100 text-blue-600' : 'text-gray-600'}`}
        >
          {icon}
        </button>
        {/* Label */}
        <span className={`text-xs ${isActive ? 'text-blue-600' : 'text-gray-500'}`}>{label}</span>
      </div>
    );
  };


const Menubar: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-6 p-4 bg-white h-[92vh] shadow-md">
      {/* Menu Items */}
      <MenuItem icon={<FiSearch size={20} />} label="Search" isActive />
      <MenuItem icon={<FiBookmark size={20} />} label="Shortlist" />
      <MenuItem icon={<FiUsers size={20} />} label="Team" />
      <MenuItem icon={<FiCreditCard size={20} />} label="Spend" />
      <MenuItem icon={<FiSettings size={20} />} label="Settings" />

      {/* Spacing to separate top and bottom items */}
      <div className="flex-grow"></div>

      {/* Bottom Items */}
      <MenuItem icon={<FiCalendar size={20} />} label="Calendar" />
      <MenuItem icon={<FiUser size={20} />} label="Profile" />
    </div>
  );
};

export default Menubar;
