import { Screen } from './Screen';
import { ButtonsContainer } from './ButtonsContainer';

export const CalculatorContainer = () => {
  return (
    <article className='w-1/3 h-[490px] bg-violet-700 border-2 border-gray-400 rounded-lg shadow-lg shadow-purple-400'>
      <Screen />
      <ButtonsContainer />
    </article>
  )
}