import React from 'react';

interface ProgressStepProps {
  label: string;
  time: string;
  isActive: boolean;
}

const ProgressStep: React.FC<ProgressStepProps> = ({ label, time, isActive }) => {
  return (
    <div className="flex flex-col items-center">
      <div className={`w-[28vw] h-3 rounded-full ${isActive ? 'bg-indigo-500' : 'bg-gray-200'} transition-colors duration-300`}></div>
      <span className={`mt-2 font-semibold ${isActive ? 'text-black' : 'text-gray-400'}`}>{label}</span>
      <span className={`text-sm ${isActive ? 'text-black' : 'text-gray-400'}`}>{time}</span>
    </div>
  );
};

const Progress: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full px-32 mt-8">
      {/* Upload Resume Step */}
      <ProgressStep label="Upload Resume" time="2 mins" isActive={true} />
      
      {/* Take Interview Step */}
      <ProgressStep label="Take Interview" time="20 mins" isActive={false} />

      {/* Complete Profile Step */}
      <ProgressStep label="Complete Profile" time="5 mins" isActive={false} />
    </div>
  );
};

export default Progress;
