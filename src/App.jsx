import { CalculatorContainer } from './components/CalculatorContainer';
import { CalculatorContextProvider } from './context/CalculatorContext';

export const App = () => {
	return (
		<div className='w-full lg:w-full min-h-screen lg:flex lg:justify-center lg:align-center lg:place-items-start grid grid-cols-1 place-content-center place-items-center bg-light-gray px-2 lg:px-0 lg:pt-10'>
			<CalculatorContextProvider>
				<CalculatorContainer />
			</CalculatorContextProvider>
		</div>
	)
}
