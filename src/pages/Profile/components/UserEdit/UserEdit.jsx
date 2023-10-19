import './UserEdit.scss';
import { InputWrapper } from '../../../../components/common/InputWrapper';
import { Input } from '../../../../components/common/Input';
import { Button } from '../../../../components/common/Button';
import { useFormAndValidation } from '../../../../hooks/useFormAndValidation';
// import { useUpdateUserMutation } from '../../../../api/userApi';
import { useEffect, useState } from 'react';
import { InputTel } from '../../../../components/InputTel';

export function UserEdit({ setEditUser, onSubmit = () => {} }) {
  const [isReadyToSubmit, setIsReadyToSubmit] = useState(false);

  // const [updateUser] = useUpdateUserMutation();

  const { data, onChange, errors, isValid } = useFormAndValidation();
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

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(data);
    if (data) {
      setEditUser(false);
    }
    console.log(data); // eslint-disable-line
  };

  // useEffect(() => {
  //   if (data.phone && data.phone?.includes('_')) {
  //     setErrors({
  //       ...errors,
  //       phone: 'Введите корректный номер телефона',
  //     });
  //   }
  // }, [data, errors]); // eslint-disable-line

  return (
    <form className='user-edit__form'>
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Имя родителя</p>
        <InputWrapper
          labelText='Имя'
          inputId='parent_first_name'
          variant='info'
          errorText={errors['parent_first_name']}
        >
          <Input
            inputId='parent_first_name'
            variant='info'
            name='parent_first_name'
            onChange={onChange}
            value={data['parent_first_name']}
            placeholder='Введите имя'
            type='text'
            isValid={!errors['parent_first_name']?.length}
          />
        </InputWrapper>
        <InputWrapper
          labelText='Фамилия'
          inputId='parent_last_name'
          variant='info'
          errorText={errors['parent_last_name']}
        >
          <Input
            inputId='parent_last_name'
            variant='info'
            name='parent_last_name'
            onChange={onChange}
            value={data['parent_last_name']}
            placeholder='Введите фамилию'
            type='text'
            isValid={!errors['parent_last_name']?.length}
          />
        </InputWrapper>
      </div>
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Имя ребенка</p>
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
      <div className='user__wrapper'>
        <p className='user-edit__name-text'>Телефон</p>
        <InputWrapper
          labelText='Телефон'
          inputId='phone'
          variant='info'
          errorText={errors['phone']}
        >
          <InputTel
            isClass='inputTel__profiel'
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
      <div className='user__wrapper'>
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
          size='medium'
          color={isReadyToSubmit ? 'orange-fill' : 'empty'}
          disabled={!isReadyToSubmit}
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          Изменить
        </Button>
        <Button
          type='button'
          width='188px'
          size='medium'
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
