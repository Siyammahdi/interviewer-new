"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiSearch,
  FiBookmark,
  FiUsers,
  FiCreditCard,
  FiSettings,
  FiCalendar,
  FiUser,
} from "react-icons/fi";

type MenuItemProps = {
  icon: JSX.Element;
  label: string;
  href: string;
};

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, href }) => {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/companies" && pathname.startsWith(href));

  return (
    <Link href={href}>
      <div className="flex flex-col items-center space-y-1">
        <button
          className={`p-3 hover:bg-blue-100 hover:text-blue-600 rounded-xl ${isActive ? "bg-blue-100 text-blue-600" : "text-gray-600"
            } transform transition-transform duration-200 ease-in-out hover:scale-110`}
        >
          {icon}
        </button>

        <span className={`text-xs ${isActive ? "text-blue-600" : "text-gray-500"}`}>
          {label}
        </span>
      </div>
    </Link>
  );
};

const Menubar: React.FC = () => {
  return (
    <div className="fixed left-0 top-0 h-full z-10 flex flex-col items-center space-y-6 p-4 pt-24 bg-white border-r">
      <MenuItem icon={<FiSearch size={20} />} label="Search" href="/companies" />
      <MenuItem icon={<FiBookmark size={20} />} label="Shortlist" href="/companies/shortlist" />
      <MenuItem icon={<FiUsers size={20} />} label="Team" href="/companies/team" />
      <MenuItem icon={<FiCreditCard size={20} />} label="Spend" href="/companies/spend" />
      <MenuItem icon={<FiSettings size={20} />} label="Settings" href="/companies/settings" />
      <div className="flex-grow"></div>
      <MenuItem icon={<FiCalendar size={20} />} label="Calendar" href="/companies/calendar" />
      <MenuItem icon={<FiUser size={20} />} label="Profile" href="/companies/profile" />
    </div>
  );
};

export default Menubar;
