import Section from "@/app/HomePage/_components/Section";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8">
      <Section>
        <div className="flex items-end px-4">
          {/* Bottom Section */}
          <div className="mt-8 w-1/4 font-semibold text-sm text-gray-700">
            <p>San Francisco, CA</p>
            <p>© 2024 Mercor</p>
          </div>
          <div className="w-3/4 flex justify-between">
            {/* Left Section */}
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

            {/* Middle Section */}
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

            {/* Right Section */}
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
