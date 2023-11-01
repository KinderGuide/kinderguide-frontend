import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { openPasswordRecoveryConfirmModal } from '../../store/modalsSlice';
import { PasswordRecoveryConfirmModal } from '../../components/PasswordRecoveryConfirmModal';

import { Promo } from './components/Promo';
import { News } from './components/News';
import { About } from './components/About';
import { ServiceWork } from './components/ServiceWork';
import './Home.scss';

export function Home() {
  const { id, token } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (id) {
      dispatch(openPasswordRecoveryConfirmModal());
    }
  });

  return (
    <>
      <Promo />
      <About />
      <ServiceWork />
      <News />
      <PasswordRecoveryConfirmModal id={id} token={token} />
    </>
  );
}
