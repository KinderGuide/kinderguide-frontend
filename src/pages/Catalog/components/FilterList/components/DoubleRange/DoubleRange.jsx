import React, { useCallback, useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import './DoubleRange.scss';

export const DoubleRange = ({ min, max, value, onChange }) => {
  const [values, setValues] = useState({
    minVal: value.minVal,
    maxVal: value.maxVal,
  });
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Задает ширину диапазона для уменьшения с левой стороны
  useEffect(() => {
    const minPercent = getPercent(values.minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [values.minVal, getPercent]);

  // Задает ширину диапазона для уменьшения с правой стороны
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(values.maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [values.maxVal, getPercent]);

  function debounce(func, delay) {
    let timerId;
    return function (...args) {
      if (timerId) {
        clearTimeout(timerId);
      }
      timerId = setTimeout(() => {
        func(...args);
      }, delay);
    };
  }

  useEffect(() => {
    const delayedOnChange = debounce(onChange, 1000);
    delayedOnChange(values);
  }, [values]);

  return (
    <div className='container'>
      <div className='values'>
        <input
          placeholder='от 1000'
          className='values__left'
          value={values.minVal}
          onChange={(event) => {
            if (isNaN(event.target.value)) {
              setValues((prev) => prev);
              return;
            }
            const value = Math.min(Number(event.target.value), values.maxVal);
            setValues({ ...values, minVal: value });
            minValRef.current = value;
          }}
        />
        <div className='values__separator'></div>
        <input
          placeholder='до 10 000 000'
          className='values__right'
          value={values.maxVal}
          onChange={(event) => {
            if (isNaN(event.target.value)) {
              setValues((prev) => prev);
              return;
            }
            const value = Math.max(Number(event.target.value), values.minVal);
            if (value > max) {
              setValues({ ...values, maxVal: max });
              maxValRef.current = max;
              return;
            }
            setValues({ ...values, maxVal: value });
            maxValRef.current = value;
          }}
        />
      </div>
      <div className='slider'>
        <input
          type='range'
          min={min}
          max={max}
          value={values.minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), values.maxVal);
            setValues({ ...values, minVal: value });
            minValRef.current = value;
          }}
          className={`thumb thumb__left ${
            values.minVal > max - 100 ? 'thumb__left_zindex' : ''
          }`}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={values.maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), values.minVal);
            setValues({ ...values, maxVal: value });
            maxValRef.current = value;
          }}
          className='thumb thumb__right'
        />

        <div className='slider__track' />
        <div ref={range} className='slider__range' />
      </div>
    </div>
  );
};

DoubleRange.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.object,
  onChange: PropTypes.func,
};

DoubleRange.defaultProps = {
  min: 0,
  max: 10000000,
  value: { minVal: 0, maxVal: 10000000 },
  onChange: undefined,
};
