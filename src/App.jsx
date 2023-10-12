import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Home } from './pages/Home';
import { Recovery } from './pages/Recovery';
import { Catalog } from './pages/Catalog';
import { Specialists } from './pages/Specialists';
import { NotFoundPage } from './pages/NotFoundPage';
import { Parents } from './pages/Parents';
import { Profile } from './pages/Profile';
import { ImagePopup } from './components/common/ImagePopup';
import { RegisterModal } from './components/RegisterModal';
import { RegisterSuccessModal } from './components/RegisterSuccessModal';
import { LoginModal } from './components/LoginModal';
import { PasswordRecoveryModal } from './components/PasswordRecoveryModal';
import { PasswordRecoverySuccessModal } from './components/PasswordRecoverySuccessModal';
import { Slider } from './components/common/Slider/Slider';

function App() {
  return (
    <Layout>
      <Slider />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>

      <ImagePopup />

      <RegisterModal />
      <RegisterSuccessModal />
      <LoginModal />
      <PasswordRecoveryModal stepRecovery={1} />
      <PasswordRecoverySuccessModal />
    </Layout>
  );
}

export default App;
