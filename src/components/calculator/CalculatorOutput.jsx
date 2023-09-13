import React from 'react';
import PropTypes from 'prop-types';

const CalculatorOutput = ({ calculatorData }) => (
  <div className="output" id="output">{calculatorData.next || calculatorData.total || '0'}</div>
);

CalculatorOutput.propTypes = {
  calculatorData: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }),
};

CalculatorOutput.defaultProps = {
  calculatorData: {
    total: '',
    next: '',
    operation: '',
  },
};

export default CalculatorOutput;
