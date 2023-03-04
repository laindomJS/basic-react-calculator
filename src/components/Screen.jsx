import { useContext } from 'react';
import { CalculatorCtx } from '../context/CalculatorContext';

export const Screen = () => {

  const { currentValue } = useContext(CalculatorCtx);

	return (
    <div className='w-full mt-4 h-24 rounded-lg bg-very-light-gray font-bold text-5xl text-very-dark-grayish-yellow flex items-end justify-end p-4'>
      {currentValue}
    </div>
  )
}
