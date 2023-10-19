import { useDispatch, useSelector } from 'react-redux';

import { openLoginModal, openRegisterModal } from '../../store/modalsSlice';
import { PositionedPopup } from '../common/PositionedPopup';
import { Button } from '../common/Button';
import './LoginToFavoritePopup.scss';

export const LoginToFavoritePopup = () => {
  const widthPopup = 450;
  const dispatch = useDispatch();
  const isOpen = useSelector(
    (state) => state.modals.isOpenLoginToFavoritePopup
  );

  const popupData = useSelector(
    (state) => state.modals.loginToFavoritePopupData
  );

  return (
    <PositionedPopup
      isOpen={isOpen}
      name='login-to-favorite'
      left={popupData?.left - widthPopup}
      top={popupData?.top + 10}
    >
      <div className='popup-favorite'>
        <p className='popup-favorite__description'>
          Войдите в личный кабинет, чтобы добавить в&nbsp;избранное
        </p>
        <p className='popup-favorite__register'>
          В первый раз здесь?&nbsp;
          <button type='button' onClick={() => dispatch(openRegisterModal())}>
            Зарегистрируйтесь
          </button>
        </p>
        <Button
          type='button'
          size='small'
          width='188px'
          onClick={() => dispatch(openLoginModal())}
        >
          Войти
        </Button>
      </div>
    </PositionedPopup>
  );
};
