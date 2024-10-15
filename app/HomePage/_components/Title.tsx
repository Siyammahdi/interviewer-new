import React from "react";
import clsx from "clsx";

interface TitleProps {
  children: string; 
  className?: string; 
}

const Title: React.FC<TitleProps> = ({
  children,
  className,
}) => {
  return <h1 className={clsx("text-5xl font-bold leading-snug text-left", className)}>{children}</h1>;
};

export default Title;
