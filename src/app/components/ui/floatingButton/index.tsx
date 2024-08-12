'use client';

import { useState } from 'react';
import { MdWhatsapp } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { BsChatLeftDotsFill } from "react-icons/bs";
import Link from 'next/link';


const FloatingButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col items-center">
      {/* Action Buttons */}
      <div
        className={`flex flex-col items-center space-y-4 mb-4 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <Link href="https://t.me/@L_Atreides" target='_blank'>
        <button className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none">
          <span><FaTelegramPlane /></span>
        </button>
        </Link>
        <Link href="https://wa.me/+996772000562" target='_blank'>
        <button className="bg-green-500 rounded-full w-12 h-12 flex items-center justify-center text-white focus:outline-none">
          <span><MdWhatsapp /></span>
        </button>
        </Link>
      </div>

      {/* Main Floating Button */}
      <button
        onClick={toggleMenu}
        className="bg-blue-800 rounded-full w-14 h-14 flex items-center justify-center text-white focus:outline-none transition-all duration-300 ease-in-out"
      >
        {isOpen ? (
          <span className="text-2xl">✕</span> // Close icon
        ) : (
          <span className="text-2xl"><BsChatLeftDotsFill /></span> // Chat icon
        )}
      </button>
    </div>
  );
};

export default FloatingButton;
