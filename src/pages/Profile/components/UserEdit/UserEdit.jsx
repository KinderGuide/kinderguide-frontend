import './UserEdit.scss';
import { InputWrapper } from '../../../../components/common/InputWrapper';
import { Input } from '../../../../components/common/Input';
import { Button } from '../../../../components/common/Button';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '../../../../api/userApi';
import { useEffect, useState } from 'react';
import { InputTel } from '../../../../components/InputTel';

export function UserEdit({ setEditUser }) {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  const [updateUser] = useUpdateUserMutation();
  const { data: userData = {} } = useGetUserQuery();

  const { data, setData, onChange, errors, isValid } = useFormAndValidation();
  useEffect(() => {
    if (data.phone && isValid) {
      // Это костыль, чтобы провалидировать инпут телефона из библиотечки
      if (!data.phone?.includes('_')) {
        setIsReadyToSubmit(true);
      } else {
        setIsReadyToSubmit(false);
      }
    } else {
      setIsReadyToSubmit(false);
    }
  }, [data, isValid]);

  useEffect(() => {
    const {
      first_name,
      last_name,
      child_first_name,
      child_last_name,
      phone,
      email,
    } = userData;
    setData({
      first_name: first_name,
      last_name: last_name,
      child_first_name: child_first_name,
      child_last_name: child_last_name,
      phone: phone,
      email: email,
    });
  }, [setData, userData]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUser({
      first_name: data.first_name,
      last_name: data.last_name,
      child_first_name: data.child_first_name,
      child_last_name: data.child_last_name,
      phone: data.phone,
      email: data.email,
    });
    if (data) {
      setEditUser(false);
    }
  };

  return (
    <form className='user-edit__form'>
      <div className='user__wrapper user__wrapper-edit'>
        <p className='user-edit__name-text'>Родитель</p>
        <InputWrapper
          labelText='Имя'
          inputId='first_name'
          variant='info'
          errorText={errors['first_name']}
        >
          <Input
            inputId='first_name'
            variant='info'
            name='first_name'
            onChange={onChange}
            value={data['first_name']}
            placeholder='Введите имя'
            type='text'
            isValid={!errors['first_name']?.length}
          />
        </InputWrapper>
        <InputWrapper
          labelText='Фамилия'
          inputId='last_name'
          variant='info'
          errorText={errors['last_name']}
        >
          <Input
            inputId='last_name'
            variant='info'
            name='last_name'
            onChange={onChange}
            value={data['last_name']}
            placeholder='Введите фамилию'
            type='text'
            isValid={!errors['last_name']?.length}
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper user__wrapper-edit'>
        <p className='user-edit__name-text'>Ребёнок</p>
        <InputWrapper
          labelText='Имя'
          inputId='child_first_name'
          variant='info'
          errorText={errors['child_first_name']}
        >
          <Input
            inputId='child_first_name'
            variant='info'
            name='child_first_name'
            onChange={onChange}
            value={data['child_first_name']}
            placeholder='Введите имя'
            type='text'
            isValid={!errors['child_first_name']?.length}
          />
        </InputWrapper>
        <InputWrapper
          labelText='Фамилия'
          inputId='child_last_name'
          variant='info'
          errorText={errors['child_last_name']}
        >
          <Input
            inputId='child_last_name'
            variant='info'
            name='child_last_name'
            onChange={onChange}
            value={data['child_last_name']}
            placeholder='Введите фамилию'
            type='text'
            isValid={!errors['child_last_name']?.length}
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper user__wrapper-edit'>
        <p className='user-edit__name-text'>Телефон</p>
        <InputWrapper
          labelText='Телефон'
          inputId='phone'
          variant='info'
          errorText={errors['phone']}
        >
          <InputTel
            isClass='inputTel__profile'
            variant='info'
            inputId='phone'
            name='phone'
            placeholder='Введите телефон'
            type='tel'
            onChange={onChange}
            value={data['phone']}
            isValid={!data.phone?.includes('_')}
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper user__wrapper-edit'>
        <p className='user-edit__name-text'>Email</p>
        <InputWrapper
          labelText='Email'
          inputId='email'
          variant='info'
          errorText={errors['email']}
        >
          <Input
            inputId='email'
            variant='info'
            name='email'
            onChange={onChange}
            value={data.email}
            placeholder='Введите email'
            type='email'
            isValid={!errors['email']?.length}
          />
        </InputWrapper>
      </div>
      <div className='user-edit__btns'>
        <Button
          type='submit'
          width='188px'
          size='small'
          color={isReadyToSubmit ? 'orange-fill' : 'empty'}
          disabled={!isReadyToSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Сохранить
        </Button>
        <Button
          type='button'
          width='188px'
          size='small'
          color='orange-empty'
          onClick={(e) => {
            e.preventDefault();
            setEditUser(false);
          }}
        >
          Отмена
        </Button>
      </div>
    </form>
  );
}
