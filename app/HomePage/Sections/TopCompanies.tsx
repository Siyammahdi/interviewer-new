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
    path: "/Brands/image 2.png",
    w: 50, 
  },
  {
    id: 2,
    path: "/Brands/image 3.png",
  },
  {
    id: 3,
    path: "/Brands/image 4.png",
  },
  {
    id: 4,
    path: "/Brands/image 5.png",
  },
  {
    id: 5,
    path: "/Brands/image 6.png",
    w: 60,
  },
  {
    id: 6,
    path: "/Brands/image 7.png",
  },
  {
    id: 7,
    path: "/Brands/image 8.png",
  },
  {
    id: 8,
    path: "/Brands/image 9.png",
  },
];

const TopCompanies: React.FC = () => {
  return (
    <Section className="">
      <Subtitle>Hire experts from top companies</Subtitle>
      <div className="grid grid-cols-4 gap-4 justify-between items-center">
        {companies.map((company) => (
          <div
            className="w-full flex justify-center items-center h-28 bg-gray-100 rounded-2xl"
            key={company.id}
          >
            <Image
              src={company.path}
              alt="company"
              height={100}
              width={company.w ? company.w : 40}
            />
          </div>
        ))}
      </div>
    </Section>
  );
};

export default TopCompanies;




