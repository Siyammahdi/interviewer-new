import Image from 'next/image';
import React from 'react';

type ExperienceProps = {
    title: string;
    company: string;
    period: string;
    level: string;
    description?: string[];
    image: string;
};

const levelColors: { [key: string]: string } = {
    "Exceptional": "bg-green-100 text-green-700",
    "Prestigious": "bg-blue-100 text-blue-700",
    "Good": "bg-yellow-100 text-yellow-700",
};



const ExperienceCard: React.FC<ExperienceProps> = ({ title, company, period, image, level, description }) => {
    return (
        <div className="flex items-start gap-4 mb-8">
            <div className="h-[22%] my-2 z-40 left-[55px] border-l-2 absolute"></div>
            {/* Company Logo */}
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                <Image
                    src={image} // Assume you have company logos named like "fitbit.png"
                    alt={`${company} logo`}
                    width={14}
                    height={14}
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            {/* Details */}
            <div>
                <div className="flex items-center justify-between gap-2">
                    <div className='flex items-center gap-3'>
                        <h3 className="text-lg font-semibold">{title}</h3>
                        <span className={`text-sm px-2 py-1 rounded-lg ${levelColors[level] || 'bg-gray-100 text-gray-700'}`}>
                            {level}
                        </span>
                    </div>
                    <p className="text-sm text-gray-500">{period}</p>
                </div>
                <p className="text-sm text-gray-500">{company}</p>
                <p className="mt-2 text-sm text-gray-700">{description}</p>
            </div>
        </div>
    );
};

export default ExperienceCard;
