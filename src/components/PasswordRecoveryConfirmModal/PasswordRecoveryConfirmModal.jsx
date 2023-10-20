import './PasswordRecoveryConfirmModal.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { InputPassword } from '../InputPassword';

import { Button } from '../common/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { useConfirmResetPasMutation } from '../../api/authApi';

// stepRecovery -  шаг восстановления.
// пока что  варианты 1 - ввод почты & 2 - создание пароля
export const PasswordRecoveryConfirmModal = ({ id, token }) => {
  const { data, onChange, errors, setErrors, isValid } = useFormAndValidation();
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const isOpen = useSelector(
    (state) => state.modals.isOpenPasswordRecoveryConfirmModal
  );

  const [createNewPass, { isLoading, isError }] = useConfirmResetPasMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await createNewPass({
        new_password: data['password-recovery-form-password'],
        re_new_password: data['password-recovery-form-password-repeat'],
        MTY: id,
        token: token,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // проверка валдиности для второго шага
  useEffect(() => {
    if (
      isValid &&
      data['password-recovery-form-password'] ===
        data['password-recovery-form-password-repeat']
    ) {
      setIsReadyToSubmit(true);
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data, isValid]);

  useEffect(() => {
    if (
      data['password-recovery-form-password'] !==
        data['password-recovery-form-password-repeat'] &&
      data['password-recovery-form-password-repeat']?.length
    ) {
      setErrors({
        ...errors,
        'password-recovery-form-password-repeat': 'Пароли не совпадают',
      });
    } else {
      setErrors({
        ...errors,
        'password-recovery-form-password-repeat': '',
      });
    }
  }, [data]); // eslint-disable-line

  return (
    <Popup isOpen={isOpen} name='password-recovery-modal'>
      <h2 className='password-recovery-modal__title'>Восстановление пароля</h2>

      <form>
        <InputWrapper
          inputId='password-recovery-form-password'
          variant='form'
          labelText='Пароль'
          errorText={errors['password-recovery-form-password']}
        >
          <InputPassword
            inputId='password-recovery-form-password'
            variant='form'
            name='password'
            onChange={onChange}
            value={data['password-recovery-form-password']}
            placeholder='Введите пароль'
            isValid={!errors['password-recovery-form-password']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='password-recovery-form-password-repeat'
          variant='form'
          labelText='Пароль повторно'
          errorText={errors['password-recovery-form-password-repeat']}
        >
          <InputPassword
            inputId='password-recovery-form-password-repeat'
            variant='form'
            name='password'
            onChange={onChange}
            value={data['password-recovery-form-password-repeat']}
            placeholder='Введите пароль'
            isValid={!errors['password-recovery-form-password-repeat']?.length}
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
          Отправить
        </Button>
      </form>
    </Popup>
  );
};
