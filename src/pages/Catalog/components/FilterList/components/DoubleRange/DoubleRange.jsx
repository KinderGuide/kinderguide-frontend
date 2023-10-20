/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './DoubleRange.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setPriceFilter } from '../../../../../../store/filterSlice';

export const DoubleRange = React.memo(({ min, max }) => {
  const { price } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const range = useRef(null);

  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Задает ширину диапазона для уменьшения с левой стороны
  useEffect(() => {
    const minPercent = getPercent(price.minVal);
    const maxPercent = getPercent(price.maxVal);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [price.minVal, getPercent]);

  // Задает ширину диапазона для уменьшения с правой стороны
  useEffect(() => {
    const minPercent = getPercent(price.minVal);
    const maxPercent = getPercent(price.maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [price.maxVal, getPercent]);

  return (
    <div className='container'>
      <div className='values'>
        <input
          placeholder='от 1000'
          className='values__left'
          value={price.minVal}
          onChange={(event) => {
            if (isNaN(event.target.value)) {
              dispatch(setPriceFilter(price));
              return;
            }
            const value = Math.min(Number(event.target.value), price.maxVal);
            dispatch(setPriceFilter({ ...price, minVal: value }));
          }}
        />
        <div className='values__separator'></div>
        <input
          placeholder='до 10 000 000'
          className='values__right'
          value={price.maxVal}
          onChange={(event) => {
            if (isNaN(event.target.value)) {
              dispatch(setPriceFilter(price));
              return;
            }
            const value = Math.max(Number(event.target.value), price.minVal);
            if (value > max) {
              dispatch(setPriceFilter({ ...price, maxVal: max }));
              return;
            }
            dispatch(setPriceFilter({ ...price, maxVal: value }));
          }}
        />
      </div>
      <div className='slider'>
        <input
          type='range'
          min={min}
          max={max}
          value={price.minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), price.maxVal);
            dispatch(setPriceFilter({ ...price, minVal: value }));
          }}
          className={`thumb thumb__left ${
            price.minVal > max - 100 ? 'thumb__left_zindex' : ''
          }`}
        />
        <input
          type='range'
          min={min}
          max={max}
          value={price.maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), price.minVal);
            dispatch(setPriceFilter({ ...price, maxVal: value }));
          }}
          className='thumb thumb__right'
        />

        <div className='slider__track' />
        <div ref={range} className='slider__range' />
      </div>
    </div>
  );
});

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
