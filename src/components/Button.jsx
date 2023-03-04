import { useContext } from 'react';
import { CalculatorCtx } from '../context/CalculatorContext';

export const Button = ({ type, value }) => {
	const { handleClick } = useContext(CalculatorCtx);

	const customClass = value === 'Clear' 
	? 'w-full text-lg h-12 rounded-md bg-dark-moderate-cyan font-bold text-white shadow-sm shadow-dark-grayish-orange lg:ml-8'
	: 'w-12 h-12 rounded-md bg-light-grayish-yellow font-bold text-2xl shadow-sm shadow-dark-grayish-orange lg:w-16 lg:h-16 lg:text-3xl';

	return (
		<button
			onClick={() => handleClick(type, value)}
			className={customClass}>
			{value}
		</button>
	)
}
