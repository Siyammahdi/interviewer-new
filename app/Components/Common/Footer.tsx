"use client"

import Section from "@/app/HomePage/_components/Section";
import { usePathname } from "next/navigation";
import React from "react";

const Footer: React.FC = () => {

  const pathname = usePathname();
  const isSpacialRoute = pathname.includes("/companies") || pathname.includes("/candidates") ? "hidden" : "block";

  return (
    <footer className={`${isSpacialRoute} py-8`}>
      <Section>
        <div className="flex flex-col md:flex-row md:items-end px-4 text-xs md:text-sm lg:text-base">
          <div className="mt-8 md:w-1/4 mb-5 md:mb-0  font-semibold text-sm text-gray-700">
            <p>San Francisco, CA</p>
            <p>© 2024 Mercor</p>
          </div>
          <div className="md:w-3/4 flex justify-between">
            <div>
              <ul className="space-y-2">
                <li className="font-bold">For companies</li>
                <li>Search</li>
                <li>Shortlist</li>
                <li>Team</li>
              </ul>
              <ul className="mt-8 space-y-2">
                <li className="font-bold">Human data</li>
                <li>Guide</li>
                <li>Process</li>
                <li>Data pipelines</li>
                <li>Incentives</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="font-bold">For candidates</li>
                <li>Apply</li>
                <li>Profile</li>
                <li>Interviews</li>
                <li>Resume feedback</li>
                <li>Payment</li>
              </ul>
              <ul className="mt-8 space-y-2">
                <li className="font-bold">Support</li>
                <li>Contact us</li>
                <li>Schedule call</li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2">
                <li className="font-bold">Resources</li>
                <li>Blog</li>
                <li>Documentation</li>
                <li>Tutorials</li>
                <li>Privacy policy</li>
                <li>Worker terms</li>
                <li>Client terms</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
