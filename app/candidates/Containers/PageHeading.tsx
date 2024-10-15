
import React from 'react';
import { LuUpload } from 'react-icons/lu';
import { PiFileTextLight } from 'react-icons/pi';

const PageHeading = () => {
    return (
                <div className="flex justify-between items-center p-32">
      <div>
        <h1 className="text-5xl font-bold">
          Get hired for <span className="text-indigo-500">engin|</span>
          <br /> with Mercor.
        </h1>
        <p className="text-gray-400 mt-4">
          Join 300,000+ professionals in landing your remote dream job.
        </p>
      </div>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-2/5 py-32 my-auto text-center">
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