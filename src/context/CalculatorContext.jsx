import { createContext, useState } from 'react';

export const CalculatorCtx = createContext(null);

export const CalculatorContextProvider = ({ children }) => {
	const [memory, setMemory] = useState(0);
	const [currentValue, setCurrentValue] = useState(0);
	const [operation, setOperation] = useState(null);
	const [isReset, setIsReset] = useState(true);

	const addNumber = (value) => {
		if (isReset) {
			setCurrentValue(value);
			setIsReset(false);
		} else {
			const newValue = currentValue + value;
			setCurrentValue(newValue);
		}
	}

	const handleOperation = (oper) => {
		if (currentValue) {
			if (operation) {
				getResult();
				setIsReset(true);
				setOperation(oper);
			} else {
				setOperation(oper);
				setMemory(currentValue);
				setCurrentValue(0);
				setIsReset(true);
			}
		}
	}

	const clean = () => {
		setCurrentValue(0);
		setOperation(null);
		setMemory(0);
		setIsReset(true);
	}

	const getResult = () => {
		let result;

		if (currentValue && operation && memory) {
			if (operation === '+')
				result = parseFloat(memory) + parseFloat(currentValue);
			if (operation === '-')
				result = parseFloat(memory) - parseFloat(currentValue);
			if (operation === '*')
				result = parseFloat(memory) * parseFloat(currentValue);
			if (operation === '/')
				result = parseFloat(memory) / parseFloat(currentValue);
		} else {
      return;
    }

		setCurrentValue(result);
    setOperation(null);
    setMemory(result);
    setIsReset(true);
  }

	const handleAction = (action) => {
		if (action === '=') {
			getResult();
		}

		if (action === 'Clear') {
			clean();
		}
	}

	const handleClick = (type, value) => {
		switch (type) {
			case 'number':
				addNumber(value);
				break;

			case 'operator':
				handleOperation(value);
				break;

			case 'action':
				handleAction(value);
				break;
		}
	}

	return (
		<CalculatorCtx.Provider value={{ currentValue, handleClick }}>
			{children}
		</CalculatorCtx.Provider>
	)
}
