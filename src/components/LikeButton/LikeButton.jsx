import { useDispatch, useSelector } from 'react-redux';
import { openLoginToFavoritePopup } from '../../store/modalsSlice';
import { useRef } from 'react';

import './LikeButton.scss';

export const LikeButton = ({ isLiked, onLike }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const buttonRef = useRef(null);

  const handleLike = () => {
    if (user) {
      onLike();
    } else {
      // Получаем DOM-элемент кнопки и ее координаты
      const buttonElement = buttonRef.current;
      const buttonRect = buttonElement.getBoundingClientRect();

      // Определяем координаты left и top
      const coordinates = {
        left: buttonRect.left,
        top: buttonRect.top + buttonRect.height, // Добавляем высоту кнопки
      };

      dispatch(openLoginToFavoritePopup(coordinates));
    }
  };

  return (
    <button
      className={`like-button${isLiked ? ' like-button_active' : ''}`}
      ref={buttonRef}
      type='button'
      onClick={handleLike}
    />
  );
};
