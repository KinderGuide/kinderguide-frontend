import './PasswordRecoverySuccessModal.scss';
import { useSelector } from 'react-redux';
import { Popup } from '../common/Popup';
import { Button } from '../common/Button';

export const PasswordRecoverySuccessModal = ({
  onClose,
  onSubmit = () => {},
}) => {
  const isOpen = useSelector(
    (state) => state.modals.isOpenPasswordRecoverySuccessModal
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit();
    console.log('click'); // eslint-disable-line
  };

  return (
    <Popup
      isOpen={isOpen}
      onClose={onClose}
      name='password-recovery-success-modal'
    >
      <h2 className='password-recovery-success-modal__title'>
        Пароль успешно изменен
      </h2>

      <Button
        type='button'
        width='532px'
        size='large'
        color={'orange-fill'}
        onClick={(e) => {
          handleSubmit(e);
        }}
      >
        Войти
      </Button>
    </Popup>
  );
};
