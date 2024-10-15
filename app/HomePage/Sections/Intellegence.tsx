import React from "react";
import Subtitle from "../_components/Subtitle"; // Subtitle component
import Title from "../_components/Title"; // Title component
import Section from "../_components/Section"; // Section wrapper
import Image from "next/image"; // Image component from Next.js for optimization
import Button from "../_components/Button";

const Intellegence: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between py-16">
      {/* Left Section */}
      <div className="md:w-1/2 space-y-8 pr-12">
        <Subtitle>Intelligence engineering</Subtitle>
        <Title>Work at the frontier of AI development</Title>
        <div className="pl-10 space-y-5">
          <p className="text-gray-600 leading-relaxed">
            Solve complex problems in your area of expertise. Expand your
            knowledge and let your creativity and brilliance shine.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Earn top 1% pay at companies predominantly in Silicon Valley. Mercor
            partners directly with many of the most exciting companies in the
            world.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Innovative research in the future of AI intelligence. Pioneer
            best-in-class approaches for developing advanced model capabilities.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4">
          <Button>Apply for work</Button>
          <Button variant="secondary">
            Hire instantly <span className="ml-2">→</span>
          </Button>
        </div>
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 flex justify-center items-center">
        <Image
          src="/Ai.png" // Replace with the correct path to the image asset
          alt="AI development illustration"
          width={400}
          height={400}
        />
      </div>
    </Section>
  );
};

export default Intellegence;
