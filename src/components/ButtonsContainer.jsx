import { Button } from './Button';
import { keys } from '../utils/data';

export const ButtonsContainer = () => {
	return (
		<div className='w-full grid grid-cols-4 place-items-center bg-grayish-red mt-6 p-4 gap-3 rounded-md'>
			{keys.map((key) => (
				<Button key={key.value} {...key} />
			))}
		</div>
	)
}
