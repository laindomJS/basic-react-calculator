import { CalculatorContainer } from './components/CalculatorContainer';
import { CalculatorContextProvider } from './context/CalculatorContext';

export const App = () => {
	return (
		<div className='w-full min-h-screen flex justify-center items-center bg-slate-300'>
      <CalculatorContextProvider>
			  <CalculatorContainer />
      </CalculatorContextProvider>
		</div>
	)
}
