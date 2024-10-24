import React from "react";
import ProfileCard from "../_components/ProfileCard";
import { FiSearch } from "react-icons/fi";
import { LiaSlidersHSolid } from "react-icons/lia";

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

const Profiles = () => {
  return (
    <div className="w-full pt-12">
      <div className="px-28 space-y-6">
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
          <div className="flex space-x-4 ">
            <FilterButton icon={<FiSearch />} label="Worked on web scraping" />
            <FilterButton icon={<FiSearch />} label="Lives in South America" />
            <FilterButton icon={<FiSearch />} label="Worked at Amazon" />
          </div>
        </div>
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
        <ProfileCard
          name="M. S."
          experience="12 years"
          description="Led AWS Private Console project, impacting 260 service teams at Amazon Web Services."
          skills={["AWS", "React", "Angular", "Spring", "Kubernetes"]}
          commitments={["Full-time", "Part-time"]}
          imageUrl="https://i.pravatar.cc/150?u=a042581f4e29026704d"
        />
      </div>
    </div>
  );
};

export default Profiles;
