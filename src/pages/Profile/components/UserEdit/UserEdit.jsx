import { useEffect, useState } from 'react';

import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
import { InputWrapper } from '../../../../components/common/InputWrapper';
import { Input } from '../../../../components/common/Input';
import { Button } from '../../../../components/common/Button';
import { InputTel } from '../../../../components/InputTel';
import {
  useGetUserQuery,
  useUpdateUserMutation,
} from '../../../../api/userApi';

import './UserEdit.scss';

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
      <p className='user-edit__name-text'>Родитель</p>
      <div className='user__wrapper-edit'>
        <InputWrapper
          labelText='Имя'
          inputId='first_name'
          variant='profile'
          errorText={errors['first_name']}
        >
          <Input
            pattern='^[А-Яа-яA-Za-z]+$'
            inputId='first_name'
            variant='profile'
            name='first_name'
            onChange={onChange}
            value={data?.first_name || ''}
            placeholder='Введите имя'
            type='text'
            isValid={!errors['first_name']?.length}
          />
        </InputWrapper>
        <InputWrapper
          labelText='Фамилия'
          inputId='last_name'
          variant='profile'
          errorText={errors['last_name']}
        >
          <Input
            pattern='^[А-Яа-яA-Za-z]+$'
            inputId='last_name'
            variant='profile'
            name='last_name'
            onChange={onChange}
            value={data?.last_name || ''}
            placeholder='Введите фамилию'
            type='text'
            isValid={!errors['last_name']?.length}
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper-edit'>
        <InputWrapper
          labelText='Телефон'
          inputId='phone'
          variant='profile'
          errorText={errors['phone']}
        >
          <InputTel
            isClass='inputTel__profile'
            variant='profile'
            inputId='phone'
            name='phone'
            placeholder='Введите телефон'
            type='tel'
            onChange={onChange}
            value={data?.phone || ''}
            isValid={!data.phone?.includes('_')}
          />
        </InputWrapper>
        <InputWrapper
          labelText='Email'
          inputId='email'
          variant='profile'
          errorText={errors['email']}
        >
          <Input
            inputId='email'
            variant='profile'
            name='email'
            onChange={onChange}
            value={data?.email || ''}
            placeholder='Введите email'
            type='email'
            isValid={!errors['email']?.length}
          />
        </InputWrapper>
      </div>
      <div className='user-edit__btns user-edit__btns_desktop'>
        <Button
          type='submit'
          width='188px'
          size='small'
          color={isReadyToSubmit ? 'fill' : 'dis'}
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
          color='empty'
          onClick={(e) => {
            e.preventDefault();
            setEditUser(false);
          }}
        >
          Отмена
        </Button>
      </div>
      <div className='user-edit__btns user-edit__btns_tablet'>
        <Button
          type='submit'
          width='204px'
          size='small'
          color={isReadyToSubmit ? 'fill' : 'dis'}
          disabled={!isReadyToSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Сохранить
        </Button>
        <Button
          type='button'
          width='204px'
          size='small'
          color='empty'
          onClick={(e) => {
            e.preventDefault();
            setEditUser(false);
          }}
        >
          Отмена
        </Button>
      </div>
      <div className='user-edit__btns user-edit__btns_mobile'>
        <Button
          type='submit'
          width='288px'
          size='small'
          color={isReadyToSubmit ? 'fill' : 'dis'}
          disabled={!isReadyToSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Сохранить
        </Button>
        <Button
          type='button'
          width='288px'
          size='small'
          color='empty'
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
