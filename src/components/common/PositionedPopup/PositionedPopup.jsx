import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';

import { closeAllModals } from '../../../store/modalsSlice';
import './PositionedPopup.scss';

export const PositionedPopup = ({ isOpen, name, children, left, top }) => {
  const containerRef = useRef(null);
  // стейты для высоты экрана и для координаты высоты для попапа
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);
  const [newTop, setNewTop] = useState(0);
  const [initialLeft, setInitialLeft] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    function handleResize() {
      setScreenHeight(window.innerHeight);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const closeByEscape = (e) => {
      if (e.key === 'Escape') {
        dispatch(closeAllModals());
      }
    };

    // проверяем top
    setVerticalPosition();

    // сохраняем left в стейт
    setInitialLeft(left);

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

  // проверяем помещается ли попап в экран, если нет - меняем координату высоты для отображения
  const setVerticalPosition = () => {
    if (containerRef.current) {
      // получаем высоту контейнера попапа
      const containerHeight =
        containerRef.current.getBoundingClientRect().height;

      if (screenHeight - top < containerHeight + 20) {
        setNewTop(top - containerHeight - 35);
      } else {
        setNewTop(top);
      }
    }
  };

  return (
    <div
      className={`position-popup${
        (isOpen && ' position-popup_opened') || ''
      } position-popup_type_${name}`}
      onMouseDown={handleOverlay}
    >
      <div
        className='position-popup__container'
        ref={containerRef}
        style={{
          position: 'absolute',
          left: initialLeft,
          top: newTop,
        }}
      >
        {children}
        <button
          className='position-popup__close-btn'
          type='button'
          onClick={() => dispatch(closeAllModals())}
        />
      </div>
    </div>
  );
};
