import React from "react";
import Section from "../_components/Section";
import Title from "../_components/Title";
import Image from "next/legacy/image";
import Button from "../_components/Button";
import { IoIosArrowRoundForward } from "react-icons/io";
import globeImg from "../../../Public/globe.png"
import dash1 from "@/Public/Banner/dashboard 1.png"
import dash2 from "@/Public/Banner/dashboard 2.png"
import gradiant from "@/Public/Banner/Rectangle 12.png"

const Banner = () => {
  return (
    <Section>
      <div className="relative flex justify-between">
        <div className="md:w-1/2 space-y-4 md:space-y-8">
          <p className="py-2 px-6 rounded-full border border-t-2 text-xs mt-20 w-fit">Mercor raises $32 million to find your next job <span className="text-blue-500">• Read Forbes</span></p>
          <Title>Mercor matches you with elite opportunities</Title>
          <p className="w-3/4 text-xs md:text-sm lg:text-base">
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
        <div className="w-1/2 relative">
          <div className="absolute bottom-14 -right-24">
            <Image
              src={globeImg}
              alt="globe"
              height={400}
              width={800}
            />
          </div>
          <div className="absolute top-60 -left-9">
            <Image
              className=""
              src={dash1}
              alt="1"
              height={340}
              width={600}
            />
          </div>
          <div className="absolute top-72">
            <Image
              className=""
              src={dash2}
              alt="1"
              height={340}
              width={600}
            />
          </div>
        </div>
        <div className="absolute -bottom-48">
          <Image className="" src={gradiant} width={1200} height={200} alt="grad" />
        </div>
      </div>
    </Section>
  );
};

export default Banner;
