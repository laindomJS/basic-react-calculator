import { useContext } from 'react';
import { CalculatorCtx } from '../context/CalculatorContext';

export const Button = ({ children }) => {
	const { handleDisplay } = useContext(CalculatorCtx);

	return (
		<button
			onClick={() => handleDisplay(children)}
			className='w-16 h-16 rounded-md bg-zinc-700 text-white font-bold text-2xl'>
			{children}
		</button>
	)
}
