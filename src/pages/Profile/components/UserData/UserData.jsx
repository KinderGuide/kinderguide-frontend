import React from 'react';
import './UserData.scss';
import { Button } from '../../../../components/common/Button';

export function UserData({ setEditUser, dataUser }) {
  return (
    <>
      <div className='user__wrapper user__wrapper_top'>
        <p className='user__label'>Имя родителя</p>
        <p className='user__text'>
          {`${dataUser.parent_first_name} ${dataUser.parent_last_name}`}
        </p>
      </div>
      <div className='user__wrapper'>
        <p className='user__label'>Имя ребёнка</p>
        <p className='user__text'>
          {`${dataUser.child_first_name} ${dataUser.child_last_name}`}
        </p>
      </div>
      <div className='user__wrapper'>
        <p className='user__label'>Телефон</p>
        <p className='user__text'>{`${dataUser.phone}`}</p>
      </div>
      <div className='user__wrapper user__wrapper_bottom'>
        <p className='user__label'>Email</p>
        <p className='user__text'>{`${dataUser.email}`}</p>
      </div>
      <Button
        type='button'
        width='188px'
        size='medium'
        color='orange-fill'
        onClick={(e) => {
          setEditUser(true);
        }}
      >
        Изменить
      </Button>
    </>
  );
}
