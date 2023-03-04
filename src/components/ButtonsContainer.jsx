import { Button } from './Button';

export const ButtonsContainer = () => {
  return (
    <div className='w-full h-full'>
      <Button type="number" value="1" />
      <Button type="number" value="2" />
      <Button type="number" value="3" />
      <Button type="number" value="4" />
      <Button type="number" value="5" />
      <Button type="number" value="6" />
      <Button type="number" value="7" />
      <Button type="number" value="8" />
      <Button type="number" value="9" />
      <Button type="number" value="0" />
      <Button type="operator" value="+" />
      <Button type="operator" value="-" />
      <Button type="operator" value="*" />
      <Button type="operator" value="/" />
      <Button type="action" value="=" />
      <Button type="action" value="Clear" />
    </div>
  )
}
