import { useState } from 'react';
import genLogo from '@/assets/Vector.svg';
import wxtLogo from '/wxt.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    < >
  <div className="px-10 py-4 flex w-72  flex-col bg-gray-700">
    {/* Input field */}
  <h1 className='text-lg text-green-200'>Welcome to work of Kshitiz Sharma</h1>
  <h1 className='text-xl text-blue-300'>Hope I met Your Expectations</h1>
  </div>
  </>

  );
}

export default App;
