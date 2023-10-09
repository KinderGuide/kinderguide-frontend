import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './layouts/main';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Recovery } from './pages/Recovery';
import { Catalog } from './pages/Catalog';
import { Specialists } from './pages/Specialists';
import { NotFoundPage } from './pages/NotFoundPage';
import { Parents } from './pages/Parents';
import { Profile } from './pages/Profile';
import { Popup } from './components/common/Popup';
import { ImagePopup } from './components/common/ImagePopup';

function App() {
  // Стейты для попапов
  const [infoMessage, setInfoMessage] = useState('');
  const [image, setImage] = useState('');

  // Для просмотра работы попапа с непустыми значениями,
  // раскомментируйте одну из следующих пар строк и закомментируйте пустые значения

  // const [infoMessage, setInfoMessage] = useState(
  //   'Помогаем найти лучший образовательный центр для вашего ребёнка.'
  // );
  // const [image, setImage] = useState(
  //   'https://images.unsplash.com/photo-1696655496030-079414c31e06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80'
  // );

  function closeAllPopups() {
    setInfoMessage('');
    setImage('');
  }

  return (
    <Layout>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/specialists' element={<Specialists />} />
        <Route path='/parents' element={<Parents />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/recovery' element={<Recovery />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Popup isOpen={infoMessage} name='info' onClose={closeAllPopups}>
        <p className='popup__title popup__title_info'>{infoMessage}</p>
      </Popup>
      <ImagePopup image={image} onClose={closeAllPopups} />
    </Layout>
  );
}

export default App;
