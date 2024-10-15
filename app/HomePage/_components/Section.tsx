import clsx from 'clsx';
import React from 'react';

interface SectionProps {
    children: React.ReactNode;
    className?: string; 
    fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className, fullWidth = false }) => {
    return (
        <div
            className={clsx(
                fullWidth ? 'w-full' : 'max-w-7xl',
                'mx-auto px-4 sm:px-6 lg:px-8 py-8',
                className
            )}
        >
            {children}
        </div>
    );
};

export default Section;
