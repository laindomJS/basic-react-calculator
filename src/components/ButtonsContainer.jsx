import { Button } from './Button';
import { keys } from '../utils/data';

export const ButtonsContainer = () => {
	return (
		<div className='w-full h-full'>
			{keys.map((key) => (
				<Button key={key.value} {...key} />
			))}
		</div>
	)
}
