import React from "react";
import clsx from "clsx";

interface TitleProps {
  children: string;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className }) => {
  return (
    <h1
      className={clsx(
        "text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug text-left", // Responsive text sizes
        className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
