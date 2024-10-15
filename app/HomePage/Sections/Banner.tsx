import React from "react";
import Section from "../_components/Section";
import Title from "../_components/Title";
import Image from "next/image";
import Button from "../_components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";

const Banner = () => {
  return (
    <Section>
      <div className="flex justify-between">
        <div className="w-1/2 space-y-8">
          <p className="py-2 px-6 rounded-full border border-t-2 text-xs mt-5 w-fit">Mercor raises $32 million to find your next job <span className="text-blue-500">• Read Forbes</span></p>
          <Title>Mercor matches you with elite opportunities</Title>
          <p className="w-3/4">
            Join the thousands of candidates around the world using Mercor to
            land their remote dream job with just a single application.
          </p>
          <div className="flex gap-2 ">
            <Button>Apply for work</Button>
            <Button
              variant="secondary"
              classname="flex items-center justify-center gap-2"
            >
              Hire instantly{" "}
              <IoIosArrowRoundForward className="text-2xl mt-1" />{" "}
            </Button>
          </div>
        </div>
        <div className="mt-14">
          <Image
            className=""
            src="/globe.png"
            alt="globe"
            height={600}
            width={600}
          />
          <div className="-mt-44 -ml-8">
            <Image
              className="-mb-64 -ml-8"
              src="/Banner/dashboard 1.png"
              alt="1"
              height={550}
              width={550}
            />
            <Image
              className=""
              src="/Banner/dashboard 2.png"
              alt="1"
              height={550}
              width={550}
            />
          </div>
        </div>
        <Image className="absolute bottom-52" src="/Banner/Rectangle 12.png" width={1200} height={1000} alt="grad" />
      </div>
    </Section>
  );
};

export default Banner;
