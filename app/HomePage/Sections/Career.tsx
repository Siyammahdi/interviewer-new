import React from "react";
import Subtitle from "../_components/Subtitle"; // Assuming Subtitle component exists
import Title from "../_components/Title"; // Assuming Title component exists
import Section from "../_components/Section"; // Assuming Section wrapper exists
import Image from "next/image"; // For optimized image handling in Next.js

const Career: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between py-16">
      {/* Left Section */}
      <div className="space-y-6 pr-12">
        <div className="w-1/2 space-y-8">
          <Subtitle>Career reinvention</Subtitle>
          <Title>Opportunities beyond borders</Title>
          <p className="text-gray-600 leading-relaxed">
            Gain exposure to life-changing opportunities leveraging the best AI
            talent prediction model in the world. Mercor uses AI to understand
            your skills, experiences, and strengths. Then get placed with
            companies looking for your exact background and abilities.
          </p>
        </div>

        {/* Stats */}
        <div className="flex items-center">
          <div className="space-y-12 mr-12 px-5">
            <div>
              <p className="text-lg font-bold">250+</p>
              <p className="text-gray-600">Increase in annual salary</p>
              <p className="text-gray-600">Hundreds</p>
            </div>

            <div>
              <p className="text-lg font-bold">250+</p>
              <p className="text-gray-600">Increase in annual salary</p>
              <p className="text-gray-600">Hundreds</p>
            </div>

            <div>
              <p className="text-lg font-bold">Products used</p>
              <p className="text-gray-600">Interviews</p>
              <p className="text-gray-600">Profile</p>
            </div>
          </div>
          <div className="">
            <Image
              src="/career.png" // Replace with the correct image path
              alt="People working together"
              width={900}
              height={800}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* Right Section: Image */}
    </Section>
  );
};

export default Career;
