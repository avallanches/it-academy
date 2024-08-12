import React from 'react';

interface TestModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const TestModal: React.FC<TestModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="bg-white p-6 rounded-lg shadow-lg z-10 w-11/12 max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
          aria-label="Close"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default TestModal;
