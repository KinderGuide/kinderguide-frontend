import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { useClickOutside } from '../../../../../../hooks/useClickOutside';
import './SelectOption.scss';

export function SelectOption({ value, onChange, options }) {
  const [inputValue, setInputValue] = useState('');
  const [searchOption, setSearchOption] = useState([options]);
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const containerRef = useRef(null);

  useClickOutside(containerRef, () => {
    if (isOpen) setTimeout(() => setIsOpen(false), 200);
  });

  function searchOptions() {
    const searchOpt = options.filter((option) => {
      return option.toLowerCase().includes(inputValue.toLowerCase());
    });
    setSearchOption(searchOpt);
  }

  useEffect(() => {
    searchOptions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inputValue]);

  function isOptionSelected(option) {
    return value.includes(option);
  }

  useEffect(() => {
    if (isOpen) setHighlightedIndex(0);
  }, [isOpen]);

  useEffect(() => {
    const handler = (e) => {
      if (e.target !== containerRef.current) return;
      switch (e.code) {
        case 'Enter':
        case 'Space':
          setIsOpen((prev) => !prev);
          if (isOpen) onChange(options[highlightedIndex]);
          break;
        case 'ArrowUp':
        case 'ArrowDown': {
          if (!isOpen) {
            setIsOpen(true);
            break;
          }

          const newValue = highlightedIndex + (e.code === 'ArrowDown' ? 1 : -1);
          if (newValue >= 0 && newValue < options.length) {
            setHighlightedIndex(newValue);
          }
          break;
        }
        case 'Escape': {
          setIsOpen(false);
          break;
        }
        default:
          break;
      }
    };
    containerRef.current?.addEventListener('keydown', handler);
    const newRef = containerRef.current;

    return () => {
      newRef.removeEventListener('keydown', handler);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, highlightedIndex, options]);

  return (
    <div
      ref={containerRef}
      onClick={(e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
      }}
      tabIndex={0}
      className='select'
    >
      <div className='wrapper-value'>
        <span className='value'>
          {value.map((v, index) => (
            <button
              key={index + Date.now()}
              onClick={(e) => {
                e.stopPropagation();
                onChange(v);
              }}
              className='option-badge'
            >
              {v}
              <span className='remove-btn'>&times;</span>
            </button>
          ))}
          <input
            placeholder='Название станции'
            className='search-value'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </span>
      </div>
      <ul className={`options ${isOpen ? 'show' : ''}`} tabIndex={1}>
        {searchOption.map((option, index) => (
          <li
            onClick={(e) => {
              e.stopPropagation();
              onChange(option);
              setIsOpen(false);
              setInputValue('');
            }}
            onMouseEnter={() => setHighlightedIndex(index)}
            key={index + Date.now()}
            className={`option ${isOptionSelected(option) ? 'selected' : ''} ${
              index === highlightedIndex ? 'highlighted' : ''
            }`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
  );
}

SelectOption.propTypes = {
  value: PropTypes.array,
  onChange: PropTypes.func,
  options: PropTypes.array,
};

SelectOption.defaultProps = {
  value: ['Новогиреево'],
  onChange: undefined,
  options: [],
};
