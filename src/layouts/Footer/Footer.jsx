import { Link } from 'react-router-dom';
import './Footer.scss';
import logo from '../../images/Footer/logo_footer.svg';
import whatsappLogo from '../../images/Footer/whatsapp-logo-light.svg';
import telegramLogo from '../../images/Footer/telegram-logo-light.svg';
import vkLogo from '../../images/Footer/vk-logo-light.svg';
import { Navigation } from '../../components/Navigation';

export const Footer = () => (
  <footer className='footer'>
    <div className='footer__flex-container'>
      <Link to='/'>
        <img className='footer__logo' src={logo} alt='логотип сайта' />
      </Link>

      <Navigation usedFor='footer' />
      <div className='footer__right-container'>
        <p className='footer__feedback'>KinderGuide@yandex.ru</p>
        <div className='footer__social-network-area'>
          <Link to='/' className='footer__social-network-item'>
            <img src={telegramLogo} alt='ссылка на телеграм' />
          </Link>
          <Link to='/' className='footer__social-network-item'>
            <img src={vkLogo} alt='ссылка на инстаграм' />
          </Link>
          <Link to='/' className='footer__social-network-item'>
            <img src={whatsappLogo} alt='ссылка на ватсап' />
          </Link>{' '}
        </div>
      </div>
    </div>
    <div className='footer__documents'>
      <Link to='/' className='footer__documents-item'>
        Политика конфиденциальности
      </Link>
      <Link to='/' className='footer__documents-item'>
        Пользовательское соглашение
      </Link>
    </div>
  </footer>
);
