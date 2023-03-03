import { createContext, useState } from 'react';

export const CalculatorCtx = createContext(null);

export const CalculatorContextProvider = ({ children }) => {
  
  const [numbers, setNumbers] = useState('');

  const handleNumbers = (value) => {
    setNumbers(numbers + value);
  }

  return (
    <CalculatorCtx.Provider value={{ numbers, handleNumbers }}>
      {children}
    </CalculatorCtx.Provider>
  )
}
