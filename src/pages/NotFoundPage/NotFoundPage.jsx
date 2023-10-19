import React from 'react';
import { EmptyPage } from '../../components/common/EmptyPage';

import { notfoundPage } from '../../utils/emptyPageMessage';
import './NotFoundPage.scss';
import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <div className='not-found'>
      <EmptyPage title={notfoundPage.title} size='small' margin='medium'>
        <Link to={'/'} className='not-found__link'>
          На главную
        </Link>
      </EmptyPage>
    </div>
  );
}
