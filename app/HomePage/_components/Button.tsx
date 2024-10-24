import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
  children: React.ReactNode;
  classname?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', onClick, children, classname }) => {
  return (
    <button
      className={clsx(
        'px-4 py-1 text-xs md:px-6 md:py-2 lg:px-8 lg:py-3 md:text-sm lg:text-base rounded-full transition-all', // Responsive padding and text size
        variant === 'primary'
          ? 'bg-[#508FEE] hover:bg-[#3078DD] font-semibold text-white'
          : 'bg-transparent text-black font-bold hover:bg-gray-200',
        classname
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
