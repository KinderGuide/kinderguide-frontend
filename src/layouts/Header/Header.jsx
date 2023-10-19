import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/logo.svg';
import { Navigation } from '../../components/Navigation';
import { useDispatch, useSelector } from 'react-redux';
import { openLoginModal, openRegisterModal } from '../../store/modalsSlice';

export const Header = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  return (
    <header className='header'>
      <div className='header__left-container'>
        <Link to='/'>
          <img className='header__logo' src={logo} alt='logo' />
        </Link>
        <Navigation usedFor='header' />
      </div>
      {user ? (
        <Link to='profile' className='header__profile' />
      ) : (
        <div className='header__auth-area'>
          <button
            onClick={() => dispatch(openLoginModal())}
            className='header__auth-btn header__auth-btn_login'
          >
            Войти
          </button>
          <button
            onClick={() => dispatch(openRegisterModal())}
            className='header__auth-btn header__auth-btn_registration'
          >
            Создать аккаунт
          </button>
        </div>
      )}
    </header>
  );
};
