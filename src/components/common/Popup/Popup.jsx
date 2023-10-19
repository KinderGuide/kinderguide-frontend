import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { closeAllModals } from '../../../store/modalsSlice';

import './Popup.scss';

export const Popup = ({ isOpen, name, children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        dispatch(closeAllModals());
      }
    };

    document.addEventListener('keydown', closeByEscape);
    document.body.classList.add('page_lock');

    return () => {
      document.body.classList.remove('page_lock');
      document.removeEventListener('keydown', closeByEscape);
    };
  }, [isOpen, dispatch]);

  const handleOverlay = (e) => {
    if (e.target === e.currentTarget) {
      dispatch(closeAllModals());
    }
  };

  return (
    <div
      className={`popup${(isOpen && ' popup_opened') || ''} popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div className={`popup__container popup__container_type_${name}`}>
        {children}
        <button
          className='popup__close-btn'
          type='button'
          onClick={() => dispatch(closeAllModals())}
        />
      </div>
    </div>
  );
};
