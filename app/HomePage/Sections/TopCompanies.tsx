import React from "react";
import Subtitle from "../_components/Subtitle";
import Section from "../_components/Section";
import Image, { StaticImageData } from "next/image";
import Brand2 from "@/Public/Brands/image 2.png";
import Brand3 from "@/Public/Brands/image 3.png";
import Brand4 from "@/Public/Brands/image 4.png";
import Brand5 from "@/Public/Brands/image 5.png";
import Brand6 from "@/Public/Brands/image 6.png";
import Brand7 from "@/Public/Brands/image 7.png";
import Brand8 from "@/Public/Brands/image 8.png";
import Brand9 from "@/Public/Brands/image 9.png";

interface CompanyProps {
  id: number;
  path: StaticImageData;
  w?: number;
}

const companies: CompanyProps[] = [
  {
    id: 1,
    path: Brand2,
    w: 50, 
  },
  {
    id: 2,
    path: Brand3,
  },
  {
    id: 3,
    path: Brand4,
  },
  {
    id: 4,
    path: Brand5,
  },
  {
    id: 5,
    path: Brand6,
    w: 60,
  },
  {
    id: 6,
    path: Brand7,
  },
  {
    id: 7,
    path: Brand8,
  },
  {
    id: 8,
    path: Brand9,
  },
];

const TopCompanies: React.FC = () => {
  return (
    <Section className="">
      <Subtitle>Hire experts from top companies</Subtitle>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between items-center">
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




