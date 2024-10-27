"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

interface ProgressStepProps {
  label: string;
  time: string;
  isActive: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ label, time, isActive }) => {
  return (
    <div className="w-full flex flex-col items-center">
      <div 
        className={`w-full h-3 rounded-full bg-gray-200 transition-colors duration-300 overflow-hidden`}
      >
        <div
          className={`h-full ${isActive ? 'bg-blue-500' : 'bg-gray-200'}`}
          style={{
            transition: 'width 0.5s ease-in-out',
            width: isActive ? '100%' : '0%',
          }}
        ></div>
      </div>
      <span className={`text-sm md:text-base mt-2 font-semibold ${isActive ? 'text-black' : 'text-gray-400'}`}>{label}</span>
      <span className={`text-xs md:text-sm ${isActive ? 'text-black' : 'text-gray-400'}`}>{time}</span>
    </div>
  );
};

const Progress: React.FC = () => {
  const pathname = usePathname();
  const isStartRoute = pathname?.includes('/start');
  const isInterviewRoute = pathname?.includes('/interview');
  const isCompleteRoute = pathname?.includes('/complete');

  return (
    <div className="flex gap-2 items-center justify-between w-full mt-8">
      {/* Upload Resume Step - Active if on start or interview route */}
      <ProgressStep label="Upload Resume" time="2 mins" isActive={isStartRoute || isInterviewRoute || isCompleteRoute} />
      
      {/* Take Interview Step - Active if on interview route */}
      <ProgressStep label="Take Interview" time="20 mins" isActive={isInterviewRoute || isCompleteRoute} />

      {/* Complete Profile Step */}
      <ProgressStep label="Complete Profile" time="5 mins" isActive={isCompleteRoute} />
    </div>
  );
};

export default Progress;
