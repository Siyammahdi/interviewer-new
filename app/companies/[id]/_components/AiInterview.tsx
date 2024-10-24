
import React from 'react';
import { GoPlay } from 'react-icons/go';

const AIInterview: React.FC = () => {
  return (
    <div className="mt-6 px-12">
      <h2 className="text-lg font-semibold">AI Interview</h2>
      <div className=" mt-4 bg-black rounded-2xl py-28 flex items-center justify-center">
      <GoPlay className='text-white' size={200} />
      </div>
    </div>
  );
};

export default AIInterview;
