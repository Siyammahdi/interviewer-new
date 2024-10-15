import React from "react";
import Subtitle from "../_components/Subtitle"; // Subtitle component
import Title from "../_components/Title"; // Title component
import Section from "../_components/Section"; // Section wrapper
import Button from "../_components/Button";
import Image from "next/image"; // Image component from Next.js for optimization
import {
  AiOutlineSearch,
  AiOutlineUserAdd,
  AiOutlineTeam,
  AiOutlineDollar,
} from "react-icons/ai"; // Import icons from React Icons

// Reusable Card Component
const Card: React.FC<{
  keyword: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
}> = ({ keyword, title, description, image, icon }) => (
  <div className=" border border-gray-200 rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    {/* Card Image */}
    <div className="relative h-48 bg-gray-200 m-2">
      <Image src={image} alt={title} layout="fill" objectFit="cover" />
    </div>

    <div className="p-6 space-y-3">
      <div className="flex items-center bg-gray-100 w-fit px-2 py-1 rounded-md">
        <span>{icon}</span>
        <p className="text-xs ml-1">{keyword}</p>
      </div>
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  </div>
);

const HiringSection: React.FC = () => {
  return (
    <Section className="py-16">
      <div className="space-y-8">
        {/* Title and Subtitle */}
        <Subtitle>For companies of all sizes</Subtitle>
        <Title>Onboard your global team in seconds</Title>
        <p className="text-gray-600 mt-4 w-2/3">
          Mercor makes the hiring process easier than ever – browse, select, and
          hire top candidates all on the same day. Were a fully compliant
          AI-powered hiring platform that sources, vets, and pays your next
          employees.
        </p>

        {/* Buttons */}
        <div className="flex mb-12 space-x-4">
          <Button>Apply for work</Button>
          <Button variant="secondary">
            Hire instantly <span className="ml-2">→</span>
          </Button>
        </div>
      </div>

      {/* Cards */}
      <div className="flex my-16 gap-8">
        {/* Individual Card Instances */}
        <div className="space-y-8">
          <Card
            keyword="Search"
            title="Browse candidates"
            description="We index resumes, interviews, and online profiles to find candidates that perfectly match your role."
            image="/Banner/dashboard 1.png"
            icon={<AiOutlineSearch className="text-lg text-blue-600" />}
          />
          <Card
            keyword="Shortlist"
            title="Request intros"
            description="Schedule meetings with anyone in our talent pool with a single click. All of our candidates are actively looking for opportunities."
            image="/Banner/dashboard 2.png"
            icon={<AiOutlineUserAdd className="text-lg text-blue-600" />}
          />
        </div>
        <div className="space-y-8 -mt-16">
          <Card
            keyword="Team"
            title="Hire instantly"
            description="The hire instantly button allows you to send contracts and onboard your team today, eliminating overhead from hiring."
            image="/Banner/dashboard 1.png"
            icon={<AiOutlineTeam className="text-lg text-blue-600" />}
          />
          <Card
            keyword="Payment"
            title="Setup payouts"
            description="Simply pay through our platform and allow us to facilitate seamless global payments, compliant with US law."
            image="/Banner/dashboard 2.png"
            icon={<AiOutlineDollar className="text-lg text-blue-600" />}
          />
        </div>
      </div>
    </Section>
  );
};

export default HiringSection;
