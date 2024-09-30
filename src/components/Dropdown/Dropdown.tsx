import React, { useState, useEffect, useRef } from 'react';
import cn from 'classnames'

import UpArrow from '../../assets/upArrow.svg?react'
import DownArrow from '../../assets/downArrow.svg?react'

interface DropdownProps {
  options: string[];               // Array of options
  containerStyle?: string;          // Custom styles for container
  buttonStyle?: string;          // Custom styles for container
  selectedTextStyle?: string;          // Custom styles for container
  iconUpStyle?: string;          // Custom styles for container
  iconDownStyle?: string;          // Custom styles for container
  dropdownStyle?: string;           // Custom styles for dropdown
  iconUp?: JSX.Element;               // Optional icon for dropdown
  iconDown?: JSX.Element;               // Optional icon for dropdown
  defaultLabel?: string;            // Default label to show when no selection is made
  selectedOption: string | null;    // Current selected option (controlled by parent)
  onOptionSelect: (option: string) => void; // Callback to send selected option to parent
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  buttonStyle,
  selectedTextStyle,
  containerStyle = "",
  dropdownStyle = "",
  iconUpStyle,
  iconDownStyle,
  iconUp,
  iconDown,
  defaultLabel = "Select an option",
  selectedOption,
  onOptionSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    let selected = option===defaultLabel ? '' : option
    onOptionSelect(selected); // Call the parent's callback with the selected option
    setIsOpen(false);
  };
  options = [...options, defaultLabel]

  // Close dropdown if clicked outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false); // Close the dropdown
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const defaultIconStyle = 'w-[15px]'
  const iconUpDisplay = iconUp ? <span className="ml-2">{iconUp}</span> : <UpArrow className={cn(`${iconUpStyle ? iconUpStyle : defaultIconStyle}`)} />
  const iconDownDisplay = iconDown ? <span className="ml-2">{iconDown}</span> : <DownArrow className={cn(`${iconUpStyle ? iconDownStyle : defaultIconStyle}`)} />

  return (
    <div ref={dropdownRef} className={`relative inline-block text-left min-w-[200px] ${containerStyle}`}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className={cn(`
          flex items-center justify-between px-4 py-2 rounded-lg shadow-sm w-full
          ${
            buttonStyle ? buttonStyle : 'bg-white hover:bg-gray-100 border border-gray-300 '
          }
        `)}
      >
        <span
          className={cn(`
            ${
              selectedTextStyle ? selectedTextStyle : ''
            }
          `)}
        >
          {selectedOption || defaultLabel}
        </span>
        {
          isOpen ?  iconUpDisplay : iconDownDisplay
        }
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div 
          className={cn(`
            absolute w-full shadow-lg rounded-b-lg z-10
            ${dropdownStyle ? dropdownStyle : 'bg-white'}
          `
          )}
        >
          <ul className="py-1">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 cursor-pointer hover:bg-gray-100"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;