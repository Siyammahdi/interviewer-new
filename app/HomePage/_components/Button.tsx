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
        'w-44 h-11 text-sm rounded-full ',
        variant === 'primary' ? 'bg-[#508FEE] hover:bg-[#3078DD] font-semibold  text-white' : 'bg-transparent text-black font-bold hover:bg-gray-200', classname
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
