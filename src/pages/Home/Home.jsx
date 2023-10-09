import React from 'react';

import './Home.scss';
import { Promo } from './components/Promo';
import { Resources } from './components/Resources';
import { About } from './components/About';

export function Home() {
  return (
    <>
      <Promo />
      <About />
      <Resources />
    </>
  );
}
