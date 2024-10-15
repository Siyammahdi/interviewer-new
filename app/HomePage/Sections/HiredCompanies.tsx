import React from "react";
import Subtitle from "../_components/Subtitle";
import Section from "../_components/Section";
import Image from "next/image";

interface CompanyProps {
  id: number;
  path: string;
  w?: number;
}

const companies: CompanyProps[] = [
  {
    id: 1,
    path: "/Brands/image 10.png",
    w: 50, 
  },
  {
    id: 2,
    path: "/Brands/image 11.png",
  },
  {
    id: 3,
    path: "/Brands/image 12.png",
  },
  {
    id: 4,
    path: "/Brands/image 13.png",
  },
];

const HiredCompanies: React.FC = () => {
  return (
    <Section className="">
      <Subtitle>1000+ hired recently, as seen on...</Subtitle>
      <div className="flex gap-4 justify-between items-center">
        {companies.map((company) => (
          <div
            className="w-full flex justify-center items-center h-28 bg-gray-100 rounded-2xl"
            key={company.id}
          >
            <Image
              src={company.path}
              alt="company"
              height={100}
              width={company.w ? company.w : 130}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default HiredCompanies;




