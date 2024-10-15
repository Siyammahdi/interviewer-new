import React from "react";
import Subtitle from "../_components/Subtitle";
import Title from "../_components/Title";
import Section from "../_components/Section";
import Image from "next/image";

const Opportunity: React.FC = () => {
  return (
    <Section className="flex flex-col md:flex-row items-center justify-between py-16">
      <div className="md:w-1/3  space-y-8">
        <Subtitle>Globalizing opportunity</Subtitle>
        <Title>Apply and work from anywhere</Title>
        <p className="text-gray-600">
          Mercor allows you to interview from wherever you are and receive job
          opportunities from anywhere in the world.
        </p>
      </div>

      <div className="md:w-1/2 flex justify-center items-center">
        <div className="relative">

          <div className="">
            <div className="mt-14">
              <Image
                className="-mr-44"
                src="/globe.png"
                alt="globe"
                height={700}
                width={700}
              />
              <div className="-mt-24 ">
                <Image
                  className="-mb-80 -ml-10"
                  src="/Banner/Rectangle 9.png"
                  alt="1"
                  height={440}
                  width={440}
                />
                <Image
                  className=""
                  src="/Banner/Rectangle 13.png"
                  alt="1"
                  height={550}
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
