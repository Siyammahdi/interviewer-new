import React from "react";
import Subtitle from "../_components/Subtitle";
import Title from "../_components/Title"; 
import Section from "../_components/Section"; 
import Button from "../_components/Button";
import Image, { StaticImageData } from "next/image"; 
import Dash1 from "@/Public/Banner/dashboard 1.png"
import Dash2 from "@/Public/Banner/dashboard 2.png"

import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineTeam,
  AiOutlineDollar,
} from "react-icons/ai";
const Card: React.FC<{
  keyword: string;
  title: string;
  description: string;
  image: StaticImageData;
  icon: React.ReactNode;
}> = ({ keyword, title, description, image, icon }) => (
  <div className=" border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative h-48 bg-gray-200 m-2">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>

    <div className="p-3 md:p-6 space-y-3">
      <div className="flex items-center bg-gray-100 w-fit px-2 py-1 rounded-md">
        <span>{icon}</span>
        <p className="text-xs md:text-sm lg:text-base ml-1">{keyword}</p>
      </div>
      <h3 className="text-xl md:text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-base">{description}</p>
    </div>
  </div>
);

const HiringSection: React.FC = () => {
  return (
    <Section className="py-16">
      <div className="space-y-8">
        <Subtitle>For companies of all sizes</Subtitle>
        <Title>Onboard your global team in seconds</Title>
        <p className="text-gray-600 mt-4 w-2/3 text-xs md:text-sm lg:text-base">
          Mercor makes the hiring process easier than ever – browse, select, and
          hire top candidates all on the same day. Were a fully compliant
          AI-powered hiring platform that sources, vets, and pays your next
          employees.
        </p>

        <div className="flex mb-12 space-x-4">
          <Button>Apply for work</Button>
          <Button variant="secondary">
            Hire instantly <span className="ml-2">→</span>
          </Button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row my-16 gap-8">
        <div className="space-y-8">
          <Card
            keyword="Search"
            title="Browse candidates"
            description="We index resumes, interviews, and online profiles to find candidates that perfectly match your role."
            image={Dash1}
            icon={<AiOutlineSearch className="text-lg text-blue-600" />}
          />
          <Card
            keyword="Shortlist"
            title="Request intros"
            description="Schedule meetings with anyone in our talent pool with a single click. All of our candidates are actively looking for opportunities."
            image={Dash2}
            icon={<AiOutlineUserAdd className="text-lg text-blue-600" />}
          />
        </div>
        <div className="space-y-8 md:-mt-16">
          <Card
            keyword="Team"
            title="Hire instantly"
            description="The hire instantly button allows you to send contracts and onboard your team today, eliminating overhead from hiring."
            image={Dash1}
            icon={<AiOutlineTeam className="text-lg text-blue-600" />}
          />
          <Card
            keyword="Payment"
            title="Setup payouts"
            description="Simply pay through our platform and allow us to facilitate seamless global payments, compliant with US law."
            image={Dash2}
            icon={<AiOutlineDollar className="text-lg text-blue-600" />}
          />
        </div>
      </div>
    </Section>
  );
};

export default HiringSection;
