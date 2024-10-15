import React from "react";
import Button from "../_components/Button";
import Section from "../_components/Section";
import Title from "../_components/Title";

const GetStarted: React.FC = () => {
  return (
    <div className="bg-[#EAF5F9]">
      <Section className=" pb-16 px-6 space-y-8">
        {/* Left Section */}
          <Title>
            Ready to get started?
          </Title>
          <p className="text-gray-600 w-2/5">
          Mercor allows you to interview from wherever you are and receive job
          opportunities from anywhere in the world.
        </p>

        {/* Right Section: Buttons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <Button>Apply for work</Button>
          <Button variant="secondary">
            Hire instantly <span className="ml-2">→</span>
          </Button>
        </div>
      </Section>
    </div>
  );
};

export default GetStarted;
