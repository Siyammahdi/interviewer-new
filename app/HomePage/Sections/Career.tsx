import React from "react";
import Subtitle from "../_components/Subtitle"; // Assuming Subtitle component exists
import Title from "../_components/Title"; // Assuming Title component exists
import Section from "../_components/Section"; // Assuming Section wrapper exists
import Image from "next/legacy/image"; // For optimized image handling in Next.js
import CareerImg from "@/Public/career.png";

const Career: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="space-y-6 md:pr-12">
        <div className="md:w-1/2 space-y-8">
          <Subtitle>Career reinvention</Subtitle>
          <Title>Opportunities beyond borders</Title>
          <p className="text-gray-600 leading-relaxed text-xs md:text-sm lg:text-base">
            Gain exposure to life-changing opportunities leveraging the best AI
            talent prediction model in the world. Mercor uses AI to understand
            your skills, experiences, and strengths. Then get placed with
            companies looking for your exact background and abilities.
          </p>
        </div>
        <div className="flex items-center">
          <div className="space-y-12 md:mr-12 px-5 text-xs md:text-sm lg:text-base">
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
              src={CareerImg}
              alt="People working together"
              width={900}
              height={500}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Career;
