"use client"

import React from 'react';
import { LuUpload } from 'react-icons/lu';
import { PiFileTextLight } from 'react-icons/pi';
import { TypeAnimation } from 'react-type-animation';

const PageHeading = () => {
  return (
    <div className="flex md:flex-row flex-col justify-between gap-16 md:gap-0 items-center">
      <div>
        <div className='text-2xl md:text-3xl lg:text-5xl font-semibold'>
          <div className='flex gap-3'>
            <h1 className=''>Get hired for</h1>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                'engineering',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'operations',
                1000,
                'Ui designs',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: 'inline-block', color: 'blue' }}
              repeat={Infinity}
            />
          </div>
          <h1>with Mercor.</h1>
        </div>
        <p className="text-gray-400 mt-4">
          Join 300,000+ professionals in landing your remote dream job.
        </p>
      </div>
      <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl py-10 p-6 md:w-2/5 my-auto text-center">
        <div className='flex justify-center my-3 text-gray-500'><PiFileTextLight size={40} /></div>
        <h2 className="font-semibold">Get started</h2>
        <p className="text-gray-500 text-sm mt-2">
          Upload your resume to start the interview process and complete your profile.
        </p>
        <button className="mt-4 px-6 py-3 flex items-center gap-2 mx-auto bg-blue-500 text-white rounded-2xl hover:bg-indigo-600">
          <LuUpload />
          Upload resume
        </button>
      </div>
    </div>
  );
};

export default PageHeading;