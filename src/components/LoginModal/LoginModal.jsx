import './LoginModal.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputPassword } from '../InputPassword';
import { Button } from '../common/Button';
import { useSelector } from 'react-redux';
import { useLoginMutation } from '../../api/authApi';
import { setCredentials } from '../../store/authSlice';
import { useDispatch } from 'react-redux';
import { closeAllModals } from '../../store/modalsSlice';

export const LoginModal = () => {
  const { data, onChange, errors, isValid } = useFormAndValidation();
  const isOpen = useSelector((state) => state.modals.isOpenLoginModal);

  const [login, { isLoading, isError }] = useLoginMutation();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await login({
        email: data['login-form-email'],
        password: data['login-form-password'],
      }).unwrap();

      // const userData = await response.json();
      console.log(response.access);

      dispatch(
        setCredentials({
          user: true,
          token: response.access,
        })
      );
      dispatch(closeAllModals());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Popup isOpen={isOpen} name='login-modal'>
      <h2 className='login-modal__title'>Вход</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <InputWrapper
          inputId='login-form-email'
          variant='form'
          labelText='Email'
          errorText={errors['login-form-email']}
        >
          <Input
            inputId='login-form-email'
            variant='form'
            name='email'
            onChange={onChange}
            value={data['login-form-email']}
            placeholder='Введите email'
            type='email'
            isValid={!errors['login-form-email']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='login-form-password'
          variant='form'
          labelText='Пароль'
          errorText={errors['login-form-password']}
        >
          <InputPassword
            inputId='login-form-password'
            variant='form'
            name='password'
            onChange={onChange}
            value={data['login-form-password']}
            placeholder='Введите пароль'
            isValid={!errors['login-form-password']?.length}
            forgetPassword
          />
        </InputWrapper>

        <Button
          type='submit'
          width='532px'
          size='large'
          color={isValid ? 'orange-fill' : 'orange-dis'}
          disabled={!isValid}
        >
          Войти
        </Button>
      </form>
    </Popup>
  );
};
