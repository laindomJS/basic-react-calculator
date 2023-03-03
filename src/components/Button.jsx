import { useContext } from 'react';
import { CalculatorCtx } from '../context/CalculatorContext';

export const Button = ({ children }) => {
  
  const { handleNumbers } = useContext(CalculatorCtx);

  return (
    <button onClick={() => handleNumbers(children)} className='w-16 h-16 rounded-md bg-zinc-700 text-white font-bold text-2xl'>  
      {children}
    </button>
  )
}