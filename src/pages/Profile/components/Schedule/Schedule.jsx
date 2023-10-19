import React from 'react';
import './Schedule.scss';
import { EmptyPage } from '../../../../components/common/EmptyPage/EmptyPage';
import { futureSchedule } from '../../../../utils/emptyPageMessage';

export function Schedule() {
  return (
    <EmptyPage
      title={futureSchedule.title}
      size='small'
      color='black'
      margin='large'
      img={futureSchedule.img}
      imgName={futureSchedule.imgName}
    />
  );
}
