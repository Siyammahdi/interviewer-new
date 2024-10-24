import Image from "next/legacy/image";
import React from "react";

type ProfileCardProps = {
  name: string;
  experience: string;
  description: string;
  skills: string[];
  commitments: string[];
  imageUrl: string;
};

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  experience,
  description,
  skills,
  commitments,
  imageUrl,
}) => {
  return (
    <div className="p-6 border rounded-2xl ">
      <div className="flex items-center justify-between mb-4">
        <div className="flex">
          {/* Profile Image */}
          <Image
            className="rounded-xl"
            src={imageUrl}
            alt={`${name}'s profile`}
            width={50}
            height={50}
          />
          <div className="ml-4 flex items-center">
            <h2 className="text-lg font-semibold">
              {name} | Exp: {experience}
            </h2>
          </div>
        </div>
        <div className="mt-4 text-right">
          <button className="px-4 py-2 text-white font-semibold text-sm bg-blue-500 rounded-xl">
            View profile
          </button>
        </div>
      </div>

      {/* Description */}
      <p className=" text-sm text-gray-700">{description}</p>

      <div className="flex justify-between">
        <div>
          <h3 className="font-semibold text-sm py-2">Expart in</h3>
          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-1 text-xs font-medium text-blue-500 h-fit bg-blue-50 rounded-lg"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Commitments */}
        <div>
          <h3 className="font-semibold text-sm py-2 text-end">Commitment</h3>
          <div className="flex gap-4">
            {commitments.map((commitment) => (
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
