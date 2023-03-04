import { useContext } from 'react';
import { CalculatorCtx } from '../context/CalculatorContext';

export const Button = ({ type, value }) => {
	const { handleClick } = useContext(CalculatorCtx);

	return (
		<button onClick={() => handleClick(type, value)} className='w-16 h-16 rounded-md bg-zinc-700 text-white font-bold text-2xl'>
			{value}
		</button>
	)
}
