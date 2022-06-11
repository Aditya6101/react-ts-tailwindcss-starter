import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className='w-full pt-4 text-center align-middle'>
      <h1 className='text-2xl font-bold'>Hellow World!</h1>
      <span className='block my-2 text-xl font-semibold'>Count: {count}</span>
      <button
        className='px-2 mx-4 text-base font-medium text-white bg-purple-600 active:scale-95'
        onClick={(e) => setCount((prev) => prev + 1)}
      >
        +
      </button>
      <button
        className='px-2 mx-4 text-base font-medium text-white bg-purple-600 active:scale-95'
        onClick={(e) => setCount((prev) => prev - 1)}
      >
        -
      </button>
    </div>
  );
};

export default App;
