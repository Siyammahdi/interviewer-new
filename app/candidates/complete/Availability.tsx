"use client"
import React, { useState } from 'react';
import { AiOutlineLaptop } from 'react-icons/ai';
import { BsSuitcaseLg } from 'react-icons/bs';
import { PiClockClockwise } from 'react-icons/pi';

interface Option {
  value: string;
  label: string;
  description: string;
  icon: JSX.Element;
}

const Availability: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState<string>('full-time');

  const options: Option[] = [
    {
      value: 'full-time',
      label: 'Full time',
      description: 'I can start working at least 8 hours per day as my primary job.',
      icon: <BsSuitcaseLg className="h-6 w-6" />, // Using React Icon
    },
    {
      value: 'part-time',
      label: 'Part time',
      description: 'I can start working at least 4 hours per day.',
      icon: <AiOutlineLaptop className="h-6 w-6" />, // Using React Icon
    },
    {
      value: 'flexible',
      label: "I'm flexible",
      description: 'I can work both full time or part time.',
      icon: <PiClockClockwise className="h-7 w-7" />, // Using React Icon
    },
  ];

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-4xl font-semibold mb-2">Whats your work availability?</h2>
      <p className="text-gray-500 mb-8">You can change this anytime.</p>
      <div className="space-y-4">
        {options.map((option) => (
          <label
            key={option.value}
            className={`flex items-center justify-between p-6 border-2 rounded-xl hover:border-blue-500 hover:bg-blue-50 cursor-pointer transition ${
              selectedOption === option.value
                ? 'border-blue-500 bg-blue-50'
                : 'border-gray-300'
            }`}
          >
            <div className="flex items-center">
              <input
                type="radio"
                name="work-availability"
                value={option.value}
                checked={selectedOption === option.value}
                onChange={() => setSelectedOption(option.value)}
                className="form-radio h-5 w-5 text-blue-600"
              />
              <div className="ml-3">
                <p className="text-lg font-medium">{option.label}</p>
                <p className="text-sm text-gray-500">{option.description}</p>
              </div>
            </div>
            <div className={`${
              selectedOption === option.value
                ? 'text-blue-500'
                : 'text-gray-500'
            }`} >{option.icon}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Availability;
