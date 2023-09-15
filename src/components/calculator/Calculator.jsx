import React, { useState } from 'react';
import './Calculator.css';
import CalculatorOutput from './CalculatorOutput';
import CalculatorInputs from './CalculatorInputs';
import calculate from '../../logic/calculate';

const Calculator = () => {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (buttonName) => {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  };

  return (
    <div className="calculator">
      <CalculatorOutput calculatorData={calculatorData} />
      <CalculatorInputs handleClick={handleClick} />
    </div>
  );
};

export default Calculator;
