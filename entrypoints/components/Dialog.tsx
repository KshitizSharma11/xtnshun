import React from 'react';
import Vector from '@/assets/Download.svg';
import Regenerate from '@/assets/Regenerate.svg';
import '../popup/style.css';

interface DiaProps {
  prompt: string;
}

const defaultAns =
  "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

const Dialog: React.FC<DiaProps> = ({ prompt }) => {

  // Function to insert message into the LinkedIn input field
  const insertMessage = () => {
    const inputField = document.querySelector('.msg-form__contenteditable');
    
    if (inputField) {
      // Set the content of the input field as if it was typed
      inputField.innerHTML = `<p>${defaultAns}</p>`;

      // Dispatch an 'input' event to simulate user typing
      const event = new Event('input', { bubbles: true });
      inputField.dispatchEvent(event);

      console.log('Message inserted and input event dispatched');
    } else {
      console.log('LinkedIn input field not found');
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-4 my-4">
        {/* User Prompt */}
        <div className="max-w-[80%] self-end p-4 rounded-lg bg-gray-100 text-right inline-block">
          <h1 className="text-lg">{prompt}</h1>
        </div>
        
        {/* Default Answer */}
        <div className="max-w-[80%] self-start p-4 rounded-lg bg-[#DBEAFE] inline-block">
          <h1 className="text-lg">{defaultAns}</h1>
        </div>
      </div>
      <input
        type="text"
        className="w-full h-10 p-2 border border-gray-300 rounded mb-4"
        placeholder="Type your prompt here..."
      />
      <div className="flex justify-end gap-2">
        <button
          className="px-3 flex flex-row items-center gap-2 py-1 border-solid border border-gray-600 bg-transparent text-gray-600 rounded hover:bg-green-300"
          onClick={insertMessage} // Trigger insert function on click
        >
          <img src={Vector} className="w-4 h-4" alt="Download" />
          <h1 className="text-lg">Insert</h1>
        </button>
        <button
          className="px-3 flex flex-row items-center gap-2 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={() => console.log('Generate clicked')}
        >
          <img src={Regenerate} className="w-4 h-4" alt="Generate" />
          <h1 className="text-lg text-white">Regenerate</h1>
        </button>
      </div>
      </>
  );
};

export default Dialog;
