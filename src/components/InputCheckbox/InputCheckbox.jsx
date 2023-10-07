import React, { useState } from 'react';
import './InputCheckbox.scss';

export function InputCheckbox() {
  const [isChecked, setIsChecked] = useState(true);
  return (
    <div className='checkbox'>
      <label
        htmlFor='terms'
        className={`checkbox__label ${isChecked ? 'checked' : ''}`}
      >
        <input
          type='checkbox'
          className='checkbox__input'
          name='terms'
          id='terms'
          checked={isChecked}
          onChange={() => {
            setIsChecked(!isChecked);
          }}
        />
      </label>
      <p className='checkbox__text'>
        Соглашаюсь с условиями использования
        <br /> и политикой конфиденциальности
      </p>
    </div>
  );
}