import React from "react";
import Subtitle from "../_components/Subtitle";
import Title from "../_components/Title";
import Section from "../_components/Section";
import Image from "next/legacy/image";
import globe from "@/Public/globe.png";
import rect9 from "@/Public/Banner/Rectangle 9.png"
import rect13 from "@/Public/Banner/Rectangle 13.png"

const Opportunity: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-start justify-between my-32">
      <div className="md:w-2/5  space-y-8">
        <Subtitle>Globalizing opportunity</Subtitle>
        <Title>Apply and work from anywhere</Title>
        <p className="text-gray-600 text-xs md:text-sm lg:text-base">
          Mercor allows you to interview from wherever you are and receive job
          opportunities from anywhere in the world.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative">

          <div className="w-2/3 lg:w-full">
            <div className="mt-14 relative">
              <div className="absolute bottom-72">
                <Image
                  className=""
                  src={globe}
                  alt="globe"
                  height={400}
                  width={800}
                />
              </div>
              <div className="absolute -left-14 bottom-12">
                <Image
                  className="-mb-44 md:-mb-80 md:-ml-10"
                  src={rect9}
                  alt="1"
                  height={300}
                  width={440}
                />
              </div>
              <div className="">
                <Image
                  className=""
                  src={rect13}
                  alt="1"
                  height={400}
                  width={550}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Opportunity;
