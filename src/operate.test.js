import operate from './logic/operate';

describe('operate', () => {
  it('should perform addition correctly', () => {
    expect(operate('2', '3', '+')).toBe('5');
  });

  it('should perform subtraction correctly', () => {
    expect(operate('5', '2', '-')).toBe('3');
  });

  it('should perform multiplication correctly', () => {
    expect(operate('4', '3', 'x')).toBe('12');
  });

  it('should perform division correctly', () => {
    expect(operate('10', '2', '÷')).toBe('5');
  });

  it('should handle division by zero gracefully', () => {
    expect(operate('5', '0', '÷')).toBe("Can't divide by 0.");
  });

  it('should perform modulo operation correctly', () => {
    expect(operate('7', '3', '%')).toBe('1');
  });

  it('should handle modulo with zero divisor gracefully', () => {
    expect(operate('8', '0', '%')).toBe("Can't find modulo as can't divide by 0.");
  });

  it('should throw an error for unknown operations', () => {
    expect(() => operate('2', '3', '&')).toThrow("Unknown operation '&'");
  });
});
