import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useResetPasMutation } from '../../api/authApi';
import { closeAllModals } from '../../store/modalsSlice';
import { Popup } from '../common/Popup';
import { Input } from '../common/Input';
import { InputWrapper } from '../common/InputWrapper';
import { Button } from '../common/Button';
import './PasswordRecoveryModal.scss';

// stepRecovery -  шаг восстановления.
// пока что  варианты 1 - ввод почты & 2 - создание пароля
export const PasswordRecoveryModal = () => {
  const { data, onChange, errors, resetForm } = useFormAndValidation();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const isOpen = useSelector(
    (state) => state.modals.isOpenPasswordRecoveryModal
  );
  const dispatch = useDispatch();
  const [resetPassword, { isLoading, isError }] = useResetPasMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await resetPassword({
        email: data['password-recovery-form-email'],
      }).unwrap();
      console.log(response); // eslint-disable-line
      resetForm();
      dispatch(closeAllModals());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (
      data['password-recovery-form-email']?.length &&
      !errors['password-recovery-form-email']?.length
    ) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data]); // eslint-disable-line

  return (
    <Popup isOpen={isOpen} name='password-recovery-modal'>
      <h2 className='password-recovery-modal__title'>Восстановление пароля</h2>

      <ol className='password-recovery-modal__instructions'>
        <li>Введите ваш email.</li>
        <li>Мы отправим вам ссылку. для восстановления пароля.</li>
        <li>По ссылке из письма можно будет восстановить пароль.</li>
      </ol>

      <form>
        <InputWrapper
          inputId='password-recovery-form-email'
          variant='form'
          labelText='Email'
          errorText={errors['password-recovery-form-email']}
        >
          <Input
            inputId='password-recovery-form-email'
            variant='form'
            name='email'
            onChange={onChange}
            value={data['password-recovery-form-email'] || ''}
            placeholder='Введите email'
            type='email'
            isValid={!errors['password-recovery-form-email']?.length}
          />
        </InputWrapper>

        <Button
          type='submit'
          width='532px'
          size='large'
          color={isReadyToSubmit ? 'orange-fill' : 'orange-dis'}
          disabled={!isReadyToSubmit && isLoading}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          {isLoading ? 'Подождите' : 'Отправить'}
        </Button>
      </form>

      <p className='password-recovery-form__message'>
        Не получили email? Проверьте спам <br /> или попробуйте снова.
      </p>
    </Popup>
  );
};
