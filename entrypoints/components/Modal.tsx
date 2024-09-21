import React, { useState, useRef, useEffect } from 'react';
import '../popup/style.css';
import Dialog from './Dialog';
import Vector from '@/assets/Vector.svg';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }) => {
  const [Dia, setDia] = useState(false);
  const [prompt, setPrompt] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrompt(e.target.value);
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div ref={modalRef} className="bg-[#F9FAFB] p-4 rounded-lg shadow-lg w-[870px] relative">
        {!Dia && 
          <>
            <input
              type="text"
              className="w-full h-10 p-2 border border-gray-300 rounded mb-4"
              placeholder="Type your prompt here..."
              value={prompt} // Bind input value to prompt state
              onChange={handleInputChange} // Update state on change
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-3 flex flex-row items-center gap-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                onClick={() => setDia(true)}
              >
                <img src={Vector} className="w-4 h-4" alt="Generate" />
                <h1 className="text-lg text-white">Generate</h1>
              </button>
            </div>
          </>
}
        {Dia &&  <Dialog prompt={prompt} />
        }
      </div>
    </div>
  );
};

export default Modal;
