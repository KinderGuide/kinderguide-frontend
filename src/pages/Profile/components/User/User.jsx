import React, { useState } from 'react';
import './User.scss';
import { UserEdit } from '../UserEdit/UserEdit';
import { UserData } from '../UserData/UserData';

export function User() {
  const [editUser, setEditUser] = useState(false);

  return (
    <section className='user'>
      <div className='user__avatar' />
      {editUser ? (
        <UserEdit setEditUser={setEditUser} />
      ) : (
        <UserData setEditUser={setEditUser} />
      )}
    </section>
  );
}
