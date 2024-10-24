"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "@/app/HomePage/_components/Button";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import logo from "../../../Public/logo2.png"
import Image from "next/image";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 1, title: "Candidates", href: "/candidates", isActive: true },
    { id: 2, title: "Companies", href: "/companies", isActive: false },
    { id: 3, title: "Human Data", href: "/humandata", isActive: false },
    { id: 4, title: "Blog", href: "/blog", isActive: false },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#EEF9FB] fixed w-full top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <div>
          <Link href="/">
            <Image
              src={logo}
              alt="A sample image"
              width={1200}
              height={800}
              className="w-32 h-auto md:w-48"
            />
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isOpen ? (
              <AiOutlineClose size={28} />
            ) : (
              <AiOutlineMenu size={28} />
            )}
          </button>
        </div>

        <div
          className={`${isOpen ? "block" : "hidden"
            } md:flex flex-col md:flex-row gap-4 md:gap-8 text-lg font-medium absolute md:relative top-16 left-0 md:top-auto md:left-auto w-full md:w-auto bg-[#EEF9FB] md:bg-transparent p-4 md:p-0 shadow-lg md:shadow-none z-10`}
        >
          {navItems.map((item) => (
            <div key={item.id} className="text-center">
              <Link href={item.href}>
                <p
                  className="hover:text-blue-600 transition-colors block md:inline"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </p>
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden md:block">
          <Button variant="primary">Apply for work</Button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center mt-4">
          <Button variant="primary">Apply for work</Button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
