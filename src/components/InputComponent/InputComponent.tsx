import React, { useEffect, useRef, useState } from 'react';

interface InputComponentProps {
  type?: 'text' | 'number' | 'email';
  required?: boolean;
  min?: number;
  max?: number;
  setText?: (text: string) => void;
  label?: string;
  inputClass?: string;
  containerClass?: string;
  labelClass?: string;
  placeholder?: string;
  value: string;
}

const InputComponent: React.FC<InputComponentProps> = React.memo(
  ({
  type = 'text',
  required = false,
  min,
  max,
  setText,
  label,
  inputClass = '',
  containerClass = '',
  labelClass = '',
  placeholder = '',
  value = '',
}) => {
  const [inputText, setInputText] = useState<string>(value);
  const [error, setError] = useState<string | null>(null);

  const validateInput = (value: string) => {
    //alert(label)
    setInputText(value); // Update the state in real-time as the user types

    if (required && value.trim() === '') {
      setError('This field is required.');
      if (setText) {
        console.log(value, 'oop')
        setText(value);
      }
    } else if (type === 'number') {
      if (!/^\d*$/.test(value)) {
        setError('Please enter a valid number.');
      } else if (
        (min !== undefined && parseInt(value) < min) ||
        (max !== undefined && parseInt(value) > max)
      ) {
        setError(
          `Number must be between ${min !== undefined ? min : '-∞'} and ${
            max !== undefined ? max : '+∞'
          }.`
        );
      } else {
        setError(null);
        if (setText) {
          console.log(value, 'oop')
          setText(value);
        }
      }
    } else if (type === 'email' && !isValidEmail(value)) {
      setError('Invalid email format.');
      if (setText) {
        console.log(value, 'oop')
        setText(value);
      }
    } else if (type === 'text') {
      if (min !== undefined && value.length < min) {
        setError(`Minimum length is ${min} characters.`);
      } else if (max !== undefined && value.length > max) {
        setError(`Maximum length is ${max} characters.`);
      } else {
        setError(null);
        if (setText) {
          console.log(value, 'oopo')
          setText(value);
        }
      }
    } else {
      setError(null);
      if (setText) {
        setText(value);
      }
    }
  };

  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className={`${containerClass}`}>
      <div className='w-full'>
        {label && <label className={`${labelClass}`}>{label}</label>}
        <input
          type={type}
          className={`border px-3 py-2 rounded ${
            error ? 'border-red-500' : 'border-gray-300'
          } focus:outline-none focus:ring focus:border-blue-300 ${inputClass}`}
          value={value}
          onChange={(e) => validateInput(e.target.value)} // Real-time validation
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
});

export default InputComponent;