import './RegisterSuccessModal.scss';
import { Link } from 'react-router-dom';
import { Popup } from '../common/Popup';
import { useSelector } from 'react-redux';
export const RegisterSuccessModal = ({ email = 'example@mail.ru' }) => {
  const isOpen = useSelector(
    (state) => state.modals.isOpenRegisterSuccessModal
  );

  return (
    <Popup isOpen={isOpen} name='register-success-modal'>
      <h2 className='register-succes-modal__title'>
        Вы успешно зарегистрировались!
      </h2>
      <p className='register-succes-modal__description'>
        Мы отправили письмо вам на email <span>{email}</span>. Пожалуйста,
        пройдите по ссылке для завершения регистрации.
      </p>
      <p className='register-succes-modal__description'>
        Не получили email? Проверьте спам или{' '}
        <Link to='/'>
          <span>попробуйте снова</span>
        </Link>
        .
      </p>
    </Popup>
  );
};
