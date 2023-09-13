import React from 'react';
import PropTypes from 'prop-types';

const CalculatorInputs = ({ handleClick }) => (
  <div className="buttons">
    <button type="button" onClick={() => handleClick('AC')}>
      AC
    </button>
    <button type="button" onClick={() => handleClick('+/-')}>
      +/-
    </button>
    <button type="button" onClick={() => handleClick('%')}>
      %
    </button>
    <button type="button" className="ops-color" onClick={() => handleClick('÷')}>
      ÷
    </button>
    <button type="button" onClick={() => handleClick('7')}>
      7
    </button>
    <button type="button" onClick={() => handleClick('8')}>
      8
    </button>
    <button type="button" onClick={() => handleClick('9')}>
      9
    </button>
    <button type="button" className="ops-color" onClick={() => handleClick('x')}>
      x
    </button>
    <button type="button" onClick={() => handleClick('4')}>
      4
    </button>
    <button type="button" onClick={() => handleClick('5')}>
      5
    </button>
    <button type="button" onClick={() => handleClick('6')}>
      6
    </button>
    <button type="button" className="ops-color" onClick={() => handleClick('-')}>
      -
    </button>
    <button type="button" onClick={() => handleClick('1')}>
      1
    </button>
    <button type="button" onClick={() => handleClick('2')}>
      2
    </button>
    <button type="button" onClick={() => handleClick('3')}>
      3
    </button>
    <button type="button" className="ops-color" onClick={() => handleClick('+')}>
      +
    </button>
    <button type="button" className="two-columns" onClick={() => handleClick('0')}>
      0
    </button>
    <button type="button" onClick={() => handleClick('.')}>
      .
    </button>
    <button type="button" className="ops-color" onClick={() => handleClick('=')}>
      =
    </button>
  </div>
);

CalculatorInputs.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default CalculatorInputs;
