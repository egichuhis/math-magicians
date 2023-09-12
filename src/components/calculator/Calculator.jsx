import React from 'react';
import './Calculator.css';
import CalculatorOutput from './CalculatorOutput';
import CalculatorInputs from './CalculatorInputs';

const Calculator = () => (
  <div>
    <div className="calculator">
      <CalculatorOutput />
      <CalculatorInputs />
    </div>
  </div>
);

export default Calculator;
