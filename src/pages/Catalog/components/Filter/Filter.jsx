import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Filter.scss';

export function Filter({ title, variant, onClick, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        className='filter__subtitle-wrapper'
        onClick={() => onClick(setIsOpen, isOpen)}
      >
        <h3 className='filter__subtitle'>{title}</h3>
        <span
          className={`filter__subtitle-caret ${
            isOpen ? 'filter__subtitle-caret_active' : ''
          }`}
        ></span>
      </div>
      <ul
        className={`filter__list filter__list_${variant} ${
          isOpen ? `filter__list_${variant}_active` : ''
        }`}
      >
        {children}
      </ul>
    </>
  );
}

Filter.propTypes = {
  variant: PropTypes.oneOf(['checkbox', 'select']),
  title: PropTypes.oneOf([
    'Профиль',
    'Возраст',
    'Иностранные языки',
    'Округ',
    'Метро',
    'Стоимость',
  ]),
  children: PropTypes.node,
  onClick: PropTypes.func,
};

Filter.defaultProps = {
  variant: 'checkbox',
  title: 'Профиль',
  children: '',
  onClick: undefined,
};
