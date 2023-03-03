import { useContext } from 'react';
import { CalculatorCtx } from '../context/CalculatorContext';

export const Screen = () => {

  const { numbers } = useContext(CalculatorCtx);

	return (
    <div className='w-full h-40 rounded-t-lg bg-slate-800 font-bold text-2xl text-white flex items-end p-4'>
      {numbers}
    </div>
  )
}
