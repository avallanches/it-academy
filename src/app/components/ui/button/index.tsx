import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button className={`px-4 py-2 bg-blue-600 text-white rounded ${className}`} {...props}>
      {children}
    </button>
  );
};
