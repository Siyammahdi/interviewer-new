import React from "react";
import Subtitle from "../_components/Subtitle";
import Title from "../_components/Title";
import Image from "next/image";
import Section from "../_components/Section";
import { IconType } from "react-icons";
import { HiOutlineBriefcase, HiOutlineServerStack } from "react-icons/hi2";
import { GoStack } from "react-icons/go";

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
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-500">
            {type} • {location}
          </p>
        </div>
      </div>
      <div className="text-blue-500 font-semibold">{rate} / hour</div>
    </div>
  );
};

const WorkWay: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="md:w-1/2 space-y-8 pr-14 md:mb-0">
        <Subtitle>A new way to work</Subtitle>
        <Title>Apply once, reach thousands of companies</Title>
        <p className="text-gray-600">
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

      <div className="md:w-1/2">
        <Image
          src="/globe.png"
          alt="Illustration showing data analysis"
          width={550} 
          height={550}
          className="-mb-52"
        />
        <Image
          src="/busniess 1.png"
          alt="Illustration showing data analysis"
          width={550} 
          height={550}
          className=""
        />
      </div>
    </Section>
  );
};

export default WorkWay;
