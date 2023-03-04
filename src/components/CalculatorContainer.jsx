import { Screen } from './Screen';
import { ButtonsContainer } from './ButtonsContainer';

export const CalculatorContainer = () => {
  return (
    <article className='w-full lg:w-[450px] p-4 h-[490px]'>
      <div className='w-full h-fit flex items-center justify-between'>
        <span className='font-bold text-3xl'>calc</span>
      </div>
       <Screen />
      <ButtonsContainer /> 
    </article>
  )
}