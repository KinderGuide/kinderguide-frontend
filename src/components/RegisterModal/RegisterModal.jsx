import './RegisterModal.scss';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { Popup } from '../common/Popup';
import { InputWrapper } from '../common/InputWrapper';
import { Input } from '../common/Input';
import { InputTel } from '../InputTel';
import { InputPassword } from '../InputPassword';
import { InputCheckbox } from '../InputCheckbox';
import { Button } from '../common/Button';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useCreateUserMutation } from '../../api/authApi';

export const RegisterModal = () => {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);

  const { data, setData, onChange, errors, isValid, resetForm } =
    useFormAndValidation();

  const isOpen = useSelector((state) => state.modals.isOpenRegisterModal);

  const [createUser, { isLoading, isError }] = useCreateUserMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data);
    try {
      const response = await createUser(data).unwrap();
      console.log(response); // eslint-disable-line
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  // Проверка всех полей формы на валидность
  // экзотические инпуты проверяются в самой форме

  useEffect(() => {
    if (data.phone && isConfirm && isValid) {
      // Это костыль, чтобы провалидировать инпут телефона из библиотечки
      if (!data.phone?.includes('_')) {
        setIsReadyToSubmit(true);
      } else {
        setIsReadyToSubmit(false);
      }
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data.phone, isValid, isConfirm]);

  return (
    <Popup isOpen={isOpen} name='register-modal'>
      <h2 className='register-modal__title'>Регистрация</h2>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <InputWrapper
          inputId='first_name'
          variant='form'
          labelText='Имя'
          errorText={errors['first_name']}
        >
          <Input
            inputId='first_name'
            variant='form'
            name='name'
            onChange={onChange}
            value={data.first_name}
            placeholder='Введите имя'
            type='text'
            isValid={!errors['first_name']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='last_name'
          variant='form'
          labelText='Фамилия'
          errorText={errors['last_name']}
        >
          <Input
            inputId='last_name'
            variant='form'
            name='lastname'
            onChange={onChange}
            value={data.last_name}
            placeholder='Введите фамилию'
            type='text'
            isValid={!errors['lastname']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='phone'
          variant='form'
          labelText='Телефон'
          errorText={errors['phone']}
        >
          <InputTel
            inputId='phone'
            name='phone'
            onChange={onChange}
            value={data['phone']}
            isValid={!data.phone?.includes('_')}
          />
        </InputWrapper>

        <InputWrapper
          inputId='email'
          variant='form'
          labelText='Email'
          errorText={errors['email']}
        >
          <Input
            inputId='email'
            variant='form'
            name='email'
            onChange={onChange}
            value={data['email']}
            placeholder='Введите email'
            type='email'
            isValid={!errors['email']?.length}
          />
        </InputWrapper>

        <InputWrapper
          inputId='password'
          variant='form'
          labelText='Пароль'
          errorText={errors['password']}
        >
          <InputPassword
            inputId='password'
            variant='form'
            name='password'
            onChange={onChange}
            value={data['password']}
            placeholder='Введите пароль'
            isValid={!errors['password']?.length}
          />
        </InputWrapper>

        <InputCheckbox
          variant='terms'
          text
          type='checkbox'
          isChecked={isConfirm}
          onChange={() => {
            setIsConfirm(!isConfirm);
          }}
        />
        <Button
          type='submit'
          width='532px'
          size='large'
          color={isReadyToSubmit ? 'orange-fill' : 'orange-dis'}
          disabled={!isReadyToSubmit}
        >
          Зарегистрироваться
        </Button>
      </form>
    </Popup>
  );
};
