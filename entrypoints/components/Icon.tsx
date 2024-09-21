import React from 'react';
import MagIcon from '@/assets/MagIcon.svg'
import '../popup/style.css';
const Icon = ({ onClick }) => {
  return (
    <img
      src={MagIcon} // Your icon path
      alt="Icon"
      className="cursor-pointer bg-white rounded-full p-2 z-100" // Keep it absolute
      onClick={onClick}
      width="18px"
      height="18px"
    />
  );
};

export default Icon;
