import { createContext, useState } from 'react';

export const CalculatorCtx = createContext(null);

export const CalculatorContextProvider = ({ children }) => {
  
  const [display, setDisplay] = useState('');

  const handleEqual = (value) => {
    if (value === '=') {
      const result = eval(display);
      setDisplay(result);
    }
  }

  const handleInput = (value) => {
    if (value !== '=' && value !== 'Clear') {
      setDisplay(display + value);
    }
  }

  const handleDisplay = (value) => {
    handleInput(value);
    handleEqual(value);
  }

  return (
    <CalculatorCtx.Provider value={{ display, handleDisplay}}>
      {children}
    </CalculatorCtx.Provider>
  )
}
