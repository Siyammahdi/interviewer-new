import React from "react";
import Subtitle from "../_components/Subtitle";
import Title from "../_components/Title";
import Image from "next/legacy/image";
import Section from "../_components/Section";
import { IconType } from "react-icons";
import { HiOutlineBriefcase, HiOutlineServerStack } from "react-icons/hi2";
import { GoStack } from "react-icons/go";
import globe from "@/Public/globe.png"
import business1 from "@/Public/busniess 1.png"

interface JobCardProps {
  title: string;
  type: string;
  location: string;
  rate: string;
  Icon: IconType;
}

const JobCard: React.FC<JobCardProps> = ({ title, type, location, rate, Icon }) => {
  return (
    <div className="flex justify-between items-center p-4 border rounded-xl mb-4 bg-white">
      <div className="flex items-center">
        <Icon className="text-white bg-blue-500 rounded-lg h-10 w-10 p-2 mr-4" />
        <div>
          <h3 className="text-sm md:text-lg font-semibold">{title}</h3>
          <p className="text-xs md:text-sm text-gray-500">
            {type} • {location}
          </p>
        </div>
      </div>
      <div className="text-sm md:text-base text-blue-500 font-semibold">{rate} / hour</div>
    </div>
  );
};

const WorkWay: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="md:w-1/2 space-y-8 lg:pr-14 md:mb-0">
        <Subtitle>A new way to work</Subtitle>
        <Title>Apply once, reach thousands of companies</Title>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base">
          Upload your resume and complete our 20-minute interview. Afterwards,
          Mercor will send your application to thousands of companies to find
          the best roles for you.
        </p>

        <div className="">
          <JobCard
            title="Full stack engineer"
            type="Part-time"
            location="Remote"
            rate="$42"
            Icon={GoStack}
          />
          <JobCard
            title="Consultant"
            type="Full-time"
            location="Remote"
            rate="$85"
            Icon={HiOutlineBriefcase}
          />
          <JobCard
            title="ML Engineer"
            type="Hourly"
            location="Remote"
            rate="$78"
            Icon={HiOutlineServerStack}
          />
        </div>
      </div>

      <div className="md:w-1/2 relative">
        <div className="absolute -bottom-60">
          <Image
            src={globe}
            alt="Illustration showing data analysis"
            width={800}
            height={550}
            className=""
          />
        </div>
        <div className="absolute -top-16">
          <Image
            src={business1}
            alt="Illustration showing data analysis"
            width={800}
            height={550}
            className=""
          />
        </div>
      </div>
    </Section>
  );
};

export default WorkWay;
